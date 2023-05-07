// ANY literalmente volvemos a JS
(() => {
  let myDinamicVariable:any;
  myDinamicVariable = 123;
  myDinamicVariable = "Hello World";
  myDinamicVariable = true;
  myDinamicVariable = {};
  myDinamicVariable = () => {};
  myDinamicVariable = [];
  // myDinamicVariable. <-- No hay autocompletado por que literalmente puede funcionar cualquier cosa

  myDinamicVariable = "HELLO GUYS"

  // Tratar Any como String (Sin TIPARLO) CAS
  const rta = (myDinamicVariable as string).toLowerCase();
  console.log(rta);

  myDinamicVariable = 1234;

  // Tratar Any como Number
  const rtb = (myDinamicVariable as number) * 2; // Primera Forma () = Primitivos
  const rtb2 = (<number>myDinamicVariable) * 2; // Segunda Forma <> = Genericos

})();
