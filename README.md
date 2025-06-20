# prompt-driven-development

This repository provides a scaffold for prompt-driven development (PDD), enabling you to define tasks as prompts, configure agents to execute them, and track progress in a structured way.

## Overview

Prompt-driven development (PDD) is a workflow where each development task is defined by a prompt, and an AI-driven agent or local tool executes the task based on that prompt. This repo helps you organize those prompts (tasks) and agent definitions.

## Features

-+- **Task definitions** in Markdown under `tasks/`
-+- **Agent configuration** in `AGENTS.md`
-+- **Front-end scaffold** under `frontend/` for building a UI/UX (optional)

## Getting Started

### Prerequisites

-+- Git
-+- Python 3.x (or your preferred runtime)

### Installation

```bash
git clone <repo-url>
cd prompt-driven-development
# Install dependencies if any (e.g. pip install -r requirements.txt)
```

### Usage

1. Define your agents in `AGENTS.md`.
2. Create or update task prompts under `tasks/`.
3. Run your PDD workflow (scripts or tools to be added).

## Directory Structure

```
.
/services
└── auth/
    ├── login/
    │   ├── handler.ts          # API route ou controller
    │   ├── login.ts            # Regra de negócio (não precisa chamar de use-case)
    │   ├── validator.ts        # Validação (zod, yup, schema)
    │   └── dto.ts              # Tipagem de entrada e saída
    │
    ├── register/
    │   ├── handler.ts
    │   ├── register.ts
    │   ├── validator.ts
    │   └── dto.ts
    │
    ├── refresh-token/
    │   ├── handler.ts
    │   ├── refresh-token.ts
    │   ├── validator.ts
    │   └── dto.ts
    │
    └── shared/
        ├── auth-provider.ts    # JWT, Clerk, etc.
        ├── user-repository.ts  # Prisma, DB, etc.
        └── constants.ts
```