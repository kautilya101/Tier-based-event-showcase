
# 🎉 Tier-Based Event Showcase

A full-stack web app that displays tier-restricted events based on user subscription level. Built with **Next.js**, **Supabase**, **Clerk**, and **Tailwind CSS**.

---

## 🚀 Features

- 🔐 User authentication via **Clerk.dev**
- 📦 Subscription tiers: `Free`, `Silver`, `Gold`, `Platinum`
- 🎫 Events are locked/unlocked based on user tier
- 💾 Data stored and queried using **Supabase**
- 🎨 Fully responsive and modern UI built with **Tailwind CSS**

---

## 🧪 Test Credentials

Use the following test accounts to explore different access levels:

| Tier     | Email                          | Password     |
|----------|--------------------------------|--------------|
| Free     | bitor59761@nicext.com          | `#User#1234` |
| Silver   | xiyof25515@nicext.com          | `#User#1234` |
| Gold     | goxelen778@percyfx.com         | `#User#1234` |
| Platinum | paheme5952@percyfx.com         | `#User#1234` |

---

## ⚙️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Auth**: [Clerk.dev](https://clerk.dev/)
- **Database**: [Supabase](https://supabase.com/)
- **UI**: [Tailwind CSS](https://tailwindcss.com/)

---

## 🛠️ Local Development Setup

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/tier-event-showcase.git
cd tier-event-showcase
npm install
# or
yarn install
npm run dev
# or
yarn dev
```

## Project Strucutre
app/
  components/
  actions/
  utils/
  layout.tsx
  page.tsx
supabase/
  seed.sql
.env.local
README.md
