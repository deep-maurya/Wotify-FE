import axiosInstance from '@/shared/libs/axios';
import { createWalletPayload, createWalletResponse } from './wallet.types';

export const walletApi = {
  createWallet: async (
    payload: createWalletPayload
  ): Promise<createWalletResponse> => {
    const { data } = await axiosInstance.post('/wallets', payload);
    return data;
  },

  getWallets: async (): Promise<createWalletResponse[]> => {
    const { data } = await axiosInstance.get('/wallets');
    return data;
  },
};
