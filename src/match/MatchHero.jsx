function MatchHero({ match }) {
  const homeScore = match.score?.fullTime?.home ?? "-";
  const awayScore = match.score?.fullTime?.away ?? "-";

  const statusMap = {
    FINISHED: "FULL TIME",
    TIMED: "SCHEDULED",
    SCHEDULED: "SCHEDULED",
    IN_PLAY: "LIVE",
    PAUSED: "HALF TIME",
  };

  const status =
    statusMap[match.status] ||
    match.status.replaceAll("_", " ");

  const kickoff = new Date(match.utcDate);

  const date = kickoff.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const time = kickoff.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="match-hero">

      <div className="competition-pill">
        🏆 {match.competition.name}
      </div>

      <div className="match-status-row">
        <span
          className={`match-status ${
            match.status === "IN_PLAY"
              ? "live"
              : match.status === "FINISHED"
              ? "finished"
              : "scheduled"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="hero-content">

        <div className="hero-team">

          <img
            src={match.homeTeam.crest}
            alt={match.homeTeam.name}
            className="hero-crest"
          />

          <h2>{match.homeTeam.name}</h2>

        </div>

        <div className="hero-centre">

          <div className="hero-score">
            <span>{homeScore}</span>

            <span className="score-divider">-</span>

            <span>{awayScore}</span>
          </div>

          <div className="hero-meta">
            {match.stage.replaceAll("_", " ")}
            {" • "}
            Matchday {match.matchday}
          </div>

          <div className="hero-date">
            {date}
            {" • "}
            {time}
          </div>

        </div>

        <div className="hero-team">

          <img
            src={match.awayTeam.crest}
            alt={match.awayTeam.name}
            className="hero-crest"
          />

          <h2>{match.awayTeam.name}</h2>

        </div>

      </div>

    </div>
  );
}

export default MatchHero;