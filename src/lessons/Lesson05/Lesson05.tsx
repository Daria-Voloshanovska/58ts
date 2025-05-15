import { fellowship } from "./fellowship.ts";
import "./Lesson05.css";



function Lesson05() {
  console.log(fellowship);

  return (
    <div>
      <h1>Lesson 05: React map() 🧝🏻‍♂️</h1>
      {fellowship.map((hero) => (
       <div key={hero.id} className={`hero-card ${hero.isDark ? 'hero-card-dark' : 'hero-card-light'}`}>
          <h3>{hero.name}</h3>
          <p>{hero.age} years old</p>
          <p>{hero.isDark ? 'Villain 🔥' : 'Hero ✨'}</p>
          <p>Weapons: {hero.weapons.map((weapon, index) => index !== hero.weapons.length -1 ? weapon + ',' : weapon + '')}</p>
          <div className="image-wrapper">
            <img src={hero.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}
export default Lesson05;
