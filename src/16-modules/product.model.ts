
// Modelos de datos (TIPADO)
export type sizes = "C" | "M" | "L" | "XL";

export type productObject = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: sizes
};
