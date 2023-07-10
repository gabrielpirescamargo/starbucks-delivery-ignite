import React, { useState } from "react";
import starbucksLogo from "../../img/starbucks.png";
import cartIcon from "../../img/shopGreen.svg";
import mapIcon from "../../img/map.svg";
import "./Header.css";
import { CartState } from "../../context/Context";
import { Link } from "react-router-dom";

const Header = () => {
  const [localizacao, setLocalizacao] = useState("");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // Faz uma solicitação para uma API de geocodificação reversa
      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      )
        .then((response) => response.json())
        .then((data) => {
          const city = data.address.city;
          const state = data.address.state;
          setLocalizacao(`${city}, ${state}`);
        })
        .catch((error) => {
          console.log("Ocorreu um erro ao obter a localização:", error);
        });
    });
  } else {
    console.log("Geolocalização não é suportada neste navegador.");
  }

  const {
    state: { cart },
  } = CartState();
  return (
    <header className="header">
      <Link to="/">
        <img width={80} src={starbucksLogo} alt="logo" />
      </Link>
      <div className="rightInfos">
        <span className="localizacao">
          <img src={mapIcon} />
          {localizacao}
        </span>
        <Link to="/cart">
          <img className="cart" width={32} src={cartIcon} alt="logo" />
          <span className="cartQty">{cart.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
