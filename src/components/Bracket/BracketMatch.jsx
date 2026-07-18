import { Link } from "react-router-dom";

function BracketMatch({ match }) {

  const homeScore = match.score.fullTime.home;
  const awayScore = match.score.fullTime.away;

  const homeWinner =
    homeScore !== null &&
    awayScore !== null &&
    homeScore > awayScore;

  const awayWinner =
    homeScore !== null &&
    awayScore !== null &&
    awayScore > homeScore;

  return (

    <Link
      to={`/match/${match.id}`}
      className="bracket-match"
    >

      <div
        className={`bracket-team ${
          homeWinner ? "winner" : ""
        }`}
      >

        <img
          src={match.homeTeam.crest}
          alt={match.homeTeam.name}
        />

        <span>

          {match.homeTeam.name}

        </span>

        <strong>

          {homeScore ?? "-"}

        </strong>

      </div>

      <div
        className={`bracket-team ${
          awayWinner ? "winner" : ""
        }`}
      >

        <img
          src={match.awayTeam.crest}
          alt={match.awayTeam.name}
        />

        <span>

          {match.awayTeam.name}

        </span>

        <strong>

          {awayScore ?? "-"}

        </strong>

      </div>

    </Link>

  );

}

export default BracketMatch;