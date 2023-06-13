import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navegacion = ({ categories }) => {
  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <NavLink to={`/category/${category.id}`}>
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navegacion };
