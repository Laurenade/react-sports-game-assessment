import React from "react";
import "./App.css";
import Game from "./components/game/Game";
import Team from "./components/team/Team";
import Scoreboard from "./components/scoreboard/Scoreboard";
import thing1Img from "./assets/images/thing1.jpg";
import thing2Img from "./assets/images/thing2.jpg";
import loraxImg from "./assets/images/lorax.jpg";
import foxSocksImg from "./assets/images/foxinsocks.jpg";

function App(props) {
  const thing1 = {
    name: "Thing 1",
    logoSrc: thing1Img,
  };
  const thing2 = {
    name: "Thing 2",
    logoSrc: thing2Img,
  };
  const lorax = {
    name: "Lorax",
    logoSrc: loraxImg,
  };
  const foxInSocks = {
    name: "Fox In Socks",
    logoSrc: foxSocksImg,
  };
  return (
    <div className="App">
      Sports Game
      <Game venue="the Suess Dome!" homeTeam={thing1} visitingTeam={thing2} />
      <Game
        venue="the DR DOOM ROOM!"
        homeTeam={lorax}
        visitingTeam={foxInSocks}
      />
      <Team />
      <Scoreboard />
    </div>
  );
}

export default App;
