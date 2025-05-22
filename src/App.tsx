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
import Lesson11 from "./lessons/Lesson11/Lesson11";
import Lesson12 from "./lessons/Lesson12/Lesson12";
import Homework12 from "./homeworks/Homework12/Homework12";
import Lesson13 from "./lessons/Lesson13/Lesson13";
import Homework13 from "./homeworks/Homework13/Homework13";

const navHw = [
  { path: "homework-01", title: "Homework01: Business card", element: <Homework01 /> },
  { path: "homework-02", title: "Homework02: JSX, My Best Friends!", element: <Homework02 /> },
  { path: "homework-03", title: "Homework03: Props & LogIn form", element: <Homework03 /> },
  { path: "homework-04", title: "Homework04: useState & Feedback form", element: <Homework04 /> },
  { path: "homework-05", title: "Homework05: React map() 🧝🏻‍♂️", element: <Homework05 /> },
  { path: "homework-06", title: "Homework06: TypeScript & Apollo 11 mission", element: <Homework06 /> },
  { path: "homework-07", title: "Homework07: useEffect & Foxes!", element: <Homework07 /> },
    { path: "homework-12", title: "Homework12 ", element: <Homework12 /> },
    { path: "homework-13", title: "Homework13 ", element: <Homework13 /> },
];

const navLs = [
  { path: "lesson-01", title: "Lesson01: Hello, React!", element: <Lesson01 /> },
  { path: "lesson-02", title: "Lesson02: JSX components", element: <Lesson02 /> },
  { path: "lesson-03", title: "Lesson03: React props 👨‍👩‍👧‍👦", element: <Lesson03 /> },
  { path: "lesson-04", title: "Lesson04: UseStat hook 🪝", element: <Lesson04 /> },
  { path: "lesson-05", title: "Lesson05: React map() 🧝🏻‍♂️", element: <Lesson05 /> },
  { path: "lesson-06", title: "Lesson06: TypeScript pt1 💁‍♂️", element: <Lesson06 /> },
  { path: "lesson-07", title: "Lesson07: TypeScript pt2 💁", element: <Lesson07 /> },
  { path: "lesson-08", title: "Lesson08: UseEffect hook 🪝", element: <Lesson08 /> },
  { path: "lesson-09", title: "Lesson09: CSS modules", element: <Lesson09 /> },
  { path: "lesson-10", title: "Lesson10: React test: Fletch Cats! 🐈", element: <Lesson10 /> },
  { path: "lesson-11", title: "Lesson11: React Router Dom", element: <Lesson11 /> },
   { path: "lesson-12", title: "Lesson12: Formik", element: <Lesson12 /> },
   { path: "lesson-13", title: "Lesson13: Yup ", element: <Lesson13 /> },
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
