import styles from "./HeroCard.module.css"
import cn from 'classnames'

interface Hero {
  id: number;
  name: string;
  age: number;
  isDark: boolean;
  weapons: string[];
  image: string;
}

interface HeroCardProps {
  hero: Hero;
}

function HeroCard ({ hero }:HeroCardProps) {
  const cardClass = cn(styles.heroCard, {
    [styles.heroCardDark]: hero.isDark,
    [styles.heroCardLight]: !hero.isDark
  });
  return (
    <div key={hero.id} className={cardClass}>
      <div className={styles.heroCardContent}>
      <h3>{hero.name}</h3>
      <p>{hero.age} years old</p>
      <p>{hero.isDark ? "Villain 🔥" : "Hero ✨"}</p>
      <p>
        Weapons:{" "}
        {hero.weapons.map((weapon, index) => (
          <span key={weapon} className={styles.weaponText}>
            {weapon}
            {index !== hero.weapons.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
      </div>
      <div className={styles.imageWrapper}>
        <img src={hero.image} alt={hero.name} />
      </div>
    </div>
  );
}

export default HeroCard;
