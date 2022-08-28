<h1 align="center">Soba Up!</h1>

<div align="center">
  <img src="docs/images/soba-up.png" alt="Tech Interview Handbook" width="400" />
  <h2>Be safe on a night out</h2>
  <p>Drunk driving is one of the leading causes of traffic accidents in the world. Indonesia is no exception.</p>

</div>

## Introduction

Soba Up is an Application which analyses the level of alcohol/substance impairment through a series of games designed to test cognitive abilities to determine an individual's level of awareness.

## Running the project locally

<hr />

<a href="https://github.com/ricoardiya/soba-up/actions/workflows/web-ci.yaml"><img src="https://github.com/ricoardiya/soba-up/actions/workflows/web-ci.yml/badge.svg" alt="GitHub Actions status"></a>
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)

#### Before you start

```shell
yarn install
npx lerna bootstrap
```

#### :computer: Run web

Environment variables

```shell
export TWILIO_ACCOUNT_ID=<redacted>
export TWILIO_AUTH_TOKEN=<redacted>
export TWILIO_MESSAGE_SERVICE_ID=<redacted>
export DATABASE_URL="postgresql://sobaup:sobaup@localhost:5432/sobaup"
```

run database locally <br>
you need to install [docker](https://www.docker.com/)

```shell
docker-compose up
```

migrate db

```shell
prisma migrate dev
```

run locally

```shell
cd packages/web
yarn install
yarn dev
```

#### :iphone: Run mobile

```shell
cd packages/mobile
yarn install
yarn start
```

## Contributors

| Role       | Contributors                                                                                                                     |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Developers | [@ricoardiya](https://github.com/ricoardiya) [@elsatmr](https://github.com/elsatmr) [@kelvinc123](https://github.com/kelvinc123) |
| Designer   | [@sastr6647](https://github.com/sastr6647)                                                                                       |
