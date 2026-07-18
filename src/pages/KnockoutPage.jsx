import { useEffect, useState } from "react";

import { getBracket } from "../services/footballApi";

import Bracket from "../components/Bracket/Bracket";

import "./KnockoutPage.css";

function KnockoutPage() {

  const [matches, setMatches] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadBracket() {

      try {

        const data = await getBracket();

        setMatches(data.matches || []);

      } catch (err) {

        console.error(err);

      } finally {

        setLoading(false);

      }

    }

    loadBracket();

  }, []);

  if (loading) {

    return (

      <div className="loading">

        Loading Knockout Bracket...

      </div>

    );

  }

  return (

    <div className="knockout-page">

      <h1>

        🏟 Knockout Stage

      </h1>

      <Bracket matches={matches} />

    </div>

  );

}

export default KnockoutPage;