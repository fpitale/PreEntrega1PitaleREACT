import React from "react";
import { Link } from "react-router-dom";
import perroygato from "../assests/perroygato.jpg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={perroygato} alt="Logo" className="logo-img" />
        </Link>
      </div>
      <nav className="navigation">
        <ul className="nav-links">
          <li>
            <Link to="/contacto" className="nav-link">
              Contacto
            </Link>
          </li>
          {/* Adicione aqui os outros links de navegação */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
