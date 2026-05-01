import { Link } from "react-router-dom";

export const Logo = ({ to = "/" }: { to?: string }) => (
  <Link to={to} className="inline-flex items-center gap-2 group">
    <span className="grid h-7 w-7 place-items-center rounded-md bg-foreground text-background text-[13px] font-semibold">
      W
    </span>
    <span className="font-serif text-2xl leading-none tracking-tight">Wotify</span>
  </Link>
);
