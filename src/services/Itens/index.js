 import { Item } from '../../components/common'; 
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

const updateIten = async (iten) => {}

const deleteIten = async (id) => {}

const createIten = async (itens) => {}

export { getItens, getItenById };
