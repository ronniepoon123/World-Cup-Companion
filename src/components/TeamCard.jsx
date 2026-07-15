import { useNavigate } from "react-router-dom";
import "./TeamCard.css";

function TeamCard({ team }) {
  const navigate = useNavigate();
  return (
    <div className="team-card">
      <img
        src={team.crest}
        alt={team.name}
        className="team-logo"
      />

      <h3>{team.name}</h3>

<p>
  <strong>Coach:</strong> {team.coach?.name}
</p>

      <p>
        <strong>Country Code:</strong> {team.tla}
      </p>

      <button className="view-btn"
        onClick={() => navigate(`/team/${team.id}`)}>
        View Squad →
      </button>
    </div>
  );
}

export default TeamCard;