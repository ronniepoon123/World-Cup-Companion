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

      <div className="hero-content">

        <div className="hero-team">

          <img
            src={match.homeTeam.crest}
            alt={match.homeTeam.name}
            className="hero-crest"
          />

          <h2>{match.homeTeam.name}</h2>

        </div>

        <div className="hero-score">

          <div className="score-row">

            <span className="team-score">
              {homeScore}
            </span>

            <div
              className={`match-status ${
                match.status === "IN_PLAY"
                  ? "live"
                  : match.status === "FINISHED"
                  ? "finished"
                  : "scheduled"
              }`}
            >
              {status}
            </div>

            <span className="team-score">
              {awayScore}
            </span>

          </div>

          <div className="hero-meta">

            <span>
              {match.stage.replaceAll("_", " ")}
            </span>

            <span>•</span>

            <span>
              Matchday {match.matchday}
            </span>

          </div>

          <div className="hero-date">

            {date}

            <span>•</span>

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