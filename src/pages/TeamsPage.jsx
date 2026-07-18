import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getTeams } from "../services/footballApi";

import "./TeamsPage.css";

function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function loadTeams() {
    try {
      const data = await getTeams();

      const teamList = data.teams || [];

      teamList.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      setTeams(teamList);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  loadTeams();
}, []);

  if (loading) {
    return (
      <div className="teams-loading">
        Loading teams...
      </div>
    );
  }

  return (
    <div className="teams-page">

      <div className="teams-header">

        <h1>🌍 Participating Teams</h1>

        <p>
          Browse all qualified nations for the
          FIFA World Cup 2026.
        </p>

      </div>

      <div className="teams-grid">

        {teams.map((team) => (

          <Link
            key={team.id}
            to={`/team/${team.id}`}
            className="team-card"
          >

            <img
              src={team.crest}
              alt={team.name}
            />

            <h3>{team.name}</h3>

            <p>
              {team.area?.name}
            </p>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default TeamsPage;