import { getMatches } from "../services/footballApi";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MatchCard from "../components/MatchCard";
import "./FixturesPage.css";

function FixturesPage() {
  const [matches, setMatches] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState([]);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [loading, setLoading] = useState(true);

useEffect(() => {
  async function loadMatches() {
    try {
      const data = await getMatches();

      const sortedMatches = [...(data.matches || [])].sort(
        (a, b) =>
          new Date(a.utcDate) - new Date(b.utcDate)
      );

      setMatches(sortedMatches);
      setFilteredMatches(sortedMatches);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  loadMatches();
}, []);

  useEffect(() => {
    if (statusFilter === "ALL") {
      setFilteredMatches(matches);
      return;
    }

    if (statusFilter === "LIVE") {
      setFilteredMatches(
        matches.filter((match) =>
          ["LIVE", "IN_PLAY", "PAUSED"].includes(match.status)
        )
      );
      return;
    }

    if (statusFilter === "FINISHED") {
      setFilteredMatches(
        matches.filter(
          (match) => match.status === "FINISHED"
        )
      );
      return;
    }

    if (statusFilter === "SCHEDULED") {
      setFilteredMatches(
        matches.filter(
          (match) => match.status === "SCHEDULED"
        )
      );
    }
  }, [statusFilter, matches]);

  const groupedMatches = filteredMatches.reduce(
    (groups, match) => {
      const date = new Date(match.utcDate);

      const heading = date.toLocaleDateString(
        undefined,
        {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      );

      if (!groups[heading]) {
        groups[heading] = [];
      }

      groups[heading].push(match);

      return groups;
    },
    {}
  );

  return (
    <>
      <Navbar />

      <div className="fixtures-page">

        <h1>World Cup Fixtures</h1>

        <p className="fixtures-subtitle">
          Live matches, upcoming fixtures and results.
        </p>

        <div className="fixture-filters">

          <button
            className={statusFilter === "ALL" ? "active" : ""}
            onClick={() => setStatusFilter("ALL")}
          >
            All
          </button>

          <button
            className={statusFilter === "LIVE" ? "active" : ""}
            onClick={() => setStatusFilter("LIVE")}
          >
            Live
          </button>

          <button
            className={statusFilter === "SCHEDULED" ? "active" : ""}
            onClick={() => setStatusFilter("SCHEDULED")}
          >
            Upcoming
          </button>

          <button
            className={statusFilter === "FINISHED" ? "active" : ""}
            onClick={() => setStatusFilter("FINISHED")}
          >
            Finished
          </button>

        </div>

        {loading ? (
          <h2>Loading fixtures...</h2>
        ) : (
          Object.entries(groupedMatches).map(
            ([date, matches]) => (
              <section
                key={date}
                className="fixture-day"
              >
                <h2>{date}</h2>

                <div className="fixtures-grid">
                  {matches.map((match) => (
                    <MatchCard
                      key={match.id}
                      match={match}
                    />
                  ))}
                </div>
              </section>
            )
          )
        )}

      </div>
    </>
  );
}

export default FixturesPage;