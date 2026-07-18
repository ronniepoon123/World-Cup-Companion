import { Routes, Route } from "react-router-dom";
import KnockoutPage from "./pages/KnockoutPage";
import HomePage from "./pages/HomePage";
import TeamsPage from "./pages/TeamsPage";
import TeamPage from "./pages/TeamPage";
import FixturesPage from "./pages/FixturesPage";
import MatchPage from "./pages/MatchPage";
import StandingsPage from "./pages/StandingsPage";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/teams"
        element={<TeamsPage />}
      />

      <Route
  path="/standings"
  element={<StandingsPage />}
/>

<Route
  path="/knockout"
  element={<KnockoutPage />}
/>

      <Route
        path="/team/:id"
        element={<TeamPage />}
      />

      <Route
        path="/fixtures"
        element={<FixturesPage />}
      />

      <Route
        path="/match/:id"
        element={<MatchPage />}
      />

    </Routes>
  );
}

export default App;