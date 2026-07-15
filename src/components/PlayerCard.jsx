import "./PlayerCard.css";

function PlayerCard({ player }) {
  const calculateAge = (dob) => {
    const today = new Date();
    const birth = new Date(dob);

    let age = today.getFullYear() - birth.getFullYear();

    if (
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
        today.getDate() < birth.getDate())
    ) {
      age--;
    }

    return age;
  };

  return (
    <div className="player-card">
      <h3>{player.name}</h3>

      <div className="player-details">
        <p>🌍 {player.nationality}</p>
        <p>🎂 {calculateAge(player.dateOfBirth)} years old</p>
      </div>
    </div>
  );
}

export default PlayerCard;