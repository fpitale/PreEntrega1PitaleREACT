import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getItens } from "../../services/Itens";
import { ItemList } from "../../components/common";
import { Item } from "../../components/common/Item";
import { getCategories } from "../../services/categories";
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

  return (
    <>
      {<Presentacion />}
      <Container>
        <ItemList
          itens={itens.map((item) => ({
            ...item,
            textButton: "Ver detalle",
            onItemClicked: () => navigate(`/item-detail/${item.id}`),
          }))}
        />
        <Navegacion categories={categories} />
      </Container>
    </>
  );
};

export { ItemListContainer };
