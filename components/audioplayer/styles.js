import styled from "styled-components";

export const AudioPlayerContainer = styled.div`
  height: auto;
  width: 250px;
  position: absolute;
  z-index: 9;
  top: 20%;
  right: 20%;
  background-color: #2196f3;
  text-align: center;
  border: 1px solid #2196f3;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Goto = styled.div`
  height: 2px;
  width: 100%;
  background: orange;
  position: relative;
`;

export const PointerGoto = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  position: absolute;
  background: pink;
  top: 50%;
  left: 2%;
  transform: translate(-50%, -50%);
`;

export const PlayerHeader = styled.div`
  cursor: move;
  z-index: 10;
  color: #fff;
  background: #eee;
  font-size: 10px;
  color: #424242;
`;

export const PlayerBody = styled.div`
  display: flex;
`;
export const PlayerTile = styled.div`
  width: 50px;
  height: auto;
  background: red;
`;

export const PlayerControls = styled.div`
  display: flex;
  background: #fff;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  align-items: center;
`;

export const TrackDetails = styled.div`
  font-size: 10px;
  font-weight: 200;
  background: #fff;
  color: #424242;
`;

export const Icon = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const Duration = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 8px;
  background: #fff;
  padding: 0 4px;
`;

export const Prev = styled.div`
  height: 25px;
  width: 25px;
`;

export const PlayPause = styled.div`
  height: 45px;
  width: 45px;
  background: #eee;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Next = styled.div`
  height: 25px;
  width: 25px;
`;
