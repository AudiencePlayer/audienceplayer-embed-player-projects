import {EmbedPlayer, ChromecastControls} from 'audienceplayer-embed-player';

import "audienceplayer-embed-player/src/embed-player.css";
import "audienceplayer-embed-player/src/chromecast-controls.css";

(function () {
    const urlQueryString = window.location.search;
    const urlParams = new URLSearchParams(urlQueryString);

    const articleId = +urlParams.get('articleId');
    const projectId = +urlParams.get('projectId');
    const assetId = +urlParams.get('assetId');
    const apiBaseUrl = urlParams.get('apiBaseUrl');
    const token = urlParams.get('token');
    const posterImageUrl = urlParams.get('posterImageUrl');
    const autoplay = urlParams.get('autoplay');
    const chromecastReceiverAppId = urlParams.get('chromecastReceiverAppId');
    const continueFromPreviousPosition = urlParams.get('continueFromPreviousPosition');

    const tokenParameter = token ? {token} : {};
    const posterImageUrlParameter = posterImageUrl ? {posterImageUrl} : {};

    const player = new EmbedPlayer();

    document.getElementById('video-button-start').addEventListener('click', playVideo);
    document.getElementById('video-button-stop').addEventListener('click', stopCastVideo);
    player.setupChromecast('#cast-wrapper', chromecastReceiverAppId)
        .then(() => {
            const controls = new ChromecastControls(player.getCastPlayer(), player.getCastPlayerController());
            document.getElementById('cast-wrapper').style.display = 'unset';
        });

    function playVideo() {
        if (player.isConnected()) {
            player
                .castVideo({
                    apiBaseUrl,
                    articleId,
                    projectId,
                    assetId,
                    ...tokenParameter,
                    continueFromPreviousPosition: continueFromPreviousPosition ? continueFromPreviousPosition === 'true' : true
                })
                .catch((error) => console.error(error));
        } else {
            player
                .play({
                    selector: '.video-wrapper',
                    apiBaseUrl,
                    articleId,
                    projectId,
                    assetId,
                    ...tokenParameter,
                    ...posterImageUrlParameter,
                    autoplay: autoplay && autoplay === 'true',
                    continueFromPreviousPosition: continueFromPreviousPosition ? continueFromPreviousPosition === 'true' : true
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }

    function stopCastVideo() {
        player.stopCasting();
        player.destroy();
    }
})();
