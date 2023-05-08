import { productObject } from "./product.model";

// Metodos
export const productos: productObject[] = [];

export const addProducto = (data: productObject) => {
  productos.push(data)
};

export const calcStock = ():number => {
  let total = 0;
  productos.forEach((item) => {
    total += item.stock;
  });
  return total;
};
