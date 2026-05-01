import { cn } from "@/lib/utils";
import type { EventStatus } from "@/lib/wotify";

const map: Record<EventStatus, { label: string; dot: string; text: string; bg: string; border: string }> = {
  confirmed: {
    label: "Confirmed",
    dot: "bg-success",
    text: "text-success",
    bg: "bg-success/10",
    border: "border-success/20",
  },
  pending: {
    label: "Pending",
    dot: "bg-warning",
    text: "text-warning",
    bg: "bg-warning/10",
    border: "border-warning/20",
  },
  failed: {
    label: "Failed",
    dot: "bg-destructive",
    text: "text-destructive",
    bg: "bg-destructive/10",
    border: "border-destructive/20",
  },
};

export const StatusBadge = ({ status, live = false }: { status: EventStatus; live?: boolean }) => {
  const s = map[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        s.bg,
        s.text,
        s.border,
      )}
    >
      <span className={cn("relative inline-flex h-1.5 w-1.5 rounded-full", s.dot)}>
        {live && status === "pending" && (
          <span className={cn("absolute inset-0 rounded-full animate-ping opacity-75", s.dot)} />
        )}
      </span>
      {s.label}
    </span>
  );
};
