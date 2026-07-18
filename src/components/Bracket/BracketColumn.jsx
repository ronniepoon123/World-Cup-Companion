import BracketMatch from "./BracketMatch";

function BracketColumn({
  title,
  matches,
  className,
}) {
  return (
    <div className={`bracket-column ${className}`}>

      <h2>{title}</h2>

      {matches.map((match) => (

        <BracketMatch
          key={match.id}
          match={match}
        />

      ))}

    </div>
  );
}

export default BracketColumn;