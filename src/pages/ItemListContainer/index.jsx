/* import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getProducts, getProductsByCategory, categories } from "../../tmp/data";
import { ItemList } from "../../components/common";
import { Presentacion } from "../inicio/presentacion";
import datos from "../../tmp/data.json";

const ItemListContainer = () => {
  const { catId } = useParams();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  useEffect(() => {
    // ¿Hay una categoría?
    if (catId) {
      // Llamamos a la función y le pasamos el parámetro. Con este dato, la función puede comparar entre la categoría de los productos y el parámetro de la URL.
      getProductsByCategory(catId).then((products) => {
        setItems(products);
      });
    } else {
      // Si no hay categoría, por ejemplo, en la ruta home '/', llamamos a la función que nos trae todos los productos.
      getProducts().then((products) => {
        setItems(products);
      });
    }
    // En el array de dependencias, ponemos el parámetro para que renderice cada vez que ese parámetro cambie.
  }, [catId]);

  console.log(items);
  console.log(datos);
  return (
    <>
      <Presentacion />
      <Container className="itemlistcontainer">
        <ItemList
          className="itemlist"
          items={items.map((item) => ({
            ...item,
            textButton: "Ver detalle",
            onItemClicked: () => navigate(`/item-detail/${item.id}`),
          }))}
        />
      </Container>
    </>
  );
};

export { ItemListContainer };
 */
/* 
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getProducts, getProductsByCategory, categories } from "../../tmp/data";
import { ItemList } from "../../components/common";
import { Presentacion } from "../inicio/presentacion";
import datos from "../../tmp/data.json";
import "./ItemList.css";

const ItemListContainer = () => {
  const { catId } = useParams();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (catId) {
      getProductsByCategory(catId).then((products) => {
        setItems(products);
      });
    } else {
      getProducts().then((products) => {
        setItems(products);
      });
    }
  }, [catId]);

  console.log(items);
  console.log(datos);
  return (
    <>
      <Presentacion />
      <Container className="itemlistcontainer">
        <div>
          <h3>Categorías:</h3>
          <div className="button-container">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`/category/${category.id}`}
                className={`button-link ${
                  category.id === "Alimentos para perros"
                    ? "perros-link"
                    : "gatos-link"
                }`}
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>

        <ItemList
          className="itemlist"
          items={items.map((item) => ({
            ...item,
            textButton: "Ver detalle",
            onItemClicked: () => navigate(`/item-detail/${item.id}`),
          }))}
        />
      </Container>
    </>
  );
};

export { ItemListContainer };
 */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getProducts, getProductsByCategory, categories } from "../../tmp/data";
import { ItemList } from "../../components/common";
import { Presentacion } from "../inicio/presentacion";
import datos from "../../tmp/data.json";

import "./ItemList.css";

const ItemListContainer = () => {
  const { catId } = useParams();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [showAllItems, setShowAllItems] = useState(true);

  useEffect(() => {
    if (catId && showAllItems === false) {
      getProductsByCategory(catId).then((products) => {
        setItems(products);
      });
    } else {
      getProducts().then((products) => {
        setItems(products);
      });
    }
  }, [catId, showAllItems]);

  const handleShowAllItems = () => {
    setShowAllItems(true);
    navigate("/");
  };

  const handleCategoryClick = (categoryId) => {
    setShowAllItems(false);
    navigate(`/category/${categoryId}`);
  };

  console.log(items);
  console.log(datos);
  return (
    <>
      <Presentacion />
      <Container className="itemlistcontainer">
        <div>
          <h3>Categorías:</h3>
          <div className="category-buttons">
            <button
              className={`category-link ${catId === "" ? "active" : ""}`}
              onClick={handleShowAllItems}
            >
              Mostrar Todos
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-link ${
                  catId === category.id ? "active" : ""
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <ItemList
          className="itemlist"
          items={items.map((item) => ({
            ...item,
            textButton: "Ver detalle",
            onItemClicked: () => navigate(`/item-detail/${item.id}`),
          }))}
        />
      </Container>
    </>
  );
};

export { ItemListContainer };
