# hosted-embed-player

This is an example/demo project for the AudiencePlayer embed-player https://github.com/AudiencePlayer/audienceplayer-embed-player

## default building with webpack

First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

This will create a default implementation and a chromecast demo in the `dist` folder.


## project structure

`src/main` contains the default player implementation, using URL querystring params for all variable initialization

`src/demo` contains an implementation that also has a chromecast button.


## usage of the Azure media player in your project

As you will notice, the azure media player is not included as an entry in the webpack config, but it is copied.
The reason is that the minified version does not lend itself be minified (again).

So you have to treat the library as static assets. To prevent any caching issues, the version is appended to the folder and you can still use older versions in the future.


