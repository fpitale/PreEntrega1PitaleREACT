import { categories } from '../../tmp/data';

const getCategories = async () => {
  return new Promise((resolve, reject) => {
    resolve(categories);
  });
};

const getCategoryById = async (id) => {
  return new Promise((resolve, reject) => {
    resolve(categories.find((category) => category.id === id));
  });
};

const updateCategory = async (category) => {}

const deleteCategory = async (id) => {}

const createCategory = async (category) => {}

export { getCategories, getCategoryById };
