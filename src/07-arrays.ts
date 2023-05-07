(()=>{
  // Array SOLO de numeros
  let arregloNumberImplicit = [1,2,3,4,5,6];
  let arregloNumberExplicit:(number)[] = [1,2,3,4,5,6,7];

  // Array SOLO de Strings
  let arregloStringImplicit = ["a","b","c"];
  let arregloStringExplicit: (string)[] = ["a", "b", "c"];

  // Array de Mixtos
  let mixedImplicit = [1,"a",4,"b"];
  let mixedExplicit:(number | string | boolean | object)[] = [1,2,"c",1,"b","a","d",5,6,8, true, {}];

  // Arreglo Booleans
  let arregloBooleanImplicit = [true, false, true, false, true];
  let arregloBooleanExplicit: (boolean)[] = [true, false];

  // Arreglo de Objetos
  let arregloObjecImplicit = [{"kojima": "claroquece"}, {"año": 2, "listo": true, "funcion": {}}];
  let arregloObjecExplicit: (object)[] = [{"ready": false},{"name":"", "año": 123},{"name":"", "object": {}}];
  let arregloObjetosExplicitStringNumber: ({name:string, age:number})[] = [{"name":"", "age": 3}]; // Especificar formato

  //NO USAR Array<string | number>
})();
