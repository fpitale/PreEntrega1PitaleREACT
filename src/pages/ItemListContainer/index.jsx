/* import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getItems } from "../../services/Items";
import { ItemList } from "../../components/common";
import { Item } from "../../components/common/Item";
import { getProductsByCategory, getProduct, getProducts } from "../tmp";
import { Navegacion } from "../../components/barra-navegacion/nav";
import { Presentacion } from "../inicio/presentacion";

const ItemListContainer = () => {
  const { catId } = useParams();
  const navigate = useNavigate();

  const [itens, setItens] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getItens(catId).then((data) => {
      setItens(data);
    });
  }, [catId]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);
 



const ItemListContainer = () => {
  const { catId } = useParams();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);

  useEffect(() => {
    // ¿Hay una categoría?
    if (catId) {
      // Llamamos a la función y le pasamos el parámetro. Con este dato, la función puede comparar entre la categoría de los productos y el parámetro de la URL.
      getItemsByCategory(catId).then((products) => {
        setItems(products);
      });
    } else {
      // Si no hay categoría, por ejemplo, en la ruta home '/', llamamos a la función que nos trae todos los productos.
      getItems().then((products) => {
        setItems(products);
      });
    }
    // En el array de dependencias, ponemos el parámetro para que renderice cada vez que ese parámetro cambie.
  }, [catId]);

  return (
    <>
      <Presentacion />
      <Container>
        <ItemList
          items={items.map((item) => ({
            ...item,
            textButton: "Ver detalle",
            onItemClicked: () => navigate(`/item-detail/${item.id}`),
          }))}
        />
        <Navegacion />
      </Container>
    </>
  );
};

export { ItemListContainer };
 
 
/* 
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
/* import { getItems, getItemsByCategory } from "../../services/Items"; */
/* 

import { ItemList } from "../../components/common";
import { Navegacion } from "../../components/barra-navegacion/nav";
import { Presentacion } from "../inicio/presentacion";
import { getProducts, getProductsByCategory, getProduct } from "../../tmp/data";

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

  return (
    <>
      <Presentacion />
      <Container>
        <ItemList
          items={items.map((item) => ({
            ...item,
            textButton: "Ver detalle",
            onItemClicked: () => navigate(`/item-detail/${item.id}`),
          }))}
        />
        <Navegacion />
      </Container>
    </>
  );
};

export { ItemListContainer };
 */

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getProducts, getProductsByCategory, getProduct } from "../../tmp/data"; // Corregir la importación aquí
import { ItemList } from "../../components/common";
import { Navegacion } from "../../components/barra-navegacion/nav";
import { Presentacion } from "../inicio/presentacion";

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

  return (
    <>
      <Presentacion />
      <Container>
        <ItemList
          items={items.map((item) => ({
            ...item,
            textButton: "Ver detalle",
            onItemClicked: () => navigate(`/item-detail/${item.id}`),
          }))}
        />
        <Navegacion />
      </Container>
    </>
  );
};

export { ItemListContainer };
