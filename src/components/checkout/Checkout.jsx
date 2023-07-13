import React, { useState } from "react";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar cualquier lógica adicional que necesites, como enviar la orden al servidor

    // Ejemplo: Imprimir los datos en la consola
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Dirección:", address);
    console.log("Teléfono:", phoneNumber);

    // Restablecer los campos del formulario después de enviar la orden
    setName("");
    setEmail("");
    setAddress("");
    setPhoneNumber("");
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Teléfono:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Finalizar la compra</button>
      </form>
    </div>
  );
};

export default Checkout;
