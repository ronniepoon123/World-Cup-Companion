import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getMatch } from "../services/footballApi";

import MatchHero from "../match/MatchHero";
import MatchOverview from "../match/MatchOverview";
import MatchTabs from "../match/MatchTabs";
import MatchTimeline from "../match/MatchTimeline";
import MatchStatistics from "../match/MatchStatistics";
import MatchLineups from "../match/MatchLineups";

import "./MatchPage.css";

function MatchPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [match, setMatch] = useState(null);
  const [loading, setLoading] = useState(true);

  const [activeTab, setActiveTab] =
    useState("overview");

  useEffect(() => {
    async function loadMatch() {
      try {
        const data = await getMatch(id);
        setMatch(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadMatch();
  }, [id]);

  if (loading)
    return (
      <h2 className="loading">
        Loading Match...
      </h2>
    );

  if (!match)
    return (
      <h2 className="loading">
        Unable to load match.
      </h2>
    );

  return (
    <div className="match-page">

      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <MatchHero match={match} />

      <MatchTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === "overview" && (
        <MatchOverview match={match} />
      )}

      {activeTab === "timeline" && (
        <MatchTimeline />
      )}

      {activeTab === "statistics" && (
        <MatchStatistics />
      )}

      {activeTab === "lineups" && (
        <MatchLineups />
      )}

    </div>
  );
}

export default MatchPage;