
import { itens } from '../../tmp/data';

const getItens = async (catId) => {
  return new Promise((resolve, reject) => {
    resolve(itens.filter((Item) => Item.categoryId === catId));
  });
};

const getItenById = async (id) => {
  return new Promise((resolve, reject) => {
    resolve(itens.find((item) => item.id === id));
  });
};



export { getItens, getItenById };
