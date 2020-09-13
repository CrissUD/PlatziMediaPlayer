import MediaPlayer from '@crissud/mediaplayer';
import AutoPlay from '@crissud/mediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@crissud/mediaplayer/lib/plugins/AutoPause';
import AdsPlugin from '@crissud/mediaplayer/lib/plugins/ads/AdsPlugin';

const $video = document.querySelector("video");
const $bPlay: HTMLHtmlElement = document.querySelector(".play-toggle");
const $bMute: HTMLHtmlElement = document.querySelector(".mute-toggle");

const player = new MediaPlayer({ 
  video: $video, 
  plugins: [new AutoPlay(), new AutoPause(), new AdsPlugin()] 
});

$bPlay.onclick = () => player.togglePlay();
$bMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .catch(error => console.log(error.message));
}