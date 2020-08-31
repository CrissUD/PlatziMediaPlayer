import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const $video = document.querySelector("video");
const $bPlay = document.querySelector(".play-toggle");
const $bMute = document.querySelector(".mute-toggle");

const player = new MediaPlayer({ 
  video: $video, 
  plugins: [new AutoPlay()] 
});

$bPlay.onclick = () => player.togglePlay();
$bMute.onclick = () => player.toggleMute();