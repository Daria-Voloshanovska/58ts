import styles from "./SpaceMission.module.css"

export default function SpaceMission() {
  const shipName: string = "Apollo 11";
  let crewCount: number = 3;
  let missionStarted: boolean = true;
  const crewNames: string[] = ["Нил Армстронг", "Майкл Коллинз", "Базз Олдрин"];
  const captain: [string, number] = ["Нил Армстронг", 38];

  function startMission(shipName: string) {
    return `Миссия ${shipName} началась!`;
  }

  return (
    <>
      <h2>Названием миссии: {shipName}</h2>
      <p>Экипаж: {crewCount} человека</p>
      <p>Члены экипажа:</p>
      <ul>
        {crewNames.map((crew) => (
          <li>{crew === "Нил Армстронг" ? captain.join(", ") : crew}</li>
        ))}
      </ul>
      <p>
        {missionStarted
          ? startMission(shipName)
          : `Миссия ${shipName} ещё не началась!`}
      </p>
    </>
  );
}
