import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createWalletPayload, createWalletResponse } from './wallet.types';
import { walletApi } from './wallet.api';
import { queryKeys } from '@/shared/config/Querykeys';

export const useWalletRegisterMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<createWalletResponse, Error, createWalletPayload>({
    mutationFn: walletApi.createWallet,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.wallet.getAll() });
    },
  });
};

export const useGetAllWalletsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<createWalletResponse[], Error>({
    mutationFn: walletApi.getWallets,
    onSuccess: (data) => {
      queryClient.setQueryData(queryKeys.wallet.getAll(), data);
    },
  });
};
