# :doughnut: webpack-starter-basic

A simple webpack starter kit. Babel, TypeScript, ESLint, PostCSS, Jest, Environment variables, Git hooks, etc.

Like the following directory structure, you can have multiple HTML pages (`/index.html` and `/doughnut/index.html`).

```
src/
├── assets
│   ├── scripts
│   │   └── index.ts
│   └── styles
│       └── index.css
├── doughnut
│   ├── index.css
│   ├── index.html
│   └── index.ts
├── index.html
└── static
    ├── favicon.ico
    └── images
```

If you want no SPA, no SSR, and a simple site, I hope this starter might be one of several choices for you.

## Getting Started

### Prerequisites

- Node.js
  - I recommend using [nodenv](https://github.com/nodenv/nodenv)

### Installing

```sh
$ npm ci
```

## Running the development server

```sh
$ npm run dev
```

## Running the tests

```sh
$ npm run test
```

## Building

Development build:

```sh
$ npm run build
```

Production build:

```sh
$ npm run build:prod
```

As you can see in the `package.json`, the only difference is the value of `APP_ENV`.

## Pushing Commits

Your commit messages must meet the conventional commit format. For more detail, check [`commitlint`](https://github.com/conventional-changelog/commitlint)

## Static

If you want to copy assets, you can use the `src/static` directory. For more detail, [`src/static/README.md`](src/static/README.md).

## VS Code

If you are using VS Code, try to enable `.vscode/settings.json`.

```sh
cp .vscode/settings.json.example .vscode/settings.json
```

## License

This project is an MIT-licensed open source project. See [LICENSE](./LICENSE) for more information.

## Acknowledgments

- [`favicon.ico`](https://favicon.io/emoji-favicons/doughnut/)
