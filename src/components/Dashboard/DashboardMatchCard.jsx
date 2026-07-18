import { Link } from "react-router-dom";

function DashboardMatchCard({ match }) {

  const homeScore =
    match.score?.fullTime?.home;

  const awayScore =
    match.score?.fullTime?.away;

  const kickoff =
    new Date(match.utcDate);

  const time =
    kickoff.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const statusMap = {
    TIMED: "SCHEDULED",
    FINISHED: "FULL TIME",
    IN_PLAY: "LIVE",
    PAUSED: "HALF TIME",
  };

  return (

    <Link
      to={`/match/${match.id}`}
      className="dashboard-match-card"
    >

      <div className="dashboard-status">

        {statusMap[match.status] ??
          match.status}

      </div>

      <div className="dashboard-team">

        <img
          src={match.homeTeam.crest}
          alt={match.homeTeam.name}
        />

        <span>

          {match.homeTeam.name}

        </span>

        <strong>

          {homeScore ?? "-"}

        </strong>

      </div>

      <div className="dashboard-team">

        <img
          src={match.awayTeam.crest}
          alt={match.awayTeam.name}
        />

        <span>

          {match.awayTeam.name}

        </span>

        <strong>

          {awayScore ?? "-"}

        </strong>

      </div>

      <div className="dashboard-footer">

        <span>

          {time}

        </span>

        <span>

          {match.stage.replaceAll("_", " ")}

        </span>

      </div>

    </Link>

  );
}

export default DashboardMatchCard;