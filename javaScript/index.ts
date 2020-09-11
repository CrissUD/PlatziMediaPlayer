import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const $video = document.querySelector("video");
const $bPlay: HTMLHtmlElement = document.querySelector(".play-toggle");
const $bMute: HTMLHtmlElement = document.querySelector(".mute-toggle");

const player = new MediaPlayer({ 
  video: $video, 
  plugins: [new AutoPlay(), new AutoPause()] 
});

$bPlay.onclick = () => player.togglePlay();
$bMute.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .catch(error => console.log(error.message));
}