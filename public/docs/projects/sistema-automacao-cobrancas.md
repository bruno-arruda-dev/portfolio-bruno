> **Nota de Confidencialidade**: Projeto corporativo desenvolvido para automação em escala. O código-fonte e nomes comerciais estão omitidos por questões contratuais (NDA).

---

### 📋 O que o Sistema Faz
Plataforma **fullstack multi-tenant** desenvolvida de ponta a ponta para automatizar régua de cobranças e notificações de clientes. O sistema permite cadastrar configurações personalizadas de cobrança com layouts modulares de boletos, ativos visuais (logos/assinaturas) e réguas de envio. Nos horários agendados, o motor lê os registros de cobrança dos clientes e dispara as notificações automaticamente via **E-mail** e **WhatsApp**.

---

### 🛠️ Stack Tecnológica

#### 🔧 Backend (Worker / API Engine)
- **Core**: NestJS 11 + TypeScript 5.7 + Express 5
- **Banco de Dados**: PostgreSQL com TypeORM (arquitetura **multi-tenant** isolada por schema `customer_<id>`)
- **Cache & Lock**: Redis (ioredis 5 + cache-manager 6) para garantia de idempotência e controle de lock distribuído nos agendamentos
- **Cloud & Cloud-Native (AWS SDK v3)**:
  - **SQS FIFO**: Fila com ordenação rigorosa e deduplicação por tenant (`messageGroupId`)
  - **S3**: Armazenamento e resolução de assets (logos/assinaturas por filial)
  - **Cognito & Secrets Manager**: Gestão de identidade, secrets e monitoramento CloudWatch
- **PDF & Autenticação**: Gerador de DANFE (NF-e 4.00), tokens JWT efêmeros para links públicos de pagamento
- **Integrações de Envio**: Integração com microsserviço de e-mail (AWS SES) e bot automatizado de WhatsApp (`whatsapp-web.js`) via cliente HTTP Axios
- **Integração ERP**: Conexão com ERP legado (Oracle) para ingestão automatizada de títulos, faturas e dados de clientes

#### 🖥️ Frontend (Portal de Gestão & View Público)
- **Core**: Next.js 16 (App Router, Turbopack, Server Actions) + React 19 + TypeScript 5
- **Interface & UI**: MUI Material 7, MUI X DataGrid Premium (tabelas avançadas de logs e previsões), Recharts (dashboards analíticos) e Framer Motion
- **Gerenciamento de Estado & Dados**: TanStack React Query 5, Zustand 5 (controle de drawers e modais) e Zod / React Hook Form
- **Página Pública**: Rota dinâmica otimizada `/cobranca/[token]` para acesso do cliente final ao boleto/PIX sem necessidade de login

---

### 🔄 Fluxo de Envio e Execução (Pipeline Assíncrono)

```
[1. CRON + Redis Lock] ➔ [2. Fila AWS SQS FIFO] ➔ [3. Worker Multi-Tenant] 
                                                               ⬇
[6. Painel / Logs] ⬅ [5. E-mail (SES) & WhatsApp Bot] ⬅ [4. Assets S3 + JWT]
                                                               ⬇
                                            [7. Tracking de Leitura/PIX]
```

1. **Gatilho de Agendamento (CRON & Lock Distribuído)**
   O serviço agendador (`NestJS @Schedule`) executa periodicamente. Um lock distribuído via Redis garante execução única entre instâncias. O sistema busca no PostgreSQL os títulos elegíveis para o horário.

2. **Enfileiramento Segura (AWS SQS FIFO)**
   Cada tenant/empresa gera uma mensagem na fila FIFO do SQS (`messageGroupId=company-{id}`), garantindo a ordem cronológica correta e impedindo disparos duplicados.

3. **Processamento Multi-Tenant**
   O consumidor processa as mensagens abrindo dinamicamente o contexto do banco de dados específico da empresa e registra a fila de envio no banco.

4. **Montagem do Disparo & Tokenização**
   O motor resolve os assets no S3 (logo da filial), compila o template HTML/texto, gera o token seguro JWT e cria o link público único de cobrança.

5. **Disparo Multicanal (E-mail & WhatsApp)**
   - **E-mail**: Enviado via requisição assíncrona para serviço serverless (AWS SES).
   - **WhatsApp**: Disparado via Bot dedicado com suporte a imagens e assinaturas dinâmicas.

6. **Persistência & Logs**
   O resultado do envio é gravado no PostgreSQL com o status atualizado (`SENT` ou `FAILED` com código de erro detalhado para auditoria).

7. **Tracking e Interação do Cliente Final**
   Quando o cliente acessa o link público, o portal registra métricas de rastreamento em tempo real (visualização, cópia de chave PIX, download de DANFE/Boleto), alimentando os gráficos e históricos do dashboard em tempo real.
