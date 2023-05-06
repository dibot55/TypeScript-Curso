// Boolean
(() => {
  let isEnabled = true; // Inplicita
  let isNew : boolean = false; // Explicita
  console.log("isNew", isNew);
  isNew=true;  // Boolean
  console.log("isNew", isNew);

  const random = Math.random(); // Number
  console.log("random", random);

  isNew = random >= 0.5 ? true : false; //  Solo puede retornar booleanos no strings ni numbers
  console.log(">=0.5?", isNew);

  // NO USAR Boolean
  const isActive:Boolean = true; // Boolean
  const isActive2:boolean = true; // boolean
})();
