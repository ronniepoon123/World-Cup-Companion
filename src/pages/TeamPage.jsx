import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";
import "./TeamPage.css";
import teamThemes from "../data/teamThemes";
import { getTeam } from "../services/footballApi";

function TeamPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [team, setTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTeam() {
      try {
const data = await getTeam(id);
setTeam(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTeam();
  }, [id]);

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  if (error) {
    return <h2 className="loading">{error}</h2>;
  }

  const theme = teamThemes[team.tla] || teamThemes.default;

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

      <div
        className="team-header"
        style={{
          background: theme.gradient,
          color: theme.secondary,
        }}
      >
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
            <div className="summary-left">
              <div className="summary-icon">👤</div>

              <div>
                <div className="summary-label">
                  Coach
                </div>

                <div className="summary-value">
                  {team.coach?.name || "Unknown"}
                </div>
              </div>
            </div>
          </div>

          <div className="summary-item">
            <div className="summary-left">
              <div className="summary-icon">🏆</div>

              <div>
                <div className="summary-label">
                  Founded
                </div>

                <div className="summary-value">
                  {team.founded || "N/A"}
                </div>
              </div>
            </div>
          </div>

          <div className="summary-item">
            <div className="summary-left">
              <div className="summary-icon">👥</div>

              <div>
                <div className="summary-label">
                  Squad
                </div>

                <div className="summary-value">
                  {team.squad?.length || 0} Players
                </div>
              </div>
            </div>
          </div>

          <div className="summary-item">
            <div className="summary-left">
              <div className="summary-icon">🎨</div>

              <div>
                <div className="summary-label">
                  Colours
                </div>

                <div className="summary-value">
                  {team.clubColors || "Unknown"}
                </div>
              </div>
            </div>
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