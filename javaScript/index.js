import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const $video = document.querySelector("video");
const $bPlay = document.querySelector(".play-toggle");
const $bMute = document.querySelector(".mute-toggle");

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