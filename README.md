# Nexus School ERP (Full-Stack Mode)

This repository contains the architecture needed to run the Full-stack React + Next.js + MongoDB + REST API version of the Nexus School ERP system as requested.

## Tech Stack
- Frontend: Next.js + React.js
- Styling: Tailwind CSS v3
- Backend: Next.js API Routes (Serverless REST API)
- Database: MongoDB via `mongoose`
- Security: `jsonwebtoken` (JWT) and `bcryptjs`

## Setup Instructions

Because this relies heavily on server-side capabilities, you need an environment with **Node.js** installed previously (which is currently missing in this specific sandbox instance). Once downloaded locally onto your computer, follow these precise deployment steps:

### 1. Pre-requisites
- Ensure you have Node.js (v18+) installed.
- Ensure you have an active MongoDB instance (either installed locally or via MongoDB Atlas).

### 2. Install Packages
Navigate to the root directory `full-stack-erp/` and run:
\`\`\`bash
npm install
\`\`\`

### 3. Environment Variables
Create a file named `.env.local` inside the root folder, and add your configurations:
\`\`\`env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.abc.mongodb.net/nexusERP
JWT_SECRET=super_secret_key_123
\`\`\`

### 4. Code Structure Overview
- **`/app/page.js`** — React Component for the Login Dashboard (Uses modern Tailwind UI + Lucide-react icons).
- **`/app/api/auth/login/route.js`** — Node.js REST API handling JWT hashing.
- **`/lib/models/User.js`** — MongoDB Schema layouts.
- **`/lib/db.js`** — Ensures MongoDB doesn't cause memory leaks on backend requests.

### 5. Running Local Server
Spin up the standard Next.js local server:
\`\`\`bash
npm run dev
\`\`\`

Your full-stack application will now be running securely at `http://localhost:3000` with hot-module reloading enabled!
