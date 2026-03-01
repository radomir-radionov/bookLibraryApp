# Book Library App — Project Documentation

A full-stack **book library** application for browsing books by category, booking, viewing profile and history, and real-time chat. The app uses a React (TypeScript) client and a Koa/Node.js server with PostgreSQL and Redis.

---

## Overview

- **Client**: Single-page app (React 18, TypeScript, Vite). Redux Toolkit + Redux Saga for state and side effects. Styled Components for styling.
- **Server**: Koa.js REST API with JWT auth, session (Redis), Sequelize (PostgreSQL), and Socket.IO for chat.
- **Infrastructure**: Run Postgres and Redis locally; server and client run via Node/Yarn.

---

## Tech Stack

| Layer      | Technologies |
|-----------|--------------|
| Frontend  | React 18, TypeScript, Vite, React Router 6, Redux Toolkit, Redux Saga, Styled Components, Axios, Socket.IO client, React Hook Form, Yup |
| Backend   | Koa 2, koa-router, koa-session (Redis), koa-passport, JWT, Sequelize, PostgreSQL, Socket.IO, Nodemailer, bcrypt |

---

## Features

- **Auth**: Registration (multi-step), login, logout, JWT access/refresh, session.
- **Password recovery**: Forgot password flow (email → code → new password) via SMTP.
- **Books**: List by category, search, book detail (description, rating, comments).
- **Booking**: Book a book, calendar for available days.
- **Profile**: User data, handed books, history.
- **Chat**: Real-time messaging via Socket.IO.
- **Static content**: Terms and Contract pages.
- **UI**: Modals, toasts, loaders, responsive layout.

---

## Project Structure

```
bookLibraryApp/
├── client/                 # React SPA
│   ├── src/
│   │   ├── components/     # Reusable UI (Button, Input, SearchBar, etc.)
│   │   ├── constants/      # Routes, API endpoints, regex, etc.
│   │   ├── helpers/        # Book/comment helpers
│   │   ├── hooks/          # useOutsideClick, etc.
│   │   ├── http/           # Axios instance, interceptors (JWT refresh)
│   │   ├── modules/        # Feature modules (Book, Calendar, Modals, Navigation, Profile, Slider)
│   │   ├── redux/          # Slices + sagas (auth, book, books, booking, categories, user, etc.)
│   │   ├── routes/         # AppRouter, protected/auth routes
│   │   ├── screens/        # Page-level components (Home, Book, Profile, Chat, Auth, Registration, etc.)
│   │   ├── styles/         # Global styles, colors, typography
│   │   ├── types/          # TS types (auth, user, modal, etc.)
│   │   ├── utils/          # Validations, calendar utils
│   │   ├── App.tsx
│   │   └── index.tsx
│   └── package.json
├── server/
│   ├── src/
│   │   ├── api/            # auth, book, booking, category, delivery, history, user, chat
│   │   ├── config/         # koaSession
│   │   ├── constants/      # modelNames, foreignKeys, responseText, jwtData
│   │   ├── database/       # Sequelize models, migrations, seeds
│   │   ├── middlewares/    # errorHandler
│   │   ├── mock/            # Mock data (optional)
│   │   ├── index.js        # Koa app, HTTP server, Socket.IO
│   │   └── routes.js       # Aggregated API routes
│   ├── .env.example
│   └── package.json
├── run-app.sh              # Install deps, copy .env, migrate, seed
└── desc.md                 # Sequelize CLI notes
```

---

## Getting Started

### Prerequisites

- Node.js (v18+), Yarn
- Local PostgreSQL and Redis (or use your preferred setup)

### Quick run (recommended)

From the project root:

```bash
./run-app.sh
```

This will:

1. Install client and server dependencies
2. Copy `server/.env.example` to `server/.env`
3. Run DB migrations: `yarn run db:migrate` (in server)
4. Run seeds: `yarn run db:seed:up`

Then start the server (`cd server && yarn start`) and client (`cd client && yarn start`) in separate terminals.

### Manual setup

1. **Server**

   ```bash
   cd server
   cp .env.example .env
   # Edit .env (DB, JWT, SMTP, ports)
   yarn install
   yarn run db:migrate
   yarn run db:seed:up
   yarn start
   ```

2. **Client**

   ```bash
   cd client
   yarn install
   yarn start
   ```

2. **Client**

- **Client**: 3000 (Vite)
- **Server (API)**: 8080
- **WebSocket (chat)**: 4000
- **PostgreSQL**: use `DB_HOST` and `HOST_DB_PORT` in `server/.env` for your local Postgres

