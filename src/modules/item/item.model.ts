// Define TypeScript interfaces for Item and SubItem
export interface Item {
  id: number
  sku_code: string;
  name: string;
  unit: string;
  description?: string;
  price: number;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SubItem {
  id: number
  itemId: number;
  sku_code: string;
  name: string;
  unit: string;
  description?: string;
  price: number;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

// Define an enum for UnitType
export enum UnitType {
  PIECE = "piece",
  KILOGRAM = "kilogram",
  LITER = "liter",
  BOX = "box",
}

// Define a default unit type
export const DEFAULT_UNIT: UnitType = UnitType.PIECE;