const video = document.getElementById('scrollVideo');

// Use Intersection Observer to autoplay when visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  },
  {
    threshold: 0.5, // video must be at least 50% visible
  }
);

// Start observing the video
observer.observe(video);