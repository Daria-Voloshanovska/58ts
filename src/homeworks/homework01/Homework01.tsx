import "./homework01.css";
import React from "react";

function Homework01(){
    return (
        <>
        <div className="container">
            <div className="box top">     
           <div>
            <h1 className="name">Daria Voloshanovska</h1>
            <p className="description">Начинающий Full Stack Pro разработчик</p>
            {/* <ul className="links">
              <li>
                <a href="#about">О себе</a>
              </li>
              <li>
                <a href="#skills">Навыки</a>
              </li>
              <li>
                <a href="#portfolio">Портфолио</a>
              </li>
              <li>
                <a href="#contacts">Контакты</a>
              </li>
            </ul> */}
        
            <img className="photo" src="https://masterpiecer-images.s3.yandex.net/8f66cb5f759911eeaead5696910b1137:upscaled" alt="" />
           </div>
          <div className="box">
            <h3 id="about">О себе</h3>
            <p>Привет! Я изучаю програмирование. Мне это очнень нравиться, я хочу стать Pro - разработчиком.</p>
            <h3 id="skills">Навыки</h3>
            <ul>
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Git</li>
                <li>Postgres</li>
                <li>MongoDB</li>
                <li>JSon</li>
            </ul>
            <h3 id="portfolio">Портфолио</h3>
            <p className="portfolio-text">Я практикую и классно создаю учебные работы.</p>
            <h3 id="contacts">Контакты</h3>
            <p>
            <a href="https://github.com/Daria-Voloshanovska?tab=repositories" target="_blank">
              GitHub
            </a>
            &nbsp; | &nbsp;
            <a href="mailto:dashavl89@gmail.com">dashavl89@gmail.com</a>
          </p>
        </div>
         </div>
         
        </div>
        </>
    );
}

export default Homework01;
