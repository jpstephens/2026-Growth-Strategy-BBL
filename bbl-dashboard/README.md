# BBL Dashboard

Real-time sales, operations, and business health dashboard for BlackBridge Logistics.

## Features

- **Sales Activity Tracking** - Dials, conversations, qualified prospects, new customers
- **Pipeline Visualization** - 8-stage funnel with deal counts and values
- **Email Campaign Metrics** - Instantly.ai integration for reply rates
- **Operations Metrics** - On-time pickup/delivery, margins, direct carrier %
- **Business Health** - Gross margin progress, customer concentration, churn

## Data Sources

| Source | Data |
|--------|------|
| HubSpot | Calls, deals, pipeline stages |
| Instantly.ai | Email campaigns, open/reply rates |
| Alvys | Loads, margins, customers |

## Setup

### 1. Install Dependencies

```bash
cd bbl-dashboard
npm install
```

### 2. Configure Environment Variables

Copy the example env file and fill in your API credentials:

```bash
cp .env.local.example .env.local
```

Required variables:

```
HUBSPOT_ACCESS_TOKEN=pat-xxx
INSTANTLY_API_KEY=xxx
ALVYS_CLIENT_ID=xxx
ALVYS_CLIENT_SECRET=xxx
ALVYS_COMPANY_CODE=xxx
```

### 3. Get API Credentials

#### HubSpot
1. Go to HubSpot Settings → Integrations → Private Apps
2. Create a new Private App
3. Add scopes:
   - `crm.objects.contacts.read`
   - `crm.objects.deals.read`
   - `crm.objects.calls.read`
   - `crm.schemas.deals.read`
4. Copy the access token

#### Instantly.ai
1. Go to Instantly Settings → Integrations → API
2. Copy your API key

#### Alvys
1. Go to Admin → API Access in Alvys portal
2. Create a new application
3. Copy Client ID, Client Secret
4. Note your Company Code

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Set environment variables in Vercel dashboard.

## API Routes

| Route | Description |
|-------|-------------|
| `/api/hubspot/calls` | Call metrics (dials, conversations) |
| `/api/hubspot/deals` | Deal/pipeline metrics |
| `/api/instantly/campaigns` | Email campaign metrics |
| `/api/alvys/loads` | Load metrics (on-time %) |
| `/api/alvys/margins` | Margin metrics |
| `/api/alvys/customers` | Customer concentration |
| `/api/dashboard` | Combined dashboard data |

## Refresh Strategy

| Data | Refresh |
|------|---------|
| HubSpot Calls | 60 seconds |
| HubSpot Deals | 60 seconds |
| Instantly | 60 seconds |
| Alvys | 60 seconds |

## Targets (from 2026 Plan)

| Metric | Target |
|--------|--------|
| Dials/Week | 200 |
| Conversations/Week | 35-40 |
| Qualified/Week | 8-10 |
| New Customers/Month | 4-5 |
| Email Reply Rate | >3% |
| On-Time Pickup | >95% |
| On-Time Delivery | >95% |
| Avg Margin/Load | >$200 |
| Monthly Gross Margin | $100K |
| Max Customer Concentration | <12% |
| Annual Churn Rate | <15% |
| Direct Carrier % (Q2) | >35% |
| Direct Carrier % (Q4) | >50% |

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- React Query (TanStack Query)
- Recharts (if needed for charts)

## Project Structure

```
bbl-dashboard/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main dashboard
│   │   ├── layout.tsx
│   │   ├── providers.tsx         # React Query provider
│   │   ├── globals.css
│   │   └── api/
│   │       ├── hubspot/
│   │       │   ├── calls/route.ts
│   │       │   └── deals/route.ts
│   │       ├── instantly/
│   │       │   └── campaigns/route.ts
│   │       ├── alvys/
│   │       │   ├── loads/route.ts
│   │       │   ├── margins/route.ts
│   │       │   └── customers/route.ts
│   │       └── dashboard/
│   │           └── route.ts
│   ├── components/
│   │   ├── SalesSection.tsx
│   │   ├── OpsSection.tsx
│   │   ├── BusinessSection.tsx
│   │   ├── MetricCard.tsx
│   │   ├── ProgressRing.tsx
│   │   └── PipelineFunnel.tsx
│   ├── lib/
│   │   ├── hubspot.ts
│   │   ├── instantly.ts
│   │   └── alvys.ts
│   └── types/
│       └── metrics.ts
├── .env.local.example
├── package.json
└── README.md
```
# Trigger deploy
