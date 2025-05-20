import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import HomePage from "./components/homePage/HomePage";
import Homework01 from "./homeworks/homework01/Homework01";
import Homework02 from "./homeworks/homework02/Homework02";
import Homework03 from "./homeworks/homework03/Homework03";
import Homework04 from "./homeworks/homework04/Homework04";
import Homework05 from "./homeworks/Homework05/Homework05";
import Homework06 from "./homeworks/Homework06/Homework06";
import Homework07 from "./homeworks/Homework07/FetchFox";
import Lesson01 from "./lessons/Lesson01/Lesson01";
import Lesson02 from "./lessons/Lesson02/Lesson02";
import Lesson03 from "./lessons/Lesson03/Lesson03";
import Lesson04 from "./lessons/Lesson04/Lesson04";
import Lesson05 from "./lessons/Lesson05/Lesson05";
import Lesson06 from "./lessons/Lesson06/Lesson06";
import Lesson07 from "./lessons/Lesson07/Lesson07";
import Lesson08 from "./lessons/Lesson08/Lesson08";
import Lesson09 from "./lessons/Lesson09/Lesson09";
import Lesson10 from "./lessons/Lesson10/Lesson10";

const navHw = [
  { path: "homework-01", title: "Homework01", element: <Homework01 /> },
  { path: "homework-02", title: "Homework02", element: <Homework02 /> },
  { path: "homework-03", title: "Homework03", element: <Homework03 /> },
  { path: "homework-04", title: "Homework04", element: <Homework04 /> },
  { path: "homework-05", title: "Homework05", element: <Homework05 /> },
  { path: "homework-06", title: "Homework06", element: <Homework06 /> },
  { path: "homework-07", title: "Homework07", element: <Homework07 /> },
];

const navLs = [
  { path: "lesson-01", title: "Lesson01", element: <Lesson01 /> },
  { path: "lesson-02", title: "Lesson02", element: <Lesson02 /> },
  { path: "lesson-03", title: "Lesson03", element: <Lesson03 /> },
  { path: "lesson-04", title: "Lesson04", element: <Lesson04 /> },
  { path: "lesson-05", title: "Lesson05", element: <Lesson05 /> },
  { path: "lesson-06", title: "Lesson06", element: <Lesson06 /> },
  { path: "lesson-07", title: "Lesson07", element: <Lesson07 /> },
  { path: "lesson-08", title: "Lesson08", element: <Lesson08 /> },
  { path: "lesson-09", title: "Lesson09", element: <Lesson09 /> },
  { path: "lesson-10", title: "Lesson10", element: <Lesson10 /> },
];

const navLinks = [
  { path: "/", element: <HomePage homework={navHw} lessons={navLs} /> },
  { path: "*", element: <h1>404 Page found</h1> },
];

function App() {
  return (
    // 1. оборачиваем все приложение в HashRouter
    // 2. все маршруты оборачиваем в Routes
    // 3. начинаем описывать структуру с корневого маршрута с Layout
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {navLinks.map((el) => {
            return <Route key={el.path} path={el.path} element={el.element} />;
          })}
          {navHw.map((el) => {
            return <Route key={el.path} path={el.path} element={el.element} />;
          })}
          {navLs.map((el) => {
            return <Route key={el.path} path={el.path} element={el.element} />;
          })}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
