# TypeScript NodeJS Template🚀
![image](https://github.com/user-attachments/assets/a3cb30d8-5193-461c-abc1-d7757d23dd9e)
This is a sample project demonstrating how to build a Node.js application using TypeScript. It includes configuration files and sample code to help you get started quickly.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).
- npm (Node Package Manager) installed. It comes bundled with Node.js.

## Installation

To install the dependencies, run the following command:

## Step 1: Initialize your project

```bash
    mkdir node-ts-app
    cd node-ts-app
    npm init -y
```

## Step 2: Install dependencies

```bash
    npm install express
```

## Required for development

```bash
    npm install -D typescript ts-node nodemon @types/node @types/express
```

## Step 3: Create tsconfig.json. Run this

```bash
    npx tsc --init
```

### Then update tsconfig.json to this

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

## Step 4: Create folder and server file

```bash
    mkdir src
    touch src/server.ts
```

### Create nodemon.json config

This makes your dev workflow smoother. Save this as nodemon.json at the root of your project.

```json
{
  "watch": ["src"],
  "ext": "ts",
  "ignore": ["dist"],
  "exec": "ts-node src/server.ts"
}
```

## Step 6: Update package.json scripts

```json
"scripts": {
  "dev": "nodemon",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

## Step 7: Run your app in dev mode

```bash
    npm run dev
```

## Step 8: Build for production (if needed)

```bash
    npm run build
    npm start
```

## Folder Structure

The project structure is organized as follows:

```bash

├── src/ # Source files
│ ├── controllers/ # Express controllers
│ ├── models/ # Data models
│ ├── routes/ # Express routes
│ └── server.ts # Entry point
├── test/ # Test files
│ └── example.test.ts # Example test file
├── .gitignore # Git ignore file
├── package.json # npm package configuration
├── tsconfig.json # TypeScript configuration
└── README.md # This README file
```

## License

This project is licensed under the [MIT License](LICENSE).
