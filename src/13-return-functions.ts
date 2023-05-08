// Manejo de RETURNS en TypeScript
(()=>{
// ---------> Tipar Explicitamente el resultado de una función.

  // Funcion normal que retorna cualquier cosa por inferencia
  const calcTotal = (prices: number[]) => {
    let total = 0;
    prices.forEach((item)=>{
      total += item;
    });
    return total; // Retorna Number por inferencia
  };

  const result = calcTotal([1,2,3,4,5,6,7,8,9]);
  console.log(result);

  // Funcion con RETURN Explicito
  const calcTotalV2 = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item)=>{
      total += item;
    });
    return total.toString(); // Retorna String por que asi se lo indicamos y lo parseamos para eso
  };

  const resultV2 = calcTotal([1,2,3,4,5,6,7,8,9]);
  console.log(resultV2);

  // Funciones sin RETORNO --> VOID o Funciones de efecto secundario
  // Definida de forma implicita
  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`El total es: ${rta}`);
  };  // NO RETORNA NADA Solo llama otra función.

  const rta = printTotal([1,2,3,4,5,6]); // VOID
  console.log(rta);

  // Definida de forma Explicita
  const printTotalV3 = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es: ${rta}`);
  };

})();
