const videos = document.querySelectorAll("video");

function playVideos() {
  videos.forEach((video) => {
    // Some mobile browsers require the JavaScript properties to be set in
    // addition to the matching HTML attributes.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.play().catch(() => {
      // Playback will be attempted again after the first user interaction.
    });
  });
}

playVideos();

videos.forEach((video) => {
  video.addEventListener("canplay", playVideos, { once: true });
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    playVideos();
  }
});

["pointerdown", "touchstart"].forEach((eventName) => {
  document.addEventListener(eventName, playVideos, {
    once: true,
    passive: true,
  });
});
