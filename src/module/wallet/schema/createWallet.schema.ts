import { z } from 'zod';
export const createWalletSchema = z.object({
  label: z.string().min(2, { message: 'Label must be at least 2 characters.' }),
  wallet_address: z.string(),
  chain: z.enum(['ethereum', 'solana', 'tron', 'polygon'], {
    message: 'Chain must be one of: ethereum, solana, tron, polygon.',
  }),
});

export type CreateWalletFormValues = z.infer<typeof createWalletSchema>;
