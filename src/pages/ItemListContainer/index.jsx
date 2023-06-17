import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getProducts, getProductsByCategory, categories } from "../../tmp/data";
import { ItemList } from "../../components/common";
import { Presentacion } from "../inicio/presentacion";
import "./itemListCont.css";

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
