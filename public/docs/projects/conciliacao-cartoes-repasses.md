> **Nota de Confidencialidade**: Projeto corporativo desenvolvido sob acordo de confidencialidade (NDA). Código-fonte, endpoints internos, estruturas de tabelas e nomes comerciais são protegidos e omitidos.

---

### 📋 O que o Sistema Faz
Plataforma de alta performance para conciliação financeira de cartões de crédito/débito, repasses de adquirentes e liquidação de títulos no ERP corporativo:

1. **Cruzamento Automatizado Multi-Adquirente**: Leitura e pareamento em massa entre extratos/repasses importados das adquirentes e as parcelas de vendas registradas no ERP da empresa.
2. **Matriz de Status de Conciliação em Tempo Real**: Classificação instantânea de cada lançamento entre:
   - `CONCILIATED`: Match exato de valores entre adquirente e ERP.
   - `TOLERATED`: Divergência financeira dentro da taxa de tolerância percentual cadastrada para a filial.
   - `DIVERGENT`: Divergência financeira que excede a margem de tolerância.
   - `NOT_FOUND_IN_API`: Venda registrada no ERP sem repasse correspondente na adquirente.
   - `NOT_FOUND_IN_ERP`: Repasse recebido da adquirente sem título de venda equivalente no ERP.
3. **Efetivação de Baixas & Integração com ERP**: Execução de ordens de conciliação manuais ou em lote com disparo assíncrono de mensagens para baixa de títulos no ERP.

---

### 🛠️ Stack Tecnológica

#### 🔧 Backend Worker & Pipeline SQL
- **Core**: NestJS 11 + Express 5 + TypeScript 5
- **ORM & Banco de Dados**: TypeORM 0.3 em PostgreSQL otimizado com CTEs (Common Table Expressions) materializadas para processamento de alto volume em milissegundos
- **Isolamento Multi-tenant**: Contexto dinâmico de tenant via AsyncLocalStorage e serviço de transações com schemas isolados por empresa
- **Mensageria & Fila**: AWS SQS (FIFO) para envio assíncrono de ordens de baixa no ERP
- **Cache & Idempotência**: Redis com controle de idempotência para garantia de execução única em conciliações concorrentes
- **Autenticação & Segurança**: AWS Cognito e controle rigoroso de autorização por tenant

#### 🖥️ Frontend Portal de Gestão
- **Core**: Next.js 14+ (App Router com Server Components e Client Components) + TypeScript 5
- **Gerenciamento de Estado Server & Cache**: TanStack React Query v5 com hidratação SSR (`HydrationBoundary` e `dehydrate`)
- **Interface & UI**: CSS Vanilla + Tailwind CSS com componentes compartilhados de data grids e cards de resumo
- **Comunicação HTTP**: Cliente HTTP desacoplado com suporte a cookies e tokens de autorização

---

### 🔄 Fluxos de Ponta a Ponta (Arquitetura de Sequência)

```
[1. Frontend SSR Hydration] ➔ [2. Pipeline CTEs PostgreSQL] ➔ [3. Matriz de Match (Status CASE)]
                                                                          ⬇
[6. Fila SQS Baixa ERP] ⬅ [5. Gravação de Conciliações] ⬅ [4. Conciliação Manual / Auto]
```

1. **Carregamento Inicial & SSR Hydration**: O Server Component efetua o prefetch dos dados essenciais (ex: domicílios bancários) e desidrata o cache via React Query (`dehydrate`), entregando HTML estático responsivo.
2. **Consulta & Pipeline de CTEs**: O backend executa uma consulta PostgreSQL estruturada com CTEs encadeadas:
   - Deduplicação de títulos do ERP por chaves compostas de transação.
   - Unificação e indexação de identificadores de consulta (NSU Host, NSU TEF e GUIDs de transação).
   - Execução de *equi-join* hashável entre repasses adquirentes e títulos ERP.
3. **Classificação por Regras de Negócio**: Aplica a lógica condicional comparando os valores líquidos com a taxa de tolerância cadastrada na filial.
4. **Efetivação da Conciliação**: O usuário seleciona os itens e dispara a ordem de conciliação. O backend valida o pertencimento da empresa, verifica duplicidades, grava os vínculos no banco de dados e emite mensagens na fila SQS FIFO para baixa dos títulos no ERP.

---

### 🔍 Detalhamento Técnico das Features

- **Consultas & Endpoints**:
  - Consulta de parcelas e conciliação com filtros dinâmicos de data, adquirente e status.
  - Efetivação manual de conciliação e solicitação de baixa no ERP.
  - Listagem e parametrização de domicílios bancários.

---

### 🔒 Segurança e Multi-tenancy
- Token JWT validado com extração segura do contexto da empresa.
- Isolamento dinâmico no banco de dados garantindo que consultas e transações operem exclusivamente dentro do schema da empresa autenticada.
