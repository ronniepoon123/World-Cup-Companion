import BracketColumn from "./BracketColumn";
import BracketChampion from "./BracketChampion";

import "./Bracket.css";

function Bracket({ matches }) {

  const round16 = matches.filter(
    match => match.stage === "LAST_16"
  );

  const quarterFinals = matches.filter(
    match => match.stage === "QUARTER_FINALS"
  );

  const semiFinals = matches.filter(
    match => match.stage === "SEMI_FINALS"
  );

  const final = matches.filter(
    match => match.stage === "FINAL"
  );

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

<BracketColumn
title="Final"
matches={final}
className="final-round"
/>

      <BracketChampion />

    </div>

  );

}

export default Bracket;