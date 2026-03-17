# Personal Language Coach

A personalized language learning platform centered around translation-based practice.
Users attempt to translate sentences, receive structured AI-generated feedback, and are guided toward exercises that target their recurring weaknesses.

---

## Stack

| Layer    | Technology          |
|----------|---------------------|
| Frontend | Angular 18          |
| Backend  | NestJS + TypeScript |
| Database | PostgreSQL 16       |
| ORM      | Prisma              |
| APIs     | DeepL, Anthropic    |

---

## Getting Started

### Prerequisites

- Node.js 20+
- Docker + Docker Compose
- A DeepL API key
- An Anthropic API key

### 1. Clone and install

```bash
git clone <repo-url>
cd personal-language-coach

# Install backend dependencies
cd backend && npm install && cd ..

# Install frontend dependencies
cd frontend && npm install && cd ..
```

### 2. Configure environment

```bash
cp .env.example backend/.env
# Fill in your API keys in backend/.env
```

### 3. Start the database

```bash
docker-compose up -d
```

### 4. Run database migrations

```bash
cd backend
npx prisma migrate dev
npx prisma db seed
```

### 5. Start the backend

```bash
cd backend
npm run start:dev
# API available at http://localhost:3000/api
```

### 6. Start the frontend

```bash
cd frontend
ng serve
# App available at http://localhost:4200
```

---

## Project Structure

```
personal-language-coach/
├── backend/                  # NestJS API
│   ├── src/
│   │   ├── auth/             # JWT auth
│   │   ├── users/            # User profile
│   │   ├── exercises/        # Exercise library
│   │   ├── attempts/         # Attempt submission
│   │   ├── evaluation/       # Core evaluation pipeline
│   │   ├── deepl/            # DeepL API adapter
│   │   ├── feedback/         # Structured feedback
│   │   ├── error-tags/       # Error taxonomy
│   │   ├── weakness/         # Weakness profile tracking
│   │   ├── recommendation/   # Personalized recommendations
│   │   └── common/           # Guards, decorators, pipes
│   └── prisma/               # Schema and seed data
├── frontend/                 # Angular app
│   └── src/app/
│       ├── core/             # Auth, interceptors, guards
│       ├── features/         # Feature routes (exercises, feedback, etc.)
│       └── shared/           # Reusable components
├── docker-compose.yml        # Local PostgreSQL
└── .env.example              # Environment variable reference
```

---

## Architecture Notes

- All business logic lives in the NestJS backend. The Angular frontend renders state and captures input only.
- The evaluation pipeline (`EvaluationModule`) orchestrates: DeepL reference translation → Claude feedback generation → error tagging → weakness profile update.
- Recommendations are driven by the user's `UserWeaknessScore` records — no ML, just a targeted database query.

---

## Implementation Phases

| Phase | Focus |
|-------|-------|
| 1 | Auth, user profile |
| 2 | Exercise library + seeding |
| 3 | Attempt submission + DeepL integration |
| 4 | Feedback generation + error tagging |
| 5 | Weakness profile tracking |
| 6 | Personalized recommendations |
| 7 | Polish, error handling, responsive UI |
