> **Nota de Confidencialidade**: Projeto corporativo desenvolvido sob acordo de confidencialidade (NDA). Código-fonte, endpoints internos, estruturas de tabelas e nomes comerciais são protegidos e omitidos.

---

### 📋 O que o Sistema Faz
Soluções integradas de Inteligência Artificial para gestão financeira corporativa em larga escala:

1. **Assistente Financeiro de IA (Chat Interativo)**: Chat conversacional em tempo real que analisa a saúde financeira corporativa, calcula o Demonstrativo de Resultado (DRE), Demonstrativo de Fluxo de Caixa (DFC), gera indicadores de liquidez, projeções de saldo acumulado e gera gráficos e artefatos visuais sob demanda.
2. **Categorização Automática de Movimentações por IA (Background / Cron & API)**: Motor assíncrono em segundo plano para classificação automática de movimentações não categorizadas (Títulos a Receber, Títulos a Pagar e Extratos Bancários), atribuindo a categoria financeira adequada da empresa através de modelos de linguagem (LLM).

---

### 🛠️ Stack Tecnológica

#### 🔧 Backend Worker & AI Engine
- **Core**: NestJS 11 + Express 5 + TypeScript 5
- **Engine de Inteligência Artificial / LLM**: Anthropic Claude (Claude Haiku) com suporte a Function Calling (ferramentas ativas, submissão de ações e diagnósticos) via serviço desacoplado de agentes
- **Agendamento & Automação**: NestJS `@Schedule` executando rotinas automáticas de categorização em lote
- **ORM & Banco de Dados**: TypeORM 0.3 em PostgreSQL com arquitetura **multi-tenant** isolada por schema
- **Autenticação & Segurança**: AWS Cognito, decoradores de controle multi-tenant e validação estrita de categorias por empresa

#### 🖥️ Frontend Portal de Gestão
- **Core**: Next.js 14+ (App Router com Server e Client Components) + TypeScript 5
- **Gerenciamento de Estado**: Zustand para controle de histórico de conversas, estados de carregamento e visualização de artefatos
- **Interface & UI**: Tailwind CSS com componentes customizados de Chat e Dashboards Analíticos
- **Comunicação HTTP**: Cliente HTTP desacoplado com suporte a tokens de autenticação

---

### 🔄 Fluxos de Ponta a Ponta (Arquitetura de Sequência)

```
[1. Chat / Cron Trigger] ➔ [2. Worker Backend Multi-Tenant] ➔ [3. Anthropic Claude (LLM)]
                                                                         ⬇
[6. Dashboard & Chat UI] ⬅ [5. Validação & Audit DB] ⬅ [4. Tool Calls (Insights / Categorize)]
```

#### 💬 Fluxo 1: Assistente Financeiro de IA (Chat)
1. **Saudação & Diagnóstico Inicial**: No carregamento do assistente, o backend calcula diagnósticos do fluxo de caixa e aciona o LLM para gerar uma mensagem de boas-vindas acompanhada de dashboards de KPIs.
2. **Processamento Conversacional**: Ao receber uma dúvida do usuário, o serviço de agentes envia o prompt com suporte a ferramentas ativas de consulta de insights.
3. **Invocação de Ferramentas (Function Calling)**: O LLM solicita sob demanda visões financeiras (resumo de liquidez, DRE, DFC, distribuição por categoria e evolução diária).
4. **Resposta Narrada & Artefatos**: O backend processa os dados no banco de dados dentro do schema do tenant, devolve ao LLM e entrega ao frontend a resposta narrada acompanhada de artefatos visuais interativos.

#### 🏷️ Fluxo 2: Categorização Automática de Movimentações por IA
1. **Agendamento & Permissão**: O job periódico busca empresas com a funcionalidade habilitada no contrato.
2. **Busca de Pendências**: Para cada empresa, o worker seleciona lotes de lançamentos financeiros não categorizados.
3. **Classificação via LLM**: O agente de IA analisa a descrição da movimentação, valor, data e a estrutura do plano de contas/categorias da empresa.
4. **Tool Call & Validação Multi-Tenant**: O agente aciona a ferramenta de submissão. O backend valida se cada categoria sugerida pertence à empresa antes de aplicar a atualização e gravar logs de auditoria e métricas.

---

### 🔍 Detalhamento Técnico das Features

- **Diagnósticos Financeiros Automáticos**: Cálculo e consolidação em tempo real de liquidez, saldo projetado e indicadores financeiros.
- **Auditoria de Jobs de Categorização**: Mapeamento de métricas de execução (total processado, taxa de acerto, tempo de execução e contagem de retentativas).
- **Tratamento de Exceções**: Mecanismo de controle de limite de tentativas para evitar chamadas repetidas a lançamentos incategorizáveis.

---

### 🔒 Segurança e Multi-tenancy
- Isolamento dinâmico de banco de dados executado no contexto transacional da empresa.
- Validação rigorosa no servidor para garantir que todas as categorias sugeridas pertençam exclusivamente ao tenant autenticado.
