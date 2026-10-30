export type MovementType = "in" | "out" | "adjustment";

export type Ingredient = {
  id: string;
  name: string;
  category: string;
  unit: string;
  minimum: number;
  openingStock: number;
  color: string;
};

export type Movement = {
  id: string;
  ingredientId: string;
  type: MovementType;
  quantity: number;
  note: string;
  createdAt: string;
};

export type InventoryState = { ingredients: Ingredient[]; movements: Movement[] };

const DAY = 86_400_000;

export const INITIAL_STATE: InventoryState = {
  ingredients: [
    { id: "eggs", name: "Telur ayam", category: "Bahan segar", unit: "butir", minimum: 30, openingStock: 0, color: "#e5b653" },
    { id: "sugar", name: "Gula pasir", category: "Bahan kering", unit: "kg", minimum: 2, openingStock: 2.5, color: "#8eaa8a" },
    { id: "flour", name: "Tepung terigu", category: "Bahan kering", unit: "kg", minimum: 2, openingStock: 3.7, color: "#c4956a" },
    { id: "chocolate", name: "Cokelat batang", category: "Bahan utama", unit: "kg", minimum: 1.5, openingStock: 2, color: "#745347" },
    { id: "cocoa", name: "Cokelat bubuk", category: "Bahan utama", unit: "kg", minimum: 0.5, openingStock: 1, color: "#9a7768" },
    { id: "oil", name: "Minyak goreng", category: "Bahan cair", unit: "liter", minimum: 1, openingStock: 1, color: "#d0a64d" },
    { id: "baking", name: "Baking powder", category: "Bahan tambahan", unit: "gram", minimum: 100, openingStock: 250, color: "#899bb0" },
  ],
  movements: [
    { id: "seed-1", ingredientId: "eggs", type: "in", quantity: 30, note: "Belanja mingguan", createdAt: new Date(Date.now() - DAY * 1.25).toISOString() },
    { id: "seed-2", ingredientId: "eggs", type: "out", quantity: 6, note: "Produksi brownies", createdAt: new Date(Date.now() - DAY * 0.9).toISOString() },
    { id: "seed-3", ingredientId: "sugar", type: "in", quantity: 2, note: "Belanja mingguan", createdAt: new Date(Date.now() - DAY * 2).toISOString() },
    { id: "seed-4", ingredientId: "chocolate", type: "out", quantity: 0.8, note: "Produksi brownies", createdAt: new Date(Date.now() - DAY * 0.5).toISOString() },
    { id: "seed-5", ingredientId: "flour", type: "out", quantity: 0.5, note: "Produksi brownies", createdAt: new Date(Date.now() - DAY * 2.5).toISOString() },
    { id: "seed-6", ingredientId: "oil", type: "in", quantity: 1, note: "Belanja mingguan", createdAt: new Date(Date.now() - DAY * 3).toISOString() },
    { id: "seed-7", ingredientId: "cocoa", type: "out", quantity: 0.2, note: "Produksi brownies", createdAt: new Date(Date.now() - DAY * 4).toISOString() },
  ],
};

export function getStock(ingredient: Ingredient, movements: Movement[]) {
  return movements.reduce((stock, movement) => {
    if (movement.ingredientId !== ingredient.id) return stock;
    return stock + (movement.type === "out" ? -movement.quantity : movement.quantity);
  }, ingredient.openingStock);
}

export function formatQuantity(value: number) {
  return new Intl.NumberFormat("id-ID", { maximumFractionDigits: 2 }).format(value);
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}
