[![](https://repository-images.githubusercontent.com/306680259/8d077b80-19cd-11eb-8625-f2b1a474d4a9)](https://github.com/escemi-tech/ts-dev-tools)

[![npm](https://img.shields.io/npm/v/@ts-dev-tools/core)](https://www.npmjs.com/search?q=%40ts-dev-tools) [![Continuous integration](https://github.com/escemi-tech/ts-dev-tools/workflows/Continuous%20Integration/badge.svg)](https://github.com/escemi-tech/ts-dev-tools/actions?query=workflow%3A%22Continuous+Integration%22) [![Known Vulnerabilities](https://snyk.io/test/github/escemi-tech/ts-dev-tools/badge.svg)](https://snyk.io/test/github/escemi-tech/ts-dev-tools) [![](https://codecov.io/gh/escemi-tech/ts-dev-tools/branch/main/graph/badge.svg?token=mVB3P7BFzR)](https://codecov.io/gh/escemi-tech/ts-dev-tools) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING) [![Sponsor](https://img.shields.io/badge/%E2%9D%A4-Sponsor-ff69b4)](https://github.com/sponsors/neilime) [![GitHub stars](https://img.shields.io/github/stars/escemi-tech/ts-dev-tools?logo=github)](https://github.com/escemi-tech/ts-dev-tools)

---

<br><br>

# Welcome to ts-dev-tools 🛠️

## Opinionated package to configure proper tools to develop a Typescript project

<br><br>

## 🏠 [Homepage](https://escemi-tech.github.io/ts-dev-tools/)

<br>

---

<br><br>

## Why **ts-dev-tools** ?

<br>

### _1_. Aims to provide a first-class developper experience

<br>

Install **ts-dev-tools** and your project is dev ready, no more installation or setup, it just works

<br>

### _2_. A fine tuned collection of tools and configuration ready for a realworld project

<br>

Within the dozen of existing packages, **ts-dev-tools** uses a short list of consistent libraries and theit recommanded configuration.
**ts-dev-tools** is used by various real world projects to be run in production, so its toolset is effective and meet industry standards.

<br>

### _3_. Stable and secure

<br>

For every changes and dependency update, **ts-dev-tools** is:

- [Unit & E2E tested](https://github.com/escemi-tech/ts-dev-tools/actions?query=workflow%3A%22Continuous+Integration%22): [coverage report](https://codecov.io/gh/escemi-tech/ts-dev-tools)
- Audited for known vulnerabilities with [snyk](https://snyk.io/)

<br>

### _3_. One package to rule them all, one dependency to keep up to date

<br>

Dependencies are updated all weeks in order to keep dev tools up to date agains security issues and to give access to the latest available feature.

Using **ts-dev-tools** you should just have to update it and you'll have all the dev dependencies used by **ts-dev-tools**, up to date !

<br>

## Usage

<br>

### _1_. Choose the plugin that fits with you need

| Name                                                                                        | Description                                                                        |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [@ts-dev-tools/core](https://github.com/escemi-tech/ts-dev-tools/tree/main/packages/core)   | Common Typescript tools (Eslint and prettier, Husky, lint-staged and pretty-quick) |
| [@ts-dev-tools/react](https://github.com/escemi-tech/ts-dev-tools/tree/main/packages/react) | Dev tools for a for [ReactJS](https://reactjs.org/) project                        |

<br>

### _2_. Install

_Example with plugin `@ts-dev-tools/core`, replace `@ts-dev-tools/core` by the plugin you want to use_

```sh
npm install --dev @ts-dev-tools/core
```

Or

```sh
yarn add --dev @ts-dev-tools/core
```

### _3_. Enable ts-dev-tools

```sh
npx ts-dev-tools install
```

Or

```sh
yarn ts-dev-tools install
```

⚠️ If your package is not private and you're publishing it on a registry like npmjs.com, you need to disable postinstall script using [pinst](https://github.com/typicode/pinst). Otherwise, postinstall will run when someone installs your package and result in an error.

---

<br>

## Author

<br>

👤 **Escemi <contact@escemi.com>**

- Website: https://www.escemi.com
- LinkedIn: [@https:\/\/www.linkedin.com\/company\/escemi](https://linkedin.com/in/https://www.linkedin.com/company/escemi)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/escemi-tech/ts-dev-tools/issues). You can also take a look at the [contributing guide](CONTRIBUTING).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

This project is [MIT](LICENSE) licensed.
