import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { truncate } from "@/lib/wotify";
import { cn } from "@/lib/utils";

export const Address = ({ value, className }: { value: string; className?: string }) => {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  };
  return (
    <button
      onClick={onCopy}
      className={cn(
        "group inline-flex items-center gap-2 font-mono text-xs text-foreground/80 hover:text-foreground transition-colors",
        className,
      )}
      title={value}
    >
      <span>{truncate(value)}</span>
      {copied ? (
        <Check className="h-3.5 w-3.5 text-success" />
      ) : (
        <Copy className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100" />
      )}
    </button>
  );
};
