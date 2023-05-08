import { addProducto, calcStock, productos } from "./product.service";

addProducto({
  name: "Eri",
  createdAt: new Date(),
  stock: 1,
  size: "C"
});

addProducto({
  name: "Yey",
  createdAt: new Date(),
  stock: 1,
  size: "L"
})

console.log(productos);

const total = calcStock();
console.log("stock: " + total);
