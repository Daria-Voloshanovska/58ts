import { useEffect, type JSX } from "react";
import { NavLink } from "react-router-dom";
import styles from './HomePage.module.css'


interface IAllData {
  path: string;
  title: string;
  element: JSX.Element;
}

interface IHomePageProps {
  homework: IAllData[];
  lessons: IAllData[];
}

export default function HomePage({
  homework,
  lessons,
}: IHomePageProps): JSX.Element {
  useEffect(() => {
    document.title = "HomePage";
  });
  return (
    <div className={styles.homePage}>
        <h1>Home Page</h1>

        <div className={styles.columnsContainer}>
            <div className={styles.column}>
                <h2>Homework</h2>
            <div className={styles.linksContainer}>
                    {homework.map((el) => (
          <NavLink key={el.path} to={el.path}>
            {el.title}
          </NavLink>
        ))}
                </div>
            </div>
            <div className={styles.column}>
                <h2>Lessons</h2>
                <div className={styles.linksContainer}>
                    {lessons.map((el) => (
          <NavLink key={el.path} to={el.path}>
            {el.title || el.path}
          </NavLink>
        ))}
                </div>
            </div>
        </div>
    </div>
    
  );
}
