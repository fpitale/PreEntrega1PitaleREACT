import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {  getItenById } from '../../services/Itens';
import {ItemDetail} from '../../components/common/item-detail';


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    getItenById(id).then((data) => {
      setItem(data);
    });
  }, []);

  if (!item) return <div>Carregando...</div>;

  return (
    <div>
      <ItemDetail
        id={item.id}
        name={item.name}
        description={item.description}
        categoryId={item.categoryId}
        precio={item.precio}
      />
    </div>
  );
};

export {ItemDetailContainer};

