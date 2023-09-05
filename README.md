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

The following params will be available for you when you use the embed-player
`apiBaseUrl`: the base url of the API

`projectId`: your project id

Choose an article and accompanying asset and use their id'for the params:
`articleId`, `assetId`


## Usage of video.js in your project

As you may notice, video.js and style.css are not included as an entry in the webpack config, but it are copied.
They should be treated as a separate static assets.
