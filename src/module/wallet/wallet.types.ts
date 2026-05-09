export interface createWalletPayload {
  name: string;
  address: string;
  chain: string;
}

export interface createWalletResponse {
  id: string;
  address: string;
  chain: string;
  label: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
