import { Routes, Route } from "react-router-dom";
import TeamPage from "./pages/TeamPage";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TeamCard from "./components/TeamCard";
import "./App.css";

function App() {
const [search, setSearch] = useState("");
const [teams, setTeams] = useState([]);
useEffect(() => {
  fetch("http://localhost:3001/api/worldcup/teams")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      setTeams(data.teams);
    })
    .catch((error) => {
      console.error(error);
    });
}, []);
  const filteredTeams = teams.filter((team) =>
    team.name.toLowerCase().includes(search.toLowerCase())
  );

return (
  <Routes>

    <Route
      path="/"
      element={
        <div className="container">
      <Navbar />

      <h1>Welcome to World Cup Companion!</h1>
      <p>
        Search for your favourite team, browse fixtures,
        standings, and player statistics.
      </p>
        <input
        type="text"
        placeholder="Search for a team..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
            <p>Search: {search}</p>
            <p>There are {teams.length} teams.</p>
<h2>🌍 Qualified Teams</h2>

<p>Showing {filteredTeams.length} team(s).</p>

<div className="team-grid">
  {filteredTeams.map((team) => (
    <TeamCard
      key={team.id}
      team={team}
    />
  ))}
</div>


        </div>
      }
    />

    <Route
      path="/team/:id"
      element={<TeamPage />}
    />

  </Routes>
);
}


export default App;