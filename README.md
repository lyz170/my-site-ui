# MySiteUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Building Steps

npm install -g @angular/cli

ng new my-site-ui

ng add ng-zorro-antd
? Enable icon dynamic loading [ Detail: https://ng.ant.design/components/icon/en ] No
? Set up custom theme file [ Detail: https://ng.ant.design/docs/customize-theme/en ] No
? Choose your locale code: en_US
? Choose template to create project: sidemenu

ng serve --open

## Environments

For local, use 'localhost', frontend is 4200, backend is 8080, Gitbhub login url is 'https://github.com/login/oauth/access_token', need to create a new non-security page to test - "C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp

For DEV, use '127.0.0.1', frontend is 4200, backend is 8080, Gitbhub login url is 'http://127.0.0.1:4300/login/oauth/access_token' (Nginx proxy).

For PROD, use '8.219.238.255', frontend is 443 (default https port), backend is 8080, Gitbhub login url is 'http://8.219.238.255:4300/login/oauth/access_token' (Nginx proxy).