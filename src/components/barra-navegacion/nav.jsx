import { NavLink } from "react-router-dom";
import "./links.css";

const Navegacion = ({ categories }) => {
  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink
              to={`/category/${category.id}`}
              className="estilos" // Atualize a classe para "estilos"
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navegacion };
