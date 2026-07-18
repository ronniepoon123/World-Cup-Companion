import "./MatchCard.css";
import { useNavigate } from "react-router-dom";
function MatchCard({ match }) {
    const navigate = useNavigate();
  const homeScore = match.score?.fullTime?.home;
  const awayScore = match.score?.fullTime?.away;

  const kickoff = new Date(match.utcDate);

  const time = kickoff.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const stage = formatStage(match.stage);

  let status = "Scheduled";
  let statusClass = "scheduled";

  switch (match.status) {
    case "LIVE":
    case "IN_PLAY":
      status = "LIVE";
      statusClass = "live";
      break;

    case "PAUSED":
      status = "HALF TIME";
      statusClass = "live";
      break;

    case "FINISHED":
    case "AWARDED":
      status = "FT";
      statusClass = "finished";
      break;

    default:
      break;
  }

  return (
    <div
  className={`match-card ${statusClass}`}
  onClick={() => navigate(`/match/${match.id}`)}
>

      <div className="match-header">

        <span className={`status-pill ${statusClass}`}>
          {status}
        </span>

        <span className="match-stage">
          {stage}
        </span>

      </div>

      <div className="team-row">

        <div className="team-info">

          <img
            src={match.homeTeam.crest}
            alt={match.homeTeam.name}
            className="team-crest"
          />

          <span>{match.homeTeam.shortName}</span>

        </div>

        <div className="team-score">

          {status === "Scheduled"
            ? "-"
            : homeScore}

        </div>

      </div>

      <div className="team-row">

        <div className="team-info">

          <img
            src={match.awayTeam.crest}
            alt={match.awayTeam.name}
            className="team-crest"
          />

          <span>{match.awayTeam.shortName}</span>

        </div>

        <div className="team-score">

          {status === "Scheduled"
            ? "-"
            : awayScore}

        </div>

      </div>

      <div className="match-divider" />

      <div className="match-footer">

        <div className="footer-left">

          <div className="footer-item">
            🕒 {time}
          </div>

          {match.venue && (
            <div className="footer-item">
              📍 {match.venue}
            </div>
          )}

        </div>

        <div className="footer-right">

          {match.matchday && (
            <div className="matchday">
              Matchday {match.matchday}
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

function formatStage(stage) {
  if (!stage) return "";

  return stage
    .replaceAll("_", " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default MatchCard;