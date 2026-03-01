# DBeaver & PostgreSQL — Book Library App

**Test/local development only.** Use the credentials below for local setup and DBeaver; do not use in production.

## Connection (DBeaver and server)

| Field     | Value              |
|----------|--------------------|
| Host     | `127.0.0.1`        |
| Port     | `5432`             |
| Database | `postgres`         |
| Username | `test_user`        |
| Password | `test_password`    |

---

## Create user `test_user` (if “password authentication failed”)

```bash
cd /tmp
sudo -u postgres psql -d postgres
```

(Enter Mac password for sudo; if it asks “Password for user postgres”, try Enter.)

In `psql`:

```sql
CREATE USER test_user WITH PASSWORD 'test_password';
ALTER USER test_user WITH CREATEDB;
GRANT ALL PRIVILEGES ON DATABASE postgres TO test_user;
GRANT USAGE ON SCHEMA public TO test_user;
GRANT CREATE ON SCHEMA public TO test_user;
\q
```

(If you use user **rad** instead, replace `test_user` with `rad` in the commands above and in the “Grant schema permissions” section below.)

---

## Grant schema permissions (if “permission denied for schema public”)

PostgreSQL 15+ requires explicit rights on the `public` schema. As superuser (`cd /tmp && sudo -u postgres psql -d postgres`), run (replace `rad` with `test_user` if that’s your user):

```sql
GRANT USAGE ON SCHEMA public TO rad;
GRANT CREATE ON SCHEMA public TO rad;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO rad;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO rad;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO rad;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO rad;
\q
```

---

## Server `.env`

```bash
cd server && cp .env.example .env
```

Set: `POSTGRES_USER=test_user`, `POSTGRES_PASSWORD=test_password`, `HOST_MACHINE_DB_HOST=127.0.0.1`, `HOST_DB_PORT=5432`, `DB_HOST=127.0.0.1`.

---

## DBeaver

**Database** → **New Database Connection** → **PostgreSQL**. Enter the table above → **Test Connection** → **Finish**.

---

## Tables and data

```bash
cd server && yarn db:migrate && yarn db:seed:up
```

---

## Troubleshooting

- **Connection refused** — Use port **5432** (not 5555). Check: `pg_isready -h 127.0.0.1 -p 5432`
- **Password failed for test_user** — Create user (see “Create user test_user” above).
- **“could not identify current directory”** — Run `cd /tmp` before `sudo -u postgres psql`.
- **No tables in DBeaver** — Run migrations and seeds (see above), then refresh in DBeaver.
- **permission denied for schema public** — Grant schema permissions (see “Grant schema permissions” above).
