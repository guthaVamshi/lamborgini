// script.js


function playaudio(){
    const audio = document.getElementById("audio");
    const playPauseButton = document.getElementById("play-pause");
  
    playPauseButton.addEventListener("click", function() {
      if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
      }
    });
}