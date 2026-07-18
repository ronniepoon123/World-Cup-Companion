import { useEffect, useState } from "react";

import { getStandings } from "../services/footballApi";

import "./StandingsPage.css";

function StandingsPage() {

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadStandings() {

      try {

        const data = await getStandings();

        setGroups(data.standings || []);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }

    loadStandings();

  }, []);

  if (loading) {

    return (
      <div className="loading">
        Loading standings...
      </div>
    );

  }

  return (

    <div className="standings-page">

      <div className="standings-header">

        <h1>🏆 World Cup Standings</h1>

        <p>
          Follow every group's latest table.
        </p>

      </div>

      {groups.map((group) => (

        <div
          key={group.group}
          className="group-card"
        >

          <h2>
            {group.group}
          </h2>

          <table>

            <thead>

              <tr>

                <th>Team</th>

                <th>P</th>

                <th>W</th>

                <th>D</th>

                <th>L</th>

                <th>GD</th>

                <th>Pts</th>

              </tr>

            </thead>

            <tbody>

              {group.table.map((team) => (

                <tr key={team.team.id}>

                  <td className="team-cell">

                    <img
                      src={team.team.crest}
                      alt={team.team.name}
                    />

                    {team.team.name}

                  </td>

                  <td>{team.playedGames}</td>

                  <td>{team.won}</td>

                  <td>{team.draw}</td>

                  <td>{team.lost}</td>

                  <td>{team.goalDifference}</td>

                  <td>{team.points}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      ))}

    </div>

  );

}

export default StandingsPage;