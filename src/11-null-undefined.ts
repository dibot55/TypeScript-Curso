// Diferencia entre Null y Undefined
(() => {

  //let mynumber: number = undefined;
  //let mystring: string = null;  --> undefined y null no entran dentro los conjuntos de datos. Son de tipo ANY.

  // Ejemplo de uso del null
  type data = number | null;

  const cargaTemplete = (r: data) => {
    if (r) {
      return r.toFixed();
    } else {
      return console.log("Algo fallo al cargar el componente")
    };
  };

  cargaTemplete(null);

  // usando operador ternario ?
  const cargaTempleteV2 = (r: data) => {
    let hola = "Hola";
    hola += r?.toFixed() || "NULL"; // || = OR
  };

})();
