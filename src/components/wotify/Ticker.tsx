import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

type TickerItem = { symbol: string; price: string; change: number };

const ITEMS: TickerItem[] = [
  { symbol: "ETH",   price: "$3,482.10", change: 2.41 },
  { symbol: "SOL",   price: "$214.55",   change: 5.92 },
  { symbol: "BNB",   price: "$612.80",   change: -1.14 },
  { symbol: "MATIC", price: "$0.87",     change: 3.06 },
  { symbol: "ARB",   price: "$1.42",     change: -2.18 },
  { symbol: "BASE",  price: "$1.00",     change: 0.04 },
  { symbol: "BTC",   price: "$94,210",   change: 1.88 },
  { symbol: "USDC",  price: "$1.00",     change: 0.01 },
  { symbol: "OP",    price: "$2.34",     change: -0.62 },
  { symbol: "AVAX",  price: "$38.92",    change: 4.10 },
];

const Row = ({ item }: { item: TickerItem }) => {
  const up = item.change >= 0;
  return (
    <span className="inline-flex items-center gap-2 px-6 text-sm whitespace-nowrap">
      <span className="font-semibold text-foreground">{item.symbol}</span>
      <span className="font-mono text-muted-foreground">{item.price}</span>
      <span className={cn("inline-flex items-center gap-0.5 font-mono text-xs", up ? "text-positive" : "text-negative")}>
        {up ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
        {Math.abs(item.change).toFixed(2)}%
      </span>
      <span className="text-muted-foreground/50">·</span>
    </span>
  );
};

export const Ticker = () => {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-border bg-surface overflow-hidden py-3">
      <div className="marquee">
        {doubled.map((item, i) => (
          <Row key={i} item={item} />
        ))}
      </div>
    </div>
  );
};
