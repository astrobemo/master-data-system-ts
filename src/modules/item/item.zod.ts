import { z } from 'zod';

// Adjust the enum values to match your Unit enum in the backend
export const itemInputSchema = z.object({
  skuCode: z.string().trim().min(1, 'SKU code is required'),
  name: z.string().trim().min(1, 'Item name is required'),
  unit: z.enum(['PCS', 'KG', 'YARD', 'LITER', 'BOX']),
  description: z.string().nullable().optional(),
  price: z.number().positive('Price must be positive'),
});

export type ItemInput = z.infer<typeof itemInputSchema>;
