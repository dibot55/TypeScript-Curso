// Fuciones
(()=>{
  // Funcion NORMAL
  // alias
  type sizeEpc = "M" | "L" | "XL" ;

  function createProduct ( // Parametros
    title: string,
    createdAt: Date, // Se puede asignar la fecha como una variable
    stock: number,
    size: sizeEpc
    ) {
      return  { // propiedades
        title: title,
        createdAt: createdAt,
        stock: stock,
        size: size
      }
  };

  const producto1 = createProduct("ropanais", new Date, 12, "M");
  console.log(producto1);

  // Arrow Functions
  const createProductV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: sizeEpc // ? es Opcional
  ) => {
    return{
      title: title,
      createdAt: createdAt,
      stock: stock,
      size: size

    }
  };

  const producto2 = createProductV2("ropachan", new Date, 1); // NO pide el 4 campo por que es opcional. Si no lo envias por defecto da UNDEFINED
  console.log(producto2);
})();
