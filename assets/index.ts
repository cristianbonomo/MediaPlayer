import MediaPlayer from '@cristianbonomo/mediaplayer/lib/MediaPlayer.js';
import AutoPlay from '@cristianbonomo/mediaplayer/lib/plugins/AutoPlay.js';
import AutoPause from '@cristianbonomo/mediaplayer/lib/plugins/AutoPause.js';
import AdsPlugin from '@cristianbonomo/mediaplayer/lib/plugins/Ads/index.js';
const video = document.querySelector('video');
const player = new MediaPlayer({ element: video, plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()] });
const playButton: HTMLElement = document.getElementById('playButton');
playButton.onclick = () => player.togglePlay();
const muteButton: HTMLElement = document.getElementById('muteButton');
muteButton.onclick = () => player.toggleMute();

//if para verificar si el navegador soporta ServiceWorkers
if('serviceWorker' in navigator) {
    //registramos el archivo del serviceWorker
    navigator.serviceWorker.register('../sw.js').catch(error => {console.log(error.message);});
}