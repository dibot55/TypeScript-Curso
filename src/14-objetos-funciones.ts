// Objetos en Funciones como parametros
(() => {
  // Funcion regular
  const loginV1 = (email: string, password: string) => {
    console.log(email, password);
  };

  loginV1("tzirw@example.com", "123456");

  // Encapsulando parametros con objetos
  const loginV2 = (user: { email: string; password: number }) => {
    console.log(user);
  };

  loginV2({
    email: "tzirw@example.com",
    password: 123456
  });

  // Otro ejemplo
  type sizes = "C" | "M" | "L" | "XL"
  const productos: any[] = []; // Solo por esta ocacion hacemos malas practicas

  const addProducto = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: sizes
  }) => {
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
