# 🔒 Automated Billing & Notification System (NDA)

> **Confidentiality Notice**: Enterprise project developed for high-scale automation. Source code and commercial product names are omitted due to non-disclosure agreements (NDA).

---

### 📋 Project Overview
A **full-stack multi-tenant platform** built from scratch to automate billing schedules and client notifications. The system allows users to configure custom billing rules with modular invoice layouts, visual assets (logos/signatures), and notification rules. On scheduled times, the engine scans eligible billing records and automatically dispatches notifications via **Email** and **WhatsApp**.

---

### 🛠️ Tech Stack

#### 🔧 Backend (Worker / API Engine)
- **Core**: NestJS 11 + TypeScript 5.7 + Express 5
- **Database**: PostgreSQL with TypeORM (schema-isolated **multi-tenant** architecture `customer_<id>`)
- **Cache & Locking**: Redis (ioredis 5 + cache-manager 6) for idempotency enforcement and distributed lock control on scheduled tasks
- **Cloud & Cloud-Native (AWS SDK v3)**:
  - **SQS FIFO**: Strictly ordered queues with per-tenant deduplication (`messageGroupId`)
  - **S3**: Asset resolution (branch logos and signatures)
  - **Cognito & Secrets Manager**: Identity management, secrets, and CloudWatch monitoring
- **PDF & Auth**: DANFE generation (NF-e 4.00), ephemeral JWT tokens for public payment links
- **Integrations**: Multi-channel integration via Serverless Email (AWS SES) and an automated WhatsApp bot (`whatsapp-web.js`)
- **ERP Integration**: Legacy ERP connector (Oracle) for automated ingestion of invoices, bills, and customer records

#### 🖥️ Frontend (Management Portal & Public View)
- **Core**: Next.js 16 (App Router, Turbopack, Server Actions) + React 19 + TypeScript 5
- **UI & UX**: MUI Material 7, MUI X DataGrid Premium (advanced logs and forecasting tables), Recharts (analytic dashboards), and Framer Motion
- **State & Data Management**: TanStack React Query 5, Zustand 5 (drawer and modal stores), Zod / React Hook Form
- **Public View**: Optimized dynamic route `/cobranca/[token]` for end-client access to invoices, PIX QR Codes, and DANFE downloads without requiring login

---

### 🔄 Execution & Dispatch Pipeline

```
[1. CRON + Redis Lock] ➔ [2. AWS SQS FIFO Queue] ➔ [3. Multi-Tenant Worker] 
                                                               ⬇
[6. Dashboard Logs] ⬅ [5. Email (SES) & WhatsApp Bot] ⬅ [4. S3 Assets + JWT]
                                                               ⬇
                                            [7. Real-Time Tracking]
```

1. **Schedule Trigger (CRON & Distributed Lock)**
   The scheduler (`NestJS @Schedule`) runs periodically. A distributed lock via Redis ensures single execution across instances. The engine queries PostgreSQL for eligible billing titles.

2. **Secure Queuing (AWS SQS FIFO)**
   Each tenant generates a message in the SQS FIFO queue (`messageGroupId=company-{id}`), preserving strict chronological order and preventing duplicate dispatches.

3. **Multi-Tenant Processing**
   The consumer processes messages by dynamically switching to the tenant's specific database schema and recording queued dispatch entries.

4. **Dispatch Assembly & Tokenization**
   The service resolves S3 assets (branch logo), compiles HTML/text templates, generates secure JWT tokens, and builds the unique public payment link.

5. **Multi-Channel Dispatch (Email & WhatsApp)**
   - **Email**: Dispatched asynchronously via HTTP to a serverless email service (AWS SES).
   - **WhatsApp**: Triggered via a dedicated bot supporting dynamic image attachments and signatures.

6. **Persistence & Auditing**
   Results are logged in PostgreSQL with updated statuses (`SENT` or `FAILED` with error codes for auditability).

7. **End-Client Tracking & Interaction**
   When the client accesses the public link, the portal records real-time tracking metrics (viewing, PIX code copy, DANFE/Invoice download), feeding live analytics back into the dashboard.