---

## Environment Variables (server)

Defined in `server/.env` (see `server/.env.example`):

| Variable            | Description |
|---------------------|-------------|
| `POSTGRES_*`        | DB name, user, password |
| `HOST_DB_PORT`      | Host port for Postgres (e.g. 5555) |
| `DB_HOST`           | DB hostname (e.g. `localhost` for local Postgres) |
| `JWT_ACCESS_SECRET` | Secret for access tokens |
| `JWT_REFRESH_SECRET`| Secret for refresh tokens |
| `SESSION_KEY`       | Koa session signing key |
| `APP_PORT`          | API server port (default 8080) |
| `WEBSOCKET_PORT`    | Socket.IO port (default 4000) |
| `CLIENT_PORT`       | Client port for CORS (default 3000) |
| `SMTP_*`            | SMTP settings for forgot-password emails |
| `CLIENT_URL`        | Frontend base URL (e.g. http://localhost:3000/) |

---

## Scripts

### Client (`client/package.json`)

- `yarn start` — Vite dev server (host 0.0.0.0)
- `yarn build` — Production build
- `yarn serve` — Preview production build

### Server (`server/package.json`)

- `yarn start` — Run with nodemon
- `yarn db:migrate` — Run Sequelize migrations
- `yarn db:undo` — Undo last migration
- `yarn db:undo:all` — Undo all migrations
- `yarn db:seed:up` — Run all seeds
- `yarn db:seed:down` — Undo seeds

---

## API Overview

Base URL: `http://localhost:8080/` (see `client/src/constants/apiEndpoints.ts`).

| Area      | Purpose |
|-----------|---------|
| `api/auth`| Registration, login, logout, refresh, forgot-password, reset-password |
| `api/book`| Books CRUD, comments |
| `api/bookings` | Bookings |
| `api/category` | Categories |
| `api/users`    | User profile, update |
| Delivery / History | Handled via server routes (see `server/src/routes.js`) |
| Chat      | Socket.IO on `WEBSOCKET_PORT` (4000) |

The client uses an Axios instance with credentials, Bearer token from `localStorage`, and a response interceptor that refreshes the JWT on 401 and retries the request or logs out.

---

## Database

- **ORM**: Sequelize (PostgreSQL).
- **Models**: User, Book (with comments, booking), Category, Delivery, History, etc. (see `server/src/database/postgres/models/`).
- **Migrations**: Sequelize CLI; run after changing migrations:
  ```bash
  cd server && yarn run db:migrate
  ```
- **Seeds**: Example data for development; run with `yarn run db:seed:up`.
- **CLI** (from `desc.md`):
  - Create model: `npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string`
  - Create seed: `npx sequelize-cli seed:generate --name example-booking`

---

## Client Routes

| Route           | Description |
|----------------|-------------|
| `/`            | Home (redirects to `/books/all`) |
| `/books/all`   | All books |
| `/books/:category` | Books by category |
| `/books/:category/:bookId` | Book detail |
| `/profile`     | User profile |
| `/chat`        | Chat |
| `/terms`       | Terms |
| `/contract`    | Contract |
| `/auth`        | Login |
| `/registration`| Registration |
| `/forgot-pass` | Forgot password |

Protected routes (auth required) are wrapped in `Protected`; auth routes redirect to home when the user is already logged in.

---

## Redux State (client)

- **auth** — Login, logout, tokens
- **registration** — Registration flow
- **forgotPwd** — Forgot/reset password
- **user** — Current user data
- **books** — Books list (by category)
- **book** — Single book (detail, comments)
- **categories** — Categories list
- **booking** — Booking flow
- **displayingContent** — UI display state
- **modal** — Modal visibility/type
- **toast** — Toast notifications

Sagas handle API calls and side effects for auth, user, books, book, categories, booking, registration, and forgotPwd.

---

## Testing

- **Unit**: Jest + React Testing Library (see `client/package.json` devDependencies).

---

## Conventions (from project rules)

- TypeScript-first; avoid `any`.
- Function components only; small, focused components.
- Business logic in hooks or services, not in JSX.
- Redux Saga for async flows; Redux Toolkit for slices.
- Explicit loading, empty, and error states.
- Follow existing project structure and naming.

---

## Related Files

- **desc.md** — Sequelize CLI usage notes.
- **server/.env.example** — Template for server environment variables.
