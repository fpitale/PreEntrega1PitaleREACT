import React from "react";
import "./presentacion.css";
/* import { ItemCount } from "../../components/item-count/itemcount.js"; */

const Presentacion = () => {
  return (
    <div className="presentacionCss">
      <div className="texto">
        <p>
          Tener una mascota en casa es algo que todas las familias deberían
          experimentar, pues estas ayudan a la unión familiar. Nuestras mascotas
          no solo se convierten en un miembro más de la familia, sino que además
          enseñan a los niños a ser más sociables, responsables y conscientes de
          los demás seres vivos.
        </p>
      </div>

      <img
        className="perros_y_gatos"
        src="/img/presentacion/perros.jpeg"
        alt="Perros"
      />

      <div className="texto">
        <p>
          La alimentación es fundamental para su salud, vitalidad y bienestar, y
          debemos procurar que, a través de ella, reciba todos los nutrientes
          necesarios para una vida sana y feliz. Una buena alimentación es
          indispensable para cuidar la salud y mejorar la calidad de vida de
          nuestros animales de compañía.
        </p>
      </div>
    </div>
  );
};

export { Presentacion };
