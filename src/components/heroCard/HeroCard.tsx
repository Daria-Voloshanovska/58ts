import "./Herocard.css";

function HeroCard({ hero }) {
  return (
    <div
      key={hero.id}
      className={`hero-card ${
        hero.isDark ? "hero-card-dark" : "hero-card-light"
      }`}
    >
      <h3>{hero.name}</h3>
      <p>{hero.age} years old</p>
      <p>{hero.isDark ? "Villain 🔥" : "Hero ✨"}</p>
      <p>
        Weapons:{" "}
        {hero.weapons.map((weapon, index) => (
          <span key={weapon} className="weapon-text">
            {weapon}
            {index !== hero.weapons.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      <div className="image-wrapper">
        <img src={hero.image} alt="" />
      </div>
    </div>
  );
}

export default HeroCard;
