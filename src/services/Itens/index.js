import { items } from '../../tmp/data';

const getItems = async (catId) => {
  return new Promise((resolve) => {
    resolve(items.filter((Item) => Item.categoryId === catId));
  });
};

const getItemById = async (id) => {
  return new Promise((resolve) => {
    resolve(items.find((item) => item.id === parseInt(id)));
  });
};



export { getItems, getItemById };