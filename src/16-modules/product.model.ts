
// Modelos de datos (TIPADO)
export type sizes = "C" | "M" | "L" | "XL";

export type productObject = {
  name: string, //click en la propiedad y luego preciona F2!!!!!! + ENTER
  createdAt: Date,
  stock: number,
  size?: sizes
};
