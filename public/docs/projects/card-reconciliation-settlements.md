> **Confidentiality Notice**: Enterprise project developed under non-disclosure agreement (NDA). Source code, internal endpoints, database table names, and commercial operational logic are kept strictly confidential and omitted.

---

### 📋 Project Overview
High-performance platform for credit/debit card financial reconciliation, acquirer settlement matching, and ERP invoice clearing:

1. **Multi-Acquirer Automated Matching**: Bulk reading and pairing between settlements imported from acquirers and card sales installments recorded in the company's ERP.
2. **Real-Time Reconciliation Status Matrix**: Instant status classification for every record:
   - `CONCILIATED`: Exact financial value match between acquirer settlement and ERP invoice.
   - `TOLERATED`: Financial difference within the percentage tolerance threshold configured for the branch.
   - `DIVERGENT`: Financial difference exceeding the tolerance margin.
   - `NOT_FOUND_IN_API`: Sales invoice registered in ERP with no matching acquirer settlement.
   - `NOT_FOUND_IN_ERP`: Settlement received from acquirer with no corresponding sales invoice in ERP.
3. **Clearing Execution & ERP Integration**: Execution of manual or batch reconciliation orders with asynchronous dispatch of messages to clear invoices in the ERP.

---

### 🛠️ Tech Stack

#### 🔧 Backend Worker & SQL Pipeline
- **Core**: NestJS 11 + Express 5 + TypeScript 5
- **ORM & Database**: TypeORM 0.3 on PostgreSQL optimized with materialized CTEs (Common Table Expressions) for high-volume execution in milliseconds
- **Multi-tenant Isolation**: Dynamic tenant context via AsyncLocalStorage and transaction services with schema-isolated database boundaries
- **Messaging & Queuing**: AWS SQS (FIFO) for asynchronous dispatch of invoice clearing commands to ERP
- **Cache & Idempotency**: Redis with idempotency controls for single-execution enforcement on concurrent reconciliations
- **Authentication & Security**: AWS Cognito and strict tenant-based authorization

#### 🖥️ Frontend Management Portal
- **Core**: Next.js 14+ (App Router with Server & Client Components) + TypeScript 5
- **Server State & Cache Management**: TanStack React Query v5 with SSR hydration (`HydrationBoundary` and `dehydrate`)
- **UI & Interface**: Vanilla CSS + Tailwind CSS with shared data grid components and summary cards
- **HTTP Communication**: Decoupled HTTP client with cookie and tenant authorization token support

---

### 🔄 End-to-End Pipeline (Sequence Architecture)

```
[1. Frontend SSR Hydration] ➔ [2. PostgreSQL CTE Pipeline] ➔ [3. Match Matrix (Status CASE)]
                                                                          ⬇
[6. SQS Queue ERP Clearing] ⬅ [5. Save Reconciliation Records] ⬅ [4. Manual / Auto Reconciliation]
```

1. **Initial Load & SSR Hydration**: The Server Component prefetches key data (e.g., bank domiciles) and dehydrates cache via React Query (`dehydrate`), delivering fast responsive static HTML.
2. **Query & CTE Pipeline**: The backend executes a PostgreSQL query structured with chained CTEs:
   - Deduplicates ERP invoices by transaction composite keys.
   - Unifies and indexes lookup keys (NSU Host, NSU TEF, and transaction GUIDs).
   - Performs a hashable *equi-join* between acquirer settlements and ERP invoices.
3. **Business Rule Classification**: Evaluates conditional logic comparing net amounts against the branch's tolerance percentage setting.
4. **Reconciliation Execution**: The user selects items and triggers a reconciliation order. The backend verifies tenant ownership, checks duplicates, records matches in database tables, and dispatches messages to the SQS FIFO queue for ERP invoice clearing.

---

### 🔍 Technical Deep Dive

- **Services & Endpoints**:
  - Query installments and reconciliation status with dynamic date, acquirer, and status filters.
  - Manual reconciliation execution and ERP clearing request.
  - Bank domicile listing and parameterization.

---

### 🔒 Security and Multi-tenancy
- JWT token validation with secure tenant context extraction.
- Dynamic database isolation ensuring queries and transactions operate exclusively within the authenticated company's schema.
