import React from "react";

function Scoreboard(props) {
  return (
    <div className="Scoreboard">
      <div className="teamStats">
        <h3>HOME</h3>
        <h3>{props.homeTeamStats.score}</h3>
      </div>
      <h3>SCOREBAORD</h3>
      <div className="teamStats">
        <h3>VISITORS</h3>
        <h3>{props.visitingTeamStats.score}</h3>
      </div>
    </div>
  );
}
export default Scoreboard;
