> **Confidentiality Notice**: Core enterprise architecture developed under non-disclosure agreement (NDA). Source code, specific table names, and internal infrastructure rules are kept strictly confidential and omitted.

---

### 📋 Project Overview
Dynamic schema-based multi-tenant database isolation architecture built on PostgreSQL dedicated schemas and asynchronous context propagation in Node.js (`AsyncLocalStorage`):

1. **Schema Data Isolation**: Private companies possess dedicated PostgreSQL schemas (`customer_<id>`), ensuring that all operational tables remain physically and logically isolated.
2. **Global Tables & Shared Catalogs**: Identity tables (users, authentication) and corporate reference catalogs (banks, cities, system modules) reside in the shared public schema (`public`).
3. **Transparent Context Propagation via AsyncLocalStorage**: The authenticated company context is initialized at request/job entry and automatically propagated across Node.js asynchronous execution chains without passing parameters manually through service methods.
4. **Dynamic `search_path` Switching**: Sub-millisecond execution of dynamic `SET LOCAL search_path` via transactional services wrapping TypeORM 0.3.

---

### 🛠️ Tech Stack

#### 🔧 Core Architecture & Backend Worker
- **Core**: Node.js `AsyncLocalStorage` (native `async_hooks`) + TypeScript 5
- **Framework & Interception**: NestJS 11 with global Interceptors for HTTP requests
- **ORM & Database**: TypeORM 0.3 on PostgreSQL with dynamic `search_path` resolution (`customer_<id>,public`)
- **Context Cache**: In-memory cache with 60-second TTL to optimize company configuration lookups
- **Background Automation**: Context utilities for isolated asynchronous execution in Crons, WebSockets, and SQS queue consumers
- **Authentication & Security**: AWS Cognito with automated tenant context extraction

---

### 🔄 Component Architecture & Execution Flow

```
[1. HTTP Req / Cron / SQS Batch] ➔ [2. Context Service (ALS + 60s Cache)] 
                                                   ⬇
[5. PostgreSQL Customer Schema] ⬅ [4. SET LOCAL search_path] ⬅ [3. Multi-Tenant Transaction Service]
```

1. **Interception & Tenant Resolution**: The HTTP interceptor or background utility extracts the tenant ID from JWT/events and queries the context service.
2. **In-Memory Cache & ALS**: The service checks if the company uses a private schema (with a 60s cache) and initializes the `AsyncLocalStorage` instance with context `{ companyId, schemaName }`.
3. **Tenant Transaction Execution**: The transactional service opens a transaction in TypeORM (`DataSource.transaction`).
4. **PostgreSQL `search_path` Configuration**: The service executes the session command on the database:
   ```sql
   SELECT set_config('search_path', 'customer_N,public', true);
   ```
5. **Isolated Query Execution**: All repository and EntityManager operations inside the transaction automatically resolve within the tenant schema, routing only global table queries back to `public`.

---

### 🔍 Technical Deep Dive

- **Canonical Table Classification**:
  - **Tenant-Scoped**: Domain operational tables (billing, card processing, financial management).
  - **Public-Only**: Global corporate tables (companies, users, bank and city catalogs).
- **Code Isolation Enforcement**: Mandatory scoped transaction pattern to prevent uncontextualized queries from falling back into `public`.
- **Cache Invalidation**: Expiration mechanism triggered upon corporate setting changes.

---

### 🔒 Security and Multi-tenancy
- Absolute database isolation: physical impossibility for one company to access another schema's data within the same transaction session.
- Middleware verification of Cognito JWT integrity and resolved schema prior to service execution.
