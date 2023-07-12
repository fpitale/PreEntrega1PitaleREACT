import React from "react";
import { Link, useNavigate } from "react-router-dom";
import perroygato from "../../assets/perroygato.jpg";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={perroygato}
          alt="Logo"
          className="logo-img"
          onClick={handleLogoClick}
        />
        <div className="contacto-container">
          <i className="contacto-icon"></i>
          <Link to="/contacto" className="contacto-text">
            Contacto
          </Link>
        </div>
      </div>
      <h1 className="header-title" onClick={handleLogoClick}>
        La Manada
      </h1>
      <nav className="navigation">
        <ul className="nav-links">
          {/* Adicione aqui os outros links de navegação */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
