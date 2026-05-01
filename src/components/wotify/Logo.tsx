import { Link } from "react-router-dom";

export const Logo = ({ to = "/" }: { to?: string }) => (
  <Link to={to} className="inline-flex items-center gap-1.5 group">
    <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
      W
    </span>
    <span className="text-2xl font-semibold tracking-tight">
      wotify<span className="text-accent-foreground inline-block ml-0.5">
        <span className="inline-block h-2 w-2 rounded-full bg-accent align-middle" />
      </span>
    </span>
  </Link>
);
