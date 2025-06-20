Para configurar o _debugger_ agnóstico, siga os passos abaixo:

## 1. launch.json

No diretório `.vscode/`, crie (ou atualize) o arquivo `launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Attach to Node.js Debug port",
      "request": "attach",
      "port": 9229,
      "type": "node",
      "skipFiles": [
        "<node_internals>/**",
        "${workspaceFolder}/**/node_modules/**/*.js",
        "${workspaceFolder}/node_modules/**/*.js"
      ],
      "smartStep": true,
      "internalConsoleOptions": "openOnSessionStart",
      "restart": true
    }
  ]
}
```

## 2. tasks.json

Crie (ou atualize) o arquivo `tasks.json`:

```json
{
  "tasks": [
    {
      "label": "run-project-tests",
      "type": "shell",
      "command": "bash",
      "args": [
        "-c",
        "PROJECT_DIR=$(dirname ${file}); cd ${PROJECT_DIR}; npm run test:debug"
      ],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "presentation": {
        "reveal": "always",
        "panel": "shared"
      },
      "problemMatcher": []
    }
  ]
}
```

## 3. Inicialização do projeto e Jest

Na raiz do projeto:

```bash
npm init -y
npm set init.author.name "jeffverona"
npm set init.module true
npm set init.package.name "$(basename $(pwd))"
npm install --save-dev jest
```

Edite (ou crie) o arquivo de configuração do Jest (`jest.config.js` ou `jest.config.ts`):

```js
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  coverageProvider: "v8"
};

export default config;
```

## 4. Testes de exemplo

Crie a pasta `test/` na raiz e adicione o arquivo `template.test.ts`:

```ts
import { it, expect } from '@jest/globals';

function sum(a: number, b: number): number {
  return a + b;
}

it('should sum two numbers', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
```

## 5. Adicione os scripts ao package.json, nesse momento esses sao os unicos scripts que devem estar la

  "scripts": {
    "test": "NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand test/",
    "test:dev": "NODE_OPTIONS=--experimental-vm-modules npx jest --runInBand --watchAll test/",
    "test:debug": "node --experimental-vm-modules --inspect-brk node_modules/jest/bin/jest.js --runInBand --watchAll test/"
  },

## 6. Rode o npm i

## 7. adicione a node modules ao .gitignore

## 8. commite tudo que foi feito até aqui