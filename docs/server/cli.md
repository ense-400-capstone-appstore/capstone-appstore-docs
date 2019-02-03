---
id: cli
title: CLI Commands
---

This application provides several command-line interface commands that can be run by typing `php artisan` followed by the command name, e.g., `php artisan app:install`.

Every command has a `--help` or `-h` option that shows usage information similar to what is displayed on this page.

Commands also include several other flags such as `--quiet` that allow the command to run without outputting results back to the console. All of these flags are omitted in this document as they are part of Laravel itself.

## `app:install`

**Description:**

Install or update the application for
development or production.

**Usage:**

`app:install [options]`

**Options:**

-   `-c`, `--clean-install`
    -   Drops and rebuilds the database
-   `-p`, `--production`
    -   Also runs commands specific to production deployments

> **NOTE:** Using the `--clean-install` flag is _extremely dangerous_ because it deletes all application data. Only use it if you are planning to start from scratch.
