import React from "react";
import { Link } from "react-router-dom";
const NavbarBoot = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    < Link className="navbar-brand" to='/src/pages'>La Manada</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/' >Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/src/pages/Alimentos y golosinas'>Alimentos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/src/pages/Salud y Higiene'>Salud y Higiene</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contactanos
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to='/src/pages/Alimentos y golosinas'>Donde nos encontrar</Link></li>
            <li><Link className="dropdown-item" to='/src/pages/Salud y Higiene'>Trabaje con nosotros</Link></li>
            <li><Link className="dropdown-item" to='/src/pages/Contacto'>Contactos</Link></li>
            </ul>
        </li>
      </ul>
    </div>
  </div>

</nav>
        </>
    )
}

export default NavbarBoot