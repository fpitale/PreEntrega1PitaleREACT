import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
/* import { useParams } from "react-router-dom"; */
/* import { getItenById, getItens } from "../../services"; */
import { getItens, getItenById } from "../../services/Itens";
import { ItemDetail } from "../../components/common/item-detail";
import { Item } from "../../components/common/Item";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [Itens, setItens] = useState();

  useEffect(() => {
    getItenById(id).then((data) => {
      setItens(data);
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
