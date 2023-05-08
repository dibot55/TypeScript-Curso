import { addProducto, calcStock, productos } from "./product.service";

addProducto({
  title: "Eri",
  createdAt: new Date(),
  stock: 1,
  size: "C"
});

addProducto({
  title: "Yey",
  createdAt: new Date(),
  stock: 1,
  size: "L"
})

console.log(productos);

const total = calcStock();
console.log("stock: " + total);
