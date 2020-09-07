function AutoPause () {
  this.threshold = 0.20;
  this.handleIntersection = this.handleIntersection.bind(this);
  this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
}

AutoPause.prototype.run = function (player) {
  AutoPause.prototype.player = player;
  const observer = new IntersectionObserver(this.handleIntersection, {
    threshold: this.threshold
  });

  observer.observe(player.media);

  document.addEventListener("visibilitychange", this.handleVisibilityChange)
}

AutoPause.prototype.handleIntersection = function(entries) {
  const entry = entries[0];
  if(entry.isIntersecting)
    this.player.play();
    else
    this.player.pause();
}

AutoPause.prototype.handleVisibilityChange = function() {
  (document.visibilityState === "visible")
    ? this.player.play()
    : this.player.pause()
}


export default AutoPause;