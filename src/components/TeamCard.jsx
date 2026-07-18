import { useNavigate } from "react-router-dom";
import "./TeamCard.css";

function TeamCard({ team }) {
  const navigate = useNavigate();

  return (
    <div className="team-card">

      <div className="team-card-top">

        <img
          src={team.crest}
          alt={team.name}
          className="team-logo"
        />

      </div>

      <div className="team-card-body">

        <h3>{team.name}</h3>

        <div className="team-info-row">

          <span className="info-label">
            👤 Coach
          </span>

          <span className="info-value">
            {team.coach?.name || "Unknown"}
          </span>

        </div>

        <div className="team-info-row">

          <span className="info-label">
            🌍 FIFA Code
          </span>

          <span className="team-code">
            {team.tla}
          </span>

        </div>

        <button
          className="view-btn"
          onClick={() => navigate(`/team/${team.id}`)}
        >
          View Squad →
        </button>

      </div>

    </div>
  );
}

export default TeamCard;