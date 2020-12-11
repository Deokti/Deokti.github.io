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
      // id - нужен обязательно
      "stories-video-1",
      // при открытии видео в левом стороне есть картинка - это за неё и отвечает
      "./img/video/video-photo-1.png", //  
      // Название под картинков 
      "Инженер проекта",
      "",
      timestamp(),
      [
        // dismantling1 - это id, 
        // 'video' - какой тип показывать, видео или картинка
        // "./video/1.mp4" путь к видео которое будет показываться
        // "./img/video/video-photo-1.png" - влияет только в некоторых случаях, но лучше пусь будет
        // true, true - разницы между true и false не заметил
        // timestamp() - время 
        ["dismantling1", "video", 0, "./video/1.mp4", "./img/video/video-photo-1.png", '', true, true, timestamp()],
      ]
    ),
    Zuck.buildTimelineItem(
      "stories-video-2",
      "./img/video/video-photo-2.png", // image
      "Парк техники",
      "",
      timestamp(),
      [
        ["dismantling2", "video", 0, "./video/2.mp4", "./img/video/video-photo-2.png", '', true, true, timestamp()],
      ]
    ),
  ]
});