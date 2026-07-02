# FinSight - Personal Finance Manager

A full-stack personal finance application built with a Turborepo monorepo, featuring an Express REST API, a Next.js 14 frontend, and shared Zod schemas for end-to-end type safety. 

## Live Demo
- Frontend: https://finsight2026.vercel.app/
- API Documentation: https://finsight-api.onrender.com/api/docs

## Features
- Comprehensive Tracking: Manage checking, savings, credit cards, and investments.
- Rich Analytics: Interactive charts for spending trends, cash flow, and net worth.
- Smart Budgeting: Set category-based budgets with intelligent monitoring.
- Financial Goals: Visualize progress toward saving targets.
- Type-Safe: Shared Zod schemas ensure consistent data contracts between client and server.

## Getting Started

1. Clone and install:
git clone https://github.com/pratikk70/FinSight-Finance-Tracker
cd FinSight-Finance-Tracker
npm install

2. Configure environment:
Create .env files based on the .env.example templates.

3. Start development:
npm run dev

## Tech Stack
- Monorepo: Turborepo, npm workspaces
- Frontend: Next.js 14, React 18, Tailwind CSS
- Backend: Express 4, TypeScript
- Database: MongoDB 7, Mongoose 8
- Validation: Zod (Shared)
- Auth: NextAuth.js (Client) / JWT (Server)

## Folder Structure
finsight

├── apps

|  ├── api

|  |  ├── package.json

|  |  ├── README.md

|  |  ├── src

|  |  ├── tsconfig.json

|  |  └── vitest.config.ts

|  └── web

|     ├── next-env.d.ts

|     ├── next.config.js

|     ├── package.json

|     ├── postcss.config.js

|     ├── public

|     ├── README.md

|     ├── src

|     ├── tailwind.config.ts

|     ├── tsconfig.json

|     ├── tsconfig.tsbuildinfo

|     └── vitest.config.ts

├── images

|  ├── accounts.png

|  ├── ai.png

|  ├── analytics.png

|  ├── budgets.png

|  ├── categories.png

|  ├── dashboard.png

|  ├── github-actions.png

|  ├── goals.png

|  ├── landing.png

|  ├── recurring.png

|  ├── settings.png

|  ├── swagger.png

|  └── transactions.png

├── package-lock.json

├── package.json

├── packages

|  └── shared-types

|     ├── package.json

|     ├── README.md

|     ├── src

|     ├── tsconfig.json

|     └── vitest.config.ts

├── README.md

├── scripts

|  ├── generate-secrets.sh

|  └── health-check.sh

├── test-transactions.csv

├── tsconfig.json

└── turbo.json

## Creator
FinSight was refined and deployed by Pratik Tanaji Parkale. 
GitHub: https://github.com/pratikk70
