// Numbers
(()=>{
  let productPrice = 100;
  productPrice = 12;
  console.log(productPrice)

  let costumerAge: number = 28;
  // costumerAge = costumerAge + "1"; //Error
  costumerAge = costumerAge + 1;
  console.log("costumerAge", costumerAge);

  // Definir una variable no Inicializada
  let productInStock: number;
  // console.log("productInStock", productInStock); //El motor de inferencia de TypeScript detecta que no has usado la variable y da un UNDEFINED

  // let discount = parseInt("asd"); // discount = NAN not a number
  let discount = parseInt("123"); // discount = 123
  console.log("discount",  discount);

  // Hexadecimal [0x]
  let hex = 0xf00d; // Number
  console.log("hex", hex);

  // Binarios [0b]
  let bin = 0b1010; // Number
  console.log("bin", bin);

  // Number vs number
  let productPrice2: Number = 10; // Objeto de numero
  let productInStock2: number = 10; // Variable number

})();
