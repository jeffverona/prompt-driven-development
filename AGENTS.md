# 🏗️ Agent Architecture & Guidelines

> **IMPORTANT:** Always load and review this file (`AGENTS.md`) to configure agent behavior and overall architecture before processing any tasks.

This document defines the core agents, their roles, and the architectural principles that guide the prompt-driven development workflow.

## Core Agents

### 1. Task Runner Agent
- **Name:** `task-runner`
- **Role:**
  Scans the `tasks/` directory for new or updated task definitions and initiates their execution.
- **Responsibilities:**
  1. Load and parse `tasks/*.md` files in filename order (e.g., `001_...`, `002_...`).
  2. For each task prompt, invoke the AI Assistant Agent to fulfill the instructions.
  3. Report progress and results (e.g., write outputs, update logs).

### 2. AI Assistant Agent
- **Name:** `ai-assistant`
- **Role:**
  Interfaces with the language model (e.g., OpenAI GPT) to generate code, documentation, or other artifacts based on task prompts.
- **Responsibilities:**
  1. Read the task prompt provided by the Task Runner Agent.
  2. Consult the `tutorial/` folder for step-by-step implementation guidance.
  3. Produce code or documentation snippets that satisfy the prompt.
  4. Validate and lint generated output according to project conventions.

## Architectural Principles

- **Sequential Task Execution:**
  Tasks should run in order, based on their numeric prefixes.
- **Tutorial-Driven Implementation:**
  For detailed instructions and “baby steps,” always refer to files in the `tutorial/` directory at the project root.
- **Self-Documentation:**
  This `AGENTS.md` file is the single source of truth for agent configuration and guidelines. Agents must reload this file before processing tasks to pick up any updates.

## Extending with Custom Agents

To define additional agents, append entries in this format:

```markdown
- **Name:** `<agent-name>`
- **Role:** `<brief description>`
- **Responsibilities:**
  1. ...
  2. ...
```
