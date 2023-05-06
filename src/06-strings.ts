// Strings
(() => {
  let productTitle = "My product is amazing"; // Implicita (inferida por ts)
  let productTitle2:string = "My product is explicit and amazing"; // Explicita

  productTitle = 'My Amazin product changed beacuse is string';

  // Cuando usar "" o '' o ``
  let personaSay = "I'm a beautiful and handsome :']" // Cuando queremos ocupar la comilla simple, no puedes escribir en otra linea
  let personaDescription = 'Im backend Developer' // No puedes usar ' ni escribir en otra linea
  let personaTotal =
  `
  Persona Dice: ${personaSay}
  Descripcion: ${personaDescription}
  `; // Cuando quieres concatenar algo y escribir en mas lineas
  console.log("personatTotal: ",personaTotal);

  // NO usar String
  let productTitle3:String = "My product is amazing"; // String not string, use string
})();
