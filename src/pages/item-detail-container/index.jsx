import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItems, getItemById } from "../../services/Itens";
import { ItemDetail } from "../../components/common/item-detail";
import { ItemCount } from "../../components/item-count/itemcount";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItemById(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  const handleAddToCart = (quantity) => {
    console.log("Quantidade adicionada:", quantity);
    // Aqui você pode adicionar a lógica para adicionar o item ao carrinho
  };

  if (!item) return <div>Carregando...</div>;

  return (
    <div>
      <ItemDetail {...item} />
      <ItemCount initial={1} stock={10} onAdd={handleAddToCart} />
    </div>
  );
};

export { ItemDetailContainer };
