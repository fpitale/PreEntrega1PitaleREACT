import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getProducts, getProductsByCategory, categories } from "../../tmp/data";
import { ItemList } from "../../components/common";
import { Presentacion } from "../inicio/presentacion";
/* import datos from "../../tmp/data.json"; */

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

  useEffect(() => {}, [items]);

  const handleShowAllItems = () => {
    setShowAllItems(true);
    navigate("/");
  };

  const handleCategoryClick = (categoryId) => {
    setShowAllItems(false);
    navigate(`/category/${categoryId}`);
  };

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
          items={items.map((item) => ({
            ...item,
            textButton: "Ver detalhes",
            onItemClicked: () => navigate(`/item-detail/${item.id}`),
          }))}
        />
      </Container>
    </>
  );
};

export { ItemListContainer };
