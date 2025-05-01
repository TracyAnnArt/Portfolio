const videos = document.querySelectorAll('.clickable-video');

videos.forEach(video => {
  // Prevent autoplay on load
  video.pause();

  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});