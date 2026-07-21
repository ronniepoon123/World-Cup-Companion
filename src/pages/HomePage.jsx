import { useEffect, useState } from "react";

import { getMatches } from "../services/footballApi";

import DashboardSection from "../components/Dashboard/DashboardSection";
import DashboardMatchCard from "../components/Dashboard/DashboardMatchCard";
import DashboardActionCard from "../components/Dashboard/DashboardActionCard";
import SectionHeader from "../components/Dashboard/SectionHeader";

import "../components/Dashboard/Dashboard.css";
import "./HomePage.css";

function HomePage() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMatches() {
      try {
        const data = await getMatches();

        const matchList = Array.isArray(data)
          ? data
          : data.matches || [];

        setMatches(matchList);
      } catch (err) {
        console.error("Unable to load matches:", err);
      } finally {
        setLoading(false);
      }
    }

    loadMatches();
  }, []);

  const liveMatches = matches.filter(
    (match) =>
      match.status === "IN_PLAY" ||
      match.status === "PAUSED"
  );

  const upcomingMatches = matches
    .filter(
      (match) =>
        match.status === "TIMED" ||
        match.status === "SCHEDULED"
    )
    .sort(
      (a, b) =>
        new Date(a.utcDate) - new Date(b.utcDate)
    );

  const finishedMatches = matches
    .filter(
      (match) => match.status === "FINISHED"
    )
    .sort(
      (a, b) =>
        new Date(b.utcDate) - new Date(a.utcDate)
    );

  return (
    <div className="home-page">

      <div className="hero-banner">

        <h1>🏆 FIFA WORLD CUP 2026</h1>

        <p>
          104 matches.
          48 Nations.
          1 Champion.
        </p>

      </div>

      {/* ===============================
          QUICK ACCESS
      =============================== */}

      <SectionHeader
        title="Quick Access"
        subtitle="Everything in one place."
      />

      <div className="quick-grid">

        <DashboardActionCard
          icon="👥"
          title="Teams"
          subtitle="All 48 nations"
          to="/teams"
        />

        <DashboardActionCard
          icon="📅"
          title="Fixtures"
          subtitle="Match schedule"
          to="/fixtures"
        />

        <DashboardActionCard
          icon="🏆"
          title="Standings"
          subtitle="Browse every group"
          to="/standings"
        />

        <DashboardActionCard
          icon="🏟"
          title="Knockout"
          subtitle="Tournament bracket"
          to="/knockout"
        />

      </div>

      {!loading && (
        <>
          <DashboardSection title="🔴 Live Now">

            {liveMatches.length > 0 ? (
              liveMatches.map((match) => (
                <DashboardMatchCard
                  key={match.id}
                  match={match}
                />
              ))
            ) : (
              <div className="empty-card">
                No matches are currently live.
              </div>
            )}

          </DashboardSection>

          <DashboardSection title="⏰ Up Next">

            {upcomingMatches.length > 0 ? (
              upcomingMatches
                .slice(0, 4)
                .map((match) => (
                  <DashboardMatchCard
                    key={match.id}
                    match={match}
                  />
                ))
            ) : (
              <div className="empty-card">
                No upcoming matches.
              </div>
            )}

          </DashboardSection>

          <DashboardSection title="✅ Latest Results">

            {finishedMatches.length > 0 ? (
              finishedMatches
                .slice(0, 4)
                .map((match) => (
                  <DashboardMatchCard
                    key={match.id}
                    match={match}
                  />
                ))
            ) : (
              <div className="empty-card">
                No completed matches yet.
              </div>
            )}

          </DashboardSection>
        </>
      )}

    </div>
  );
}

export default HomePage;