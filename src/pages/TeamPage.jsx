import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";
import "./TeamPage.css";

function TeamPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await fetch(
          `http://localhost:3001/api/worldcup/team/${id}`
        );

        if (!response.ok) {
          throw new Error("Unable to load team.");
        }

        const data = await response.json();
        setTeam(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTeam();
  }, [id]);

  if (loading) return <h2 className="loading">Loading...</h2>;

  if (error) return <h2 className="loading">{error}</h2>;

  const groupPlayers = (position) =>
    team.squad.filter((player) => player.position === position);

  return (
    <div className="team-page">
      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Back to Teams
      </button>

      <div className="team-header">
        <img
          src={team.crest}
          alt={team.name}
          className="team-crest-large"
        />

        <h1>{team.name}</h1>

        <p className="team-subtitle">
          FIFA World Cup Team
        </p>

        <div className="team-summary-card">
          <div className="summary-item">
            <span className="summary-label">👤 Coach</span>
            <span>{team.coach?.name}</span>
          </div>

          <div className="summary-item">
            <span className="summary-label">🏆 Founded</span>
            <span>{team.founded}</span>
          </div>

          <div className="summary-item">
            <span className="summary-label">👥 Squad</span>
            <span>{team.squad.length} Players</span>
          </div>

          <div className="summary-item">
            <span className="summary-label">🎨 Colours</span>
            <span>{team.clubColors}</span>
          </div>
        </div>
      </div>

      <PlayerGroup
        title="🥅 Goalkeepers"
        players={groupPlayers("Goalkeeper")}
      />

      <PlayerGroup
        title="🛡 Defenders"
        players={groupPlayers("Defence")}
      />

      <PlayerGroup
        title="⚙ Midfielders"
        players={groupPlayers("Midfield")}
      />

      <PlayerGroup
        title="⚽ Forwards"
        players={groupPlayers("Offence")}
      />
    </div>
  );
}

function PlayerGroup({ title, players }) {
  return (
    <div className="player-section">
      <h2>
        {title} ({players.length})
      </h2>

      <div className="player-grid">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamPage;