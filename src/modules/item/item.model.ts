// Define TypeScript interfaces for Item and SubItem
export interface Item {
  id: number;
  skuCode: string;
  name: string;
  unit: string;
  description: string | null;
  price: number;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
