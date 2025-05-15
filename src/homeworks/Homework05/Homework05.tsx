import { fellowship2 } from "./fellowship2.ts";
import "./Homework05.css";
import HeroCard from "../../components/heroCard/HeroCard.js";

function Homework05() {
  return (
    <div>
      <h1>Homework 05</h1>
      <div className="cards-grid">
        {fellowship2.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
}
export default Homework05;
