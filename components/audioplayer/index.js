import { useState, useEffect } from "react";
import {
  AudioPlayerContainer,
  PlayerHeader,
  PlayerBody,
  PlayerTile,
  PlayerControls,
  Prev,
  PlayPause,
  Next,
  Goto,
  PointerGoto,
  TrackDetails,
  Duration,
  Icon,
} from "./styles";
import prev from "../../static/previous.png";
import playIcon from "../../static/play.png";
import next from "../../static/next.png";
import pauseIcon from "../../static/pause.png";
import aud1 from "../../static/nanamele.mp3";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);

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

  useEffect(() => {
    //Make the DIV element draggagle:
    dragElement(document.getElementById("player"));

    function dragElement(elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      if (document.getElementById(elmnt.id + "_header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(
          elmnt.id + "_header"
        ).onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }

      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }

    let player = new Player();
    player.init();
  });

  

  return (
    <AudioPlayerContainer id="player">
      <PlayerHeader>Audio Player</PlayerHeader>
      <TrackDetails>Anna Bond | Yenendhu...</TrackDetails>
      <Duration>
        <div>00 : 00</div>
        <div>04 : 30</div>
      </Duration>
      <Goto>
        <PointerGoto />
      </Goto>
      <PlayerBody>
        {/* <PlayerTile /> */}
        <PlayerControls>
          <Prev>
            <Icon src={prev} alt="Previous" />
          </Prev>
          {/* onClick={isPlaying ? pause : play} */}
          <PlayPause>
            <Icon
              src={isPlaying ? pauseIcon : playIcon}
              style={{ height: "25px", width: "25px" }}
              alt={isPlaying ? "Pause" : "Play"}
            />
          </PlayPause>
          <Next>
            <Icon src={next} alt="Next" />
          </Next>
        </PlayerControls>
      </PlayerBody>
    </AudioPlayerContainer>
  );
};

export default AudioPlayer;
