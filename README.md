# audienceplayer-embed-player-projects

This is an example/demo project for the AudiencePlayer embed-player https://github.com/AudiencePlayer/audienceplayer-embed-player

## Build this project

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


## Project structure

`src/main` contains the default player implementation, using URL querystring params for all variable initialization

`src/demo` contains an implementation that also has a chromecast button.

## Run the demo from a (local) webserver

Copy the `dist` folder to a webserver.
Visit the webserver using a browser and supply the following query params:

The default player:

https://yourhost/?apiBaseUrl=[apiBaseUrl]&projectId=[projectId]&articleId=[articleId]&assetId=[assetId]

The chomecast demo:
 
https://yourhost/demo/?apiBaseUrl=[apiBaseUrl]&projectId=[projectId]&articleId=[articleId]&assetId=[assetId]&chromecastReceiverAppId=[chromecastReceiverAppId]

The following params will be available for you when you use the embed-player
`apiBaseUrl`: the base url of the API

`projectId`: your project id

`chromecastReceiverAppId`: the chromecast receiver app id (when applicable)

Choose an article and accompanying asset and use their id'for the params:
`articleId`, `assetId`


## Usage of the Azure media player in your project

As you will notice, the azure media player is not included as an entry in the webpack config, but it is copied.
The reason is that the minified version does not lend itself be minified again.

So you have to treat the library as static assets. To prevent any caching issues, the version is appended to the folder and you can still use older versions in the future.
