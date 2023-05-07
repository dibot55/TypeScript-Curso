// Alias
(() => {

  // SIN ALIAS
  let usrIdNoAlias: string | number | boolean;

  function saludar (usrId: string | number | boolean){
    if(typeof usrId === "string"){
      console.log("Hola mundo");
    }
  };

  // ¿Como puedo definir un solo tipo que avarque string, number y boolean?
  // ALIAS type
  type UserID = string | number | boolean;

  let usrIdAlias: UserID;

  function saludarConAlias (usrId: UserID){
    if(typeof usrId === "number"){
      console.log(12454);
    }
  }

  // Literal types

  // SIN Literal Types
  let shirtSize: string;
  shirtSize = "M";
  shirtSize = "L";
  shirtSize = "XL";
  shirtSize = "SUPER LARGE SIZE CAR!!!";

  // CON Literal Types
  let bluzeSize: "M" | "XL" | "L"; // Solo acepta M XL y L..... NADA MAS!!!

  // Literal types con alias
  type sizeWear = "M" | "XL"  | "L";

  let shortsSize: sizeWear;

  function saludocamarada(userID: UserID , size: sizeWear){
    if(typeof userID === "string"){
      console.log(":0");
    }
  }

  saludocamarada(1234134, "M");  //  Te auto completa las opciones :0

})();
