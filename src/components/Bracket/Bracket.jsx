import BracketColumn from "./BracketColumn";
import BracketChampion from "./BracketChampion";

import "./Bracket.css";

function Bracket({ matches }) {

  const round16 = matches.filter(
    (match) => match.stage === "LAST_16"
  );

  const quarterFinals = matches.filter(
    (match) => match.stage === "QUARTER_FINALS"
  );

  const semiFinals = matches.filter(
    (match) => match.stage === "SEMI_FINALS"
  );

  const thirdPlace = matches.filter(
    (match) => match.stage === "THIRD_PLACE"
  );

  const final = matches.filter(
    (match) => match.stage === "FINAL"
  );

  const finalMatch = final[0];

  let champion = null;

  if (
    finalMatch &&
    finalMatch.status === "FINISHED"
  ) {
    champion =
      finalMatch.score.fullTime.home >
      finalMatch.score.fullTime.away
        ? finalMatch.homeTeam
        : finalMatch.awayTeam;
  }

  return (
    <div className="bracket-container">

      <BracketColumn
        title="Round of 16"
        matches={round16}
        className="round-16"
      />

      <BracketColumn
        title="Quarter-finals"
        matches={quarterFinals}
        className="quarter-finals"
      />

      <BracketColumn
        title="Semi-finals"
        matches={semiFinals}
        className="semi-finals"
      />

      <div className="final-section">

        <BracketColumn
          title="Final"
          matches={final}
          className="final-round"
        />

        <BracketColumn
          title="3rd Place Play-off"
          matches={thirdPlace}
          className="third-place"
        />

      </div>

      <BracketChampion champion={champion} />

    </div>
  );
}

export default Bracket;