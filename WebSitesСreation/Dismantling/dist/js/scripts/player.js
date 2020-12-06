(function() {
  const videoPlayer = document.getElementById('video-player');
  const play = document.getElementById('video-controll');
  
  const stateController = (data) => {
    if (data) {
      play.classList.add('company__video-none');
      return false;
    }

    play.classList.remove('company__video-none');
  }

  const videoPlay = () => {
    videoPlayer.play();
    play.dataset.videoPlay = 'true';
    stateController(play.dataset.videoPlay);
  };

  const videoPause = () => {
    videoPlayer.pause();
    play.dataset.videoPlay = 'false';
    stateController();
  };

  play.addEventListener('click', videoPlay);
  videoPlayer.addEventListener('click', videoPause);
}());