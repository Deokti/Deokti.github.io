const timestamp = () => {
  let timeIndex = 0;
  const shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];

  const now = new Date();
  let shift = shifts[timeIndex++] || 0;
  let date = new Date(now - shift * 1000);

  return date.getTime() / 1000;
}

const stories = new Zuck('stories', {
  skin: 'topgallery',
  avatars: false,
  list: false,
  openEffect: true,
  cubeEffect: true,
  autoFullScreen: true,
  backButton: true,
  backNative: false,
  previousTap: true,
  localStorage: true,
  language: {
    unmute: 'Нажмите, чтобы включить',
  },
  stories: [
    Zuck.buildTimelineItem(
      "stories-video-1", // id
      "./img/video/video-photo-1.jpg", // image
      "Инженер проекта",
      "",
      timestamp(),
      [
        ["dismantling", "video", 0, "./video/1.mp4", "./img/video/video-photo-1.jpg", '', true, true, timestamp()],
      ]
    ),
    Zuck.buildTimelineItem(
      "stories-video-2",
      "./img/video/video-photo-2.jpg", // image
      "Парк техники",
      "",
      timestamp(),
      [
        ["dismantling", "video", 0, "./video/2.mp4", "./img/video/video-photo-2.jpg", '', true, true, timestamp()],
      ]
    ),
  ]
});