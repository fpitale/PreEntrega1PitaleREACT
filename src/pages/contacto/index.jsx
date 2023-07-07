import React from "react";
import "./contacto.css";

const Contacto = () => {
  return (
    <>
      <div className="contacto_form">
        <div className="formulario">
          <h3 className="h3_contacto">
            Escríbenos y en breve los pondremos en contacto contigo
          </h3>

          <form action="submeter-formulario.php" method="post">
            <div className="form_group">
              <label htmlFor="nombre" className="contacto_label">
                Nombre
                <span className="obligatorio">*</span>
              </label>
              <input
                type="text"
                name="introducir_nombre"
                id="nombre"
                required="obligatorio"
                placeholder="Escribe tu nombre"
                className="contacto_input"
              />
            </div>

            <div className="form_group">
              <label htmlFor="email" className="contacto_label">
                Email
                <span className="obligatorio">*</span>
              </label>
              <input
                type="email"
                name="introducir_email"
                id="email"
                required="obligatorio"
                placeholder="Escribe tu Email"
                className="contacto_input"
              />
            </div>

            <div className="form_group">
              <label htmlFor="telefone" className="contacto_label">
                Teléfono
              </label>
              <input
                type="tel"
                name="introducir_telefono"
                id="telefono"
                placeholder="Escribe tu teléfono"
                className="contacto_input"
              />
            </div>

            <div className="form_group">
              <label htmlFor="mensaje" className="contacto_label">
                Mensaje
                <span className="obligatorio">*</span>
              </label>
              <textarea
                name="introducir_mensaje"
                className="contacto_texto_mensaje"
                id="mensaje"
                required="obligatorio"
                placeholder="Deja aquí tu comentario..."
              ></textarea>
            </div>

            <button
              type="submit"
              name="enviar_formulario"
              id="enviar"
              className="contacto_button"
            >
              <p className="p_enviar">Enviar</p>
            </button>

            <div className="aviso">
              <span className="obligatorio"> *</span>los campos son
              obligatorios.
            </div>
          </form>
        </div>
      </div>

      <div className="texto__ubicacion">
        Podrá encontrarnos en esta dirección
      </div>

      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104657.70577423919!2d-54.98154485023045!3d-34.942738300745965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9575059ec8c40bbd%3A0x9bdd0183c2d3cf93!2sPunta%20del%20Este%2C%20Departamento%20de%20Maldonado!5e0!3m2!1ses-419!2suy!4v1671332282840!5m2!1ses-419!2suy"
          title="Mapa"
          width="600"
          height="450"
          style={{ border: "0", width: "100%", height: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export { Contacto };
