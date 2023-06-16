import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
/* import { useParams } from "react-router-dom"; */
/* import { getItenById, getItens } from "../../services"; */
import { getItems, getItemById } from "../../services/Itens";
import { ItemDetail } from "../../components/common/item-detail";
import { Item } from "../../components/common/Item";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [Items, setItems] = useState();

  useEffect(() => {
    getItemById(id).then((data) => {
      setItems(data);
    });
  }, []);

  if (!Item) return <div>Carregando...</div>;

  return (
    <div>
      <ItemDetail {...Item} />
    </div>
  );
};

export { ItemDetailContainer };
