> **Confidentiality Notice**: Enterprise project developed under non-disclosure agreement (NDA). Source code, internal endpoints, database table names, and commercial identifiers are kept strictly confidential and omitted.

---

### 📋 Project Overview
Integrated Artificial Intelligence solutions for enterprise-grade financial management:

1. **AI Financial Assistant (Interactive Chat)**: Real-time conversational chat that analyzes corporate financial health, calculates Income Statements (DRE), Cash Flow Statements (DFC), generates liquidity metrics, accumulated balance projections, and produces visual charts/artifacts on demand.
2. **Automatic Transaction Categorization Module (Background Worker / Cron & API)**: Asynchronous background processing engine for unclassified financial entries (Accounts Receivable, Accounts Payable, and Bank Statements), assigning appropriate financial categories via Large Language Models (LLM).

---

### 🛠️ Tech Stack

#### 🔧 Backend Worker & AI Engine
- **Core**: NestJS 11 + Express 5 + TypeScript 5
- **Artificial Intelligence / LLM Engine**: Anthropic Claude (Claude Haiku) with Function Calling support (active tools, action submissions, and diagnostics) via a decoupled agent service
- **Task Scheduling & Automation**: NestJS `@Schedule` running automated batch categorization routines
- **ORM & Database**: TypeORM 0.3 on PostgreSQL with schema-isolated **multi-tenant** architecture
- **Authentication & Security**: AWS Cognito, multi-tenant decorator controls, and strict per-company category validation

#### 🖥️ Frontend Management Portal
- **Core**: Next.js 14+ (App Router with Server & Client Components) + TypeScript 5
- **State Management**: Zustand for conversation history, loading states, and artifact rendering
- **UI & Interface**: Tailwind CSS with custom Chat components and Analytical Dashboards
- **HTTP Communication**: Decoupled HTTP client with authentication token support

---

### 🔄 End-to-End Pipeline (Sequence Architecture)

```
[1. Chat / Cron Trigger] ➔ [2. Multi-Tenant Backend Worker] ➔ [3. Anthropic Claude (LLM)]
                                                                         ⬇
[6. Dashboard & Chat UI] ⬅ [5. DB Validation & Audit] ⬅ [4. Tool Calls (Insights / Categorize)]
```

#### 💬 Pipeline 1: AI Financial Assistant (Chat)
1. **Greeting & Initial Diagnostic**: On assistant load, the backend computes cash flow diagnostics and triggers the LLM to return a welcome message alongside initial KPI dashboards and charts.
2. **Conversational Processing**: Upon receiving a user prompt, the agent service dispatches the prompt equipped with active insight query tools.
3. **Function Calling Tool Invocation**: The LLM requests financial views on demand (liquidity summary, Income Statement, Cash Flow, category distribution, and daily evolution).
4. **Narrated Response & Artifacts**: The backend processes data in the tenant database schema, feeds it back to the LLM, and delivers a narrated Markdown/HTML response accompanied by interactive visual artifacts.

#### 🏷️ Pipeline 2: Automatic Transaction Categorization via AI
1. **Entitlement Gate & Schedule**: Periodic jobs fetch companies with the feature enabled in their contract.
2. **Pending Record Ingestion**: For each company, the worker fetches batches of unclassified financial entries.
3. **LLM Classification**: The AI agent analyzes transaction description, amount, date, and company chart of accounts.
4. **Tool Call & Multi-Tenant Validation**: The agent triggers submission tools. The backend verifies that every suggested category strictly belongs to the tenant schema before updating records and writing audit logs.

---

### 🔍 Technical Deep Dive

- **Automated Financial Diagnostics**: Real-time calculation and consolidation of liquidity, projected balance, and financial indicators.
- **Categorization Job Auditing**: Audit logging for execution metrics (processed totals, accuracy rate, runtime, and retry counts).
- **Exception Handling**: Retry count limit mechanisms to prevent repeated API calls for unclassifiable records.

---

### 🔒 Security and Multi-tenancy
- Dynamic database schema isolation executed within the company's transaction context.
- Strict server-side validation ensuring that all AI-suggested category IDs belong exclusively to the authenticated tenant.
