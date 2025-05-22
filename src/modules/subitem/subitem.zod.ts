import { z } from "zod";

export const subitemInputSchema = z.object({
  sku_code: z.string().min(1, "SKU code is required"),
    name: z.string().min(1, "Subitem name is required"),
    unit: z.enum(["PCS", "KG", "YARD", "LITER", "BOX"]),
    description: z.string().nullable().optional(),
    price: z.number().positive("Price must be positive"),
    itemId: z.number().positive("Item ID must be positive"),
    isActive: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
});
export type SubitemInput = z.infer<typeof subitemInputSchema>;