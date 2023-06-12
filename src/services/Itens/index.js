import { itens } from '../../tmp/data';

const getItens = async () => {
  return new Promise((resolve, reject) => {
    resolve(itens);
  });
};

const getItenById = async (id) => {
  return new Promise((resolve, reject) => {
    resolve(itens.find((iten) => iten.id === id));
  });
};

const updateIten = async (iten) => {}

const deleteIten = async (id) => {}

const createIten = async (itens) => {}

export { getItens, getItenById };
