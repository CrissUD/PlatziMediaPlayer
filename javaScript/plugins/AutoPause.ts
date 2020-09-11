import MediaPlayer from "../MediaPlayer";

class AutoPause {

  private threshold: number;
  private player: MediaPlayer;

  constructor() {
    this.threshold = 0.20;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold
    });
  
    observer.observe(player.media);
  
    document.addEventListener("visibilitychange", this.handleVisibilityChange)
  }
  
  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    if(entry.isIntersecting)
      this.player.play();
      else
      this.player.pause();
  }
  
  private handleVisibilityChange() {
    (document.visibilityState === "visible")
      ? this.player.play()
      : this.player.pause()
  }
}

export default AutoPause;