# React Starter

[![Dependabot badge](https://flat.badgen.net/dependabot/wbkd/react-starter?icon=dependabot)](https://dependabot.com/)

A minimal starting point for interactive applications that we build at [webkid](https://webkid.io). The boilerplate already includes some basic components as well as hooks and utils that we are often using in our projects.

The starterkit is based on these libraries:

- [react](https://facebook.github.io/react/)
- [easy-peasy](https://easy-peasy.now.sh/)
- [emotion](https://emotion.sh/docs/styled)
- [rebass](https://rebassjs.org/)

## Getting started

**[Create a new Github repository with the template](https://github.com/wbkd/react-starter/generate)** or clone the repo:

```sh
git clone git@github.com:wbkd/react-starter.git && cd react-starter
```

then install the dependencies via [npm](https://npmjs.org):

```sh
npm install
```

you are now ready to develop your app.

## Development

Builds the application and starts a webserver with hot loading.
Runs on [localhost:8080](http://localhost:8080/)

```sh
npm run start
```

## Build

Builds a minified version of the application in the build folder.

```sh
npm run build
```

Additionally, a zipped version of the bundle is added as `build.zip`. We often use this for our clients to upload the application to their own servers.
