// Objetos como tipos
(() => {
  type sizes = "C" | "M" | "L" | "XL"

  // Definir objetos como tipos
  type productObject = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: sizes
  };

  const productos: productObject[] = []; // BUENA PRACTICA
  // Es un array de objetos que cumplen con el tipado "producut object"

  //const productos: any[] = []; // MALA PRACTICA y ya no hay ANY

  const addProducto = (data: productObject) => {
    productos.push(data)
  };

  addProducto({
    title: "Eri",
    createdAt: new Date(),
    stock: 1,
    size: "C"
  });

  console.log(productos);

})();
