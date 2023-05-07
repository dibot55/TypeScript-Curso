// Unir tipos de datos
(() => {
  // variables con union types
  let myUserID: string | number; // Puede ser string y number
  myUserID= 123213;
  myUserID = 'aasgg';

  // Propiedades con union types
  function saludar (text: string | number) {
    if(typeof text === "string"){
      return console.log(`string: ${text.toLowerCase()}`);
    } else {
      return console.log(`number: ${text.toFixed(2)}`);
    }
  };
  saludar(123213.24235423435624234234325215); // 123213.24
  saludar('ADFfadsadfwewAFASFWQ');  // en minuscula

})();
