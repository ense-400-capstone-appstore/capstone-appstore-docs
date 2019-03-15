---
id: welcome
title: Welcome
---

![Logo](/img/brand/128h/Logo_x128.png)

Welcome to the documentation for the Matryoshka project, a private appstore for
the Android operating system that aims to offer an open-source alternative to
currently available options.

This is an undegraduate Capstone project for the University of Regina in
Saskatchewan, Canada by [@shevtsod](https://github.com/shevtsod),
[@oscar666666](https://github.com/oscar666666), and [@Uyser](https://github.com/Uyser).

The entirety of the project's source code is publicly hosted on
[GitHub](https://github.com/matryoshkadoll/)!

# Repositories

This software follows a client-server architecture, and our GitHub source code
reflects this by having three distinct repositories for each component. Moreso,
our documentation on this site is split into two top-level sections covering
each of these components in detail.

## [matryoshka-app](https://github.com/matryoshkadoll/matryoshka-app)

The client application is a downloadable Android app written in Java. Users are
able to browse, download free apps, and purchase paid apps through this app.

For all of our documentation on the app, see [App/Getting Started](app/getting_started.md)

## [matryoshka-server](https://github.com/matryoshkadoll/matryoshka-server)

Our server hosting the database, admin panel, and a REST API for clients to interact with. The server is written in PHP using the [Laravel framework](https://laravel.com/).

For all of our documentation on the server, see [Server/Getting Started](server/getting_started.md)

## [matryoshka-docs](https://github.com/matryoshkadoll/matryoshka-docs)

This site!

The documentation for this project is written using Facebook's
[Docusaurus](https://docusaurus.io/en/) to be completely decoupled from the rest
of the source code.
