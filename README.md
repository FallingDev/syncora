
# Syncora - Static Frontend (React + Vite + Tailwind)

This repository contains a complete static frontend for **Syncora** — a Discord-like platform with **Core Light** and **Core** donation/subscription tiers.

## What you get
- React app (Vite) with pages: Home, Features, Pricing, Donate, Developers, Login, Register, Dashboard.
- Tailwind CSS setup.
- PayPal donate links wired to `https://paypal.me/sxr11` for Core Light and Core.
- Transaction submission form that posts to `/payments/submit` (backend integration required).
- README with instructions for backend wiring and additional features to implement.

## Quick start (frontend)
1. Install dependencies:
```bash
npm install
```
2. Start dev server:
```bash
npm run dev
```
3. Visit `http://localhost:5173`

## What you still need to add (backend & infra)
- **Auth endpoints**: `/auth/register`, `/auth/login` (return JWT + user).
- **Payment endpoints**: `/payments/submit` (store txn & planId), `/payments/verify` (mark completed & create UserSubscription).
- **Subscription / plans**: seed `SubscriptionPlan` (Core Light id=1, Core id=2).
- **Database**: Prisma schema & migrations (Postgres recommended).
- **PayPal Webhooks/IPN**: to automate verification. For now, transaction ID manual submission is used.
- **Real-time**: Socket.IO server for chat and presence.
- **File uploads**: S3 / CDN for attachments; enforce upload limits per plan.
- **Badge management**: endpoints for creating badges and assigning to users.
- **Server/Guild**: endpoints for creating/joining guilds and channels.
- **Security**: rate limiting, input validation, HTTPS, CORS config.

## Suggested dev flow
1. Implement backend with Node/Express + Prisma using the server skeleton provided earlier.
2. Seed the subscription plans and badge images.
3. Hook PayPal webhook to `/payments/webhook` to verify payments automatically and create `UserSubscription` records.
4. Implement Socket.IO for messaging and real-time updates.

## File structure
See `/src` for pages and components. `src/utils/api.js` is configured to point to a backend at `window.__SYNCORA_API_BASE__` or `http://localhost:5000` by default.

## License
MIT
