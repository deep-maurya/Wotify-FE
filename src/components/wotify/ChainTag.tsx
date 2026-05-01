import { CHAINS, type ChainKey } from "@/lib/wotify";

export const ChainTag = ({ chain }: { chain: ChainKey }) => {
  const c = CHAINS.find((x) => x.key === chain)!;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2 py-0.5 text-xs">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
      <span className="font-medium">{c.name}</span>
    </span>
  );
};
