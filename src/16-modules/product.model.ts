
// Modelos de datos (TIPADO)
export type sizes = "C" | "M" | "L" | "XL";

export type productObject = {
  name: string,
  createdAt: Date,
  stock: number,
  size?: sizes
};
