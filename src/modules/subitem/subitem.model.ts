export interface SubItem {
  id: number;
  itemId: number;
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
