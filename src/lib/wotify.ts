export type ChainKey = "ethereum" | "solana" | "bnb" | "polygon" | "arbitrum" | "base";

export const CHAINS: { key: ChainKey; name: string; symbol: string; color: string }[] = [
  { key: "ethereum", name: "Ethereum", symbol: "ETH", color: "#627EEA" },
  { key: "solana", name: "Solana", symbol: "SOL", color: "#9945FF" },
  { key: "bnb", name: "BNB Chain", symbol: "BNB", color: "#F0B90B" },
  { key: "polygon", name: "Polygon", symbol: "MATIC", color: "#8247E5" },
  { key: "arbitrum", name: "Arbitrum", symbol: "ARB", color: "#28A0F0" },
  { key: "base", name: "Base", symbol: "BASE", color: "#0052FF" },
];

export const truncate = (addr: string, head = 6, tail = 4) =>
  addr.length <= head + tail + 2 ? addr : `${addr.slice(0, head)}…${addr.slice(-tail)}`;

export type WalletItem = {
  id: string;
  label?: string;
  address: string;
  chain: ChainKey;
  addedAt: string;
};

export type EventStatus = "confirmed" | "pending" | "failed";
export type EventKind = "Transfer" | "Swap" | "Mint" | "Approval" | "Stake";

export type ActivityEvent = {
  id: string;
  walletAddress: string;
  chain: ChainKey;
  kind: EventKind;
  amount: string;
  asset: string;
  status: EventStatus;
  timestamp: string;
};

export const SAMPLE_WALLETS: WalletItem[] = [
  { id: "w1", label: "Treasury", address: "0x8aE2C4f2bD9C6d61b2A1Bf7C4e9D5a3b8C7e6F12", chain: "ethereum", addedAt: "2026-04-21" },
  { id: "w2", label: "Trading", address: "9xQeWv2pE7K4mN3rT8sZ1qF5bL6yU0vC3dHnJaP4MzX2", chain: "solana", addedAt: "2026-04-23" },
  { id: "w3", label: "DeFi vault", address: "0x4F46E58D9bD2C4f2bD9C6d61b2A1Bf7C4e9D5a3b", chain: "polygon", addedAt: "2026-04-28" },
];

export const SAMPLE_EVENTS: ActivityEvent[] = [
  { id: "e1", walletAddress: "0x8aE2C4f2bD9C6d61b2A1Bf7C4e9D5a3b8C7e6F12", chain: "ethereum", kind: "Transfer", amount: "1.250", asset: "ETH", status: "confirmed", timestamp: "2026-05-01 14:22" },
  { id: "e2", walletAddress: "9xQeWv2pE7K4mN3rT8sZ1qF5bL6yU0vC3dHnJaP4MzX2", chain: "solana", kind: "Swap", amount: "420.00", asset: "USDC → SOL", status: "confirmed", timestamp: "2026-05-01 13:58" },
  { id: "e3", walletAddress: "0x4F46E58D9bD2C4f2bD9C6d61b2A1Bf7C4e9D5a3b", chain: "polygon", kind: "Approval", amount: "—", asset: "USDT", status: "pending", timestamp: "2026-05-01 13:40" },
  { id: "e4", walletAddress: "0x8aE2C4f2bD9C6d61b2A1Bf7C4e9D5a3b8C7e6F12", chain: "ethereum", kind: "Stake", amount: "32.000", asset: "ETH", status: "confirmed", timestamp: "2026-05-01 11:05" },
  { id: "e5", walletAddress: "9xQeWv2pE7K4mN3rT8sZ1qF5bL6yU0vC3dHnJaP4MzX2", chain: "solana", kind: "Mint", amount: "1", asset: "Mad Lads #4821", status: "failed", timestamp: "2026-05-01 09:12" },
  { id: "e6", walletAddress: "0x4F46E58D9bD2C4f2bD9C6d61b2A1Bf7C4e9D5a3b", chain: "polygon", kind: "Transfer", amount: "5,000.00", asset: "USDC", status: "confirmed", timestamp: "2026-04-30 22:48" },
  { id: "e7", walletAddress: "0x8aE2C4f2bD9C6d61b2A1Bf7C4e9D5a3b8C7e6F12", chain: "ethereum", kind: "Swap", amount: "0.85", asset: "ETH → USDC", status: "confirmed", timestamp: "2026-04-30 18:30" },
];
