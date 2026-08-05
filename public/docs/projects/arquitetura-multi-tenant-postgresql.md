> **Nota de Confidencialidade**: Arquitetura corporativa desenvolvida sob acordo de confidencialidade (NDA). Código-fonte, nomes de tabelas específicas e regras de infraestrutura interna são protegidos e omitidos.

---

### 📋 O que o Sistema Faz
Arquitetura de isolamento multi-tenant dinâmico no nível de banco de dados PostgreSQL utilizando Schemas dedicados e propagação de contexto assíncrono em Node.js (`AsyncLocalStorage`):

1. **Isolamento de Dados por Schema**: Empresas privadas possuem schemas PostgreSQL dedicados (`customer_<id>`), garantindo que todas as tabelas operacionais fiquem fisicamente e logicamente isoladas.
2. **Tabelas Globais e Catálogos Compartilhados**: Tabelas de identidade (usuários, autenticação) e referências corporativas (bancos, cidades, módulos do sistema) residem no schema público compartilhado (`public`).
3. **Propagação Transparente de Contexto via AsyncLocalStorage**: O contexto da empresa autenticada é injetado no início da requisição/job e propagado automaticamente por toda a pilha assíncrona do Node.js, sem necessidade de repassar parâmetros manualmente entre funções de serviço.
4. **Troca Dinâmica de `search_path`**: Execução de `SET LOCAL search_path` dinâmico em milissegundos via serviço transacional em TypeORM 0.3.

---

### 🛠️ Stack Tecnológica

#### 🔧 Core Architecture & Backend Worker
- **Core**: Node.js `AsyncLocalStorage` (`async_hooks` nativo) + TypeScript 5
- **Framework & Interceptação**: NestJS 11 com Interceptors globais para requisições HTTP
- **ORM & Banco de Dados**: TypeORM 0.3 em PostgreSQL com resolução dinâmica de `search_path` (`customer_<id>,public`)
- **Cache de Contexto**: Cache em memória com expiração de 60 segundos para otimizar acessos às configurações de empresas
- **Automação Background**: Utilitários de contexto para execução assíncrona isolada em Crons, WebSockets e consumidor de filas SQS
- **Autenticação & Segurança**: AWS Cognito com extração automatizada de contexto do tenant

---

### 🔄 Arquitetura de Componentes e Fluxo de Execução

```
[1. HTTP Req / Cron / SQS Batch] ➔ [2. Serviço de Contexto (ALS + Cache 60s)] 
                                                   ⬇
[5. PostgreSQL Customer Schema] ⬅ [4. SET LOCAL search_path] ⬅ [3. Serviço Transacional Multi-Tenant]
```

1. **Intercepção & Resolução do Tenant**: O interceptor HTTP ou utilitário de background extrai o ID do tenant do JWT/evento e consulta o serviço de contexto.
2. **Cache em Memória & ALS**: O serviço verifica se a empresa utiliza schema privado (com cache de 60s) e inicializa a instância do `AsyncLocalStorage` com o contexto `{ companyId, schemaName }`.
3. **Abertura da Transação de Tenant**: O serviço transacional abre a transação no TypeORM (`DataSource.transaction`).
4. **Configuração de `search_path` no PostgreSQL**: O serviço executa no banco o comando de sessão SQL:
   ```sql
   SELECT set_config('search_path', 'customer_N,public', true);
   ```
5. **Execução Isolada de Queries**: Todas as operações do repositório/EntityManager dentro da transação passam a resolver automaticamente no schema do tenant, direcionando apenas leituras de tabelas globais para `public`.

---

### 🔍 Detalhamento Técnico e Boas Práticas

- **Classificação Canônica de Tabelas**:
  - **Tenant-Scoped**: Tabelas operacionais de domínio (faturamento, cartões, financeiro).
  - **Public-Only**: Tabelas corporativas globais (empresas, usuários, catálogo de bancos e cidades).
- **Garantia de Isolamento no Código**: Padrão obrigatório de transação via gerenciador scoped para impedir que consultas sem contexto caiam por engano no schema `public`.
- **Invalidação de Cache**: Mecanismo de expiração acionado ao alterar parametrizações corporativas.

---

### 🔒 Segurança e Multi-tenancy
- Isolamento absoluto no banco de dados: impossibilidade física de uma empresa acessar dados de outro schema durante a mesma sessão transacional.
- Validação no middleware da integridade do token Cognito e do schema resolvido antes de liberar a execução do serviço.
