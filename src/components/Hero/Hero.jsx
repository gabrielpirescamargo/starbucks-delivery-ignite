import React from "react";
import "./Hero.css";
import heroImg from "../../img/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div >
        <h1 className="heroTitle">Encontre o café perfeito para qualquer hora do dia</h1>
        <h3 className="heroSubtitle">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
      </div>
      <img width={400} src={heroImg}></img>
    </div>
  );
};

export default Hero;
