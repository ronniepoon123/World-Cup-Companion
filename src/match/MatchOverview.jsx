function MatchOverview({ match }) {
  const kickoff = new Date(match.utcDate);

  const cards = [
    {
      icon: "🏆",
      title: "Stage",
      value: match.stage.replaceAll("_", " "),
    },
    {
      icon: "📅",
      title: "Matchday",
      value: match.matchday,
    },
    {
      icon: "🕒",
      title: "Kickoff",
      value: kickoff.toLocaleString(),
    },
  ];

  if (match.venue && match.venue !== "TBC") {
    cards.push({
      icon: "📍",
      title: "Venue",
      value: match.venue,
    });
  }

  return (
    <div className="overview-grid">
      {cards.map((card) => (
        <div
          key={card.title}
          className="overview-tile"
        >
          <div className="tile-icon">
            {card.icon}
          </div>

          <div className="tile-title">
            {card.title}
          </div>

          <div className="tile-value">
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MatchOverview;