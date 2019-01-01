---
id: linux-ubuntu-18-04
title: Linux - Ubuntu 18.04
---

## Installing PHP and Composer

Install PHP via `apt`.

```shell
sudo apt-get update
sudo apt-get install -y php7.2 php-mbstring php-gd php-xml php-zip

# For development, you will also need the SQLite 3 database adapter
sudo apt-get install -y php-sqlite3
```

Install the PHP dependency manager Composer via the [official documentation](https://getcomposer.org/).

```shell
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '93b54496392c062774670ac18b134c3b3a95e5a5e5c8f1a9f115f203b75bf9a129d5daa8ba6a13e2cc8a1da0806388a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/local/bin/composer
```

## Installing Node.js

To install Node.js, see the [official Node.js documentation](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions-enterprise-linux-fedora-and-snap-packages) and the [NodeSource repository](https://github.com/nodesource/distributions/blob/master/README.md).

This software is developed against Node.js 11.x, and as such it is the recommended version. Older versions may work as well, but these are untested.

```shell
curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Install the application

First install both composer and Node.js dependencies used by this application.

```shell
composer install
npm install
```

Then copy either `.env.production` or `.env.development` to a new file `.env` and edit this file to set up your environment variables as you wish.

```shell
# For production
cp .env.production .env

# For development
cp .env.development .env
```

Finally run the application's install script to finish up the installation.

```shell
# For production
php artisan app:install

# For development
php artisan app:build
```

Check if there were any errors. If there were none, then congratulations, the application is installed!

You should now be able to start a local server using `php artisan serve` or deploy with a webserver such as Apache 2 (with `libapache2-mod-php7.2`) or NGINX.
