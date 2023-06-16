import { items } from '../../tmp/data';

const getItems = async (catId) => {
  return new Promise((resolve, reject) => {
    resolve(items.filter((Item) => Item.categoryId === catId));
  });
};

const getItemById = async (id) => {
  return new Promise((resolve, reject) => {
    resolve(items.find((item) => item.id === id));
  });
};



export { getItems, getItemById };