/* import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemById } from "../../services/Itens";
import { ItemDetail } from "../../components/common/item-detail";
import { ItemCount } from "../../components/item-count/itemcount";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const [quantityAdded, setQuantityAdded] = useState(0);
  const handleOnadd = (quantity) => {
    setQuantityAdded(quantity);
  };

  const item = {
    id,
    precio,
  };

  addItem(item, quantity);

  useEffect(() => {
    getItemById(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  const handleAddToCart = (quantity) => {
    console.log("Quantidade adicionada:", quantity);
  };

  if (!item) return <div>Error</div>;

  return (
    <>
      <div>
        <ItemDetail {...item} />
        {/*  <ItemCount initial={1} stock={10} onAdd={handleAddToCart} /> */
/*      }
      </div>

      <div>
        {quantityAdded > 0 ? (
          <Link to="/cart" className="option">
            Terminar compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={10} onAdd={handleAddToCart} />
        )}
      </div>
    </>
  );
};

export { ItemDetailContainer };
  */

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemById } from "../../services/Itens";
import { ItemDetail } from "../../components/common/item-detail";
import { ItemCount } from "../../components/item-count/itemcount";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantityAdded, setQuantityAdded] = useState(0);

  const handleOnadd = (quantity) => {
    setQuantityAdded(quantity);
  };

  useEffect(() => {
    getItemById(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  const handleAddToCart = (quantity) => {
    console.log("Quantidade adicionada:", quantity);
  };

  if (!item) return <div>Error</div>;

  return (
    <>
      <div>
        <ItemDetail {...item} />
      </div>

      <div>
        {quantityAdded > 0 ? (
          <Link to="/cart" className="option">
            Terminar compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={10} onAdd={handleAddToCart} />
        )}
      </div>
    </>
  );
};

export { ItemDetailContainer };
