# 📺 YouTube Clone

A powerful and user-friendly YouTube clone built with the latest web technologies! 🚀🎥 This project lets you upload, stream, and manage videos effortlessly while providing AI-powered tools, an engaging community, and a seamless viewing experience. 🌟

---

## 🛠️ Tech Stack

Here are the technologies that power this YouTube clone:

- **Backend:**

  - ⚡ [tRPC](https://trpc.io/) - Type-safe APIs for seamless communication.
  - 📦 [Drizzle ORM](https://orm.drizzle.team/) - Modern ORM for PostgreSQL.
  - ⚡ [Upstash Redis](https://upstash.com/) - Serverless Redis for caching and real-time data.

- **Frontend:**

  - ⚡ [Next.js 15](https://nextjs.org/) - The React framework for production.
  - 🎨 [Shadcn UI](https://ui.shadcn.dev/) - Accessible and reusable components.
  - 📏 [TailwindCSS](https://tailwindcss.com/) - Utility-first styling.

- **Authentication:**

  - 🔐 Secure authentication system.

- **Video Processing & AI Features:**

  - 🎬 [Mux](https://www.mux.com/) - Real-time video processing & streaming.
  - 📝 AI-powered automatic video transcription.
  - 🖼️ Smart thumbnail generation.
  - 🤖 AI-generated video titles & descriptions.

- **Database & Caching:**

  - 🗄️ [PostgreSQL](https://www.postgresql.org/) - Reliable relational database.
  - ⚡ [Upstash Redis](https://upstash.com/) - High-performance caching and background jobs.

- **Content & User Features:**
  - 📊 Creator Studio with analytics & insights.
  - 🗂️ Custom playlist management.
  - 🔄 Multiple content feeds.
  - 📱 Fully responsive design.
  - 💬 Interactive comment system.
  - 👍 Like & subscription system.
  - 🎯 Watch history tracking.

---

## 🌟 Features

- 🎥 Advanced video player with quality controls.
- 🎬 Real-time video processing & adaptive streaming.
- 📝 Automatic video transcription powered by AI.
- 🖼️ AI-driven thumbnail generation.
- 🤖 Smart title & description generator.
- 📊 Creator Studio with detailed video metrics.
- 🗂️ Personalized playlists & video organization.
- 🔄 Dynamic content feeds for trending & recommended videos.
- 💬 Interactive comments & engagement tools.
- 👍 Like & subscription system to follow favorite creators.
- 🎯 Watch history tracking for seamless viewing experience.
- 🔐 Secure authentication with session management.
- 📦 Modular and scalable codebase.
- 🚀 Optimized for speed & scalability with Next.js 15 & React 19.
- ⚡ Fast caching and real-time data handling with Upstash Redis.

---

## 🛡️ Prerequisites

Before you get started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher) 🟢
- [Bun](https://bun.sh/) ⚡ (for ultra-fast runtime & package management)
- [Clerk](https://clerk.dev/) (for authentication) 🔐
- A Mux account for video streaming 🎥
- A PostgreSQL database 🗄️
- An Upstash Redis instance for caching & real-time processing ⚡

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
$ git clone https://github.com/BernieTv/YouTube-Clone.git
$ cd YouTube-Clone
```

### 2️⃣ Install Dependencies

```bash
bun install
```

### 3️⃣ Set Up Environment Variables

Create a .env file in the root folder and add the following:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
CLERK_SIGNING_SECRET=

DATABASE_URL=

UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
MUX_WEBHOOK_SECRET=

UPLOADTHING_TOKEN=

QSTASH_TOKEN=
UPSTASH_WORKFLOW_URL=
QSTASH_CURRENT_SIGNING_KEY=
QSTASH_NEXT_SIGNING_KEY=

OPENAI_API_KEY=

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4️⃣ Run the Development Server

```bash
bun run start
```

---

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Mux Documentation](https://docs.mux.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Upstash Redis Documentation](https://upstash.com/docs)

---

## 📄 License

This project is licensed under the MIT License. 📝

---

## ✨ Demo

Check out the live demo here: [YouTube Clone Demo](https://youtube-clone.vercel.app) 🎥
