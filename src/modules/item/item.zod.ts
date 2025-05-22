import { z } from 'zod';

// Adjust the enum values to match your Unit enum in the backend
export const itemInputSchema = z.object({
  sku_code: z.string().min(1, 'SKU code is required'),
  name: z.string().min(1, 'Item name is required'),
  unit: z.enum(['PCS', 'BOX', 'KG', 'YARD', 'LITER', 'METER']),
  description: z.string().nullable().optional(),
  price: z.number().positive('Price must be positive'),
});

export type ItemInput = z.infer<typeof itemInputSchema>;
