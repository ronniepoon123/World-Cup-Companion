function BracketChampion({ champion }) {
  if (!champion) {
    return (
      <div className="bracket-champion">

        <div className="champion-trophy">
          🏆
        </div>

        <h2>FIFA World Cup</h2>

        <h3>Champion</h3>

        <p>To Be Decided</p>

      </div>
    );
  }

  return (
    <div className="bracket-champion">

      <div className="champion-trophy">
        🏆
      </div>

      <h2>FIFA World Cup</h2>

      <h3>Champion</h3>

      <img
        src={champion.crest}
        alt={champion.name}
        className="champion-crest"
      />

      <p className="champion-name">
        {champion.name}
      </p>

    </div>
  );
}

export default BracketChampion;