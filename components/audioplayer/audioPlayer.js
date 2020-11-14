function Player() {
    this.audios = undefined;
    this.selectedAudio = undefined;

    this.play = function () {
      setIsPlaying(!isPlaying);
      this.selectedAudio.play();
    };

    this.pause = function () {
      setIsPlaying(!isPlaying);
      this.selectedAudio.pause();
    };

    this.setSelectedAudio = function (audio) {
      this.selectedAudio = audio;
    };

    this.init = function () {
      this.audios = [];
      this.audios.push(new Audio("../../static/nanamele.mp3"));
      this.setSelectedAudio(this.audios[0]);
    };
  }

  export default Player;