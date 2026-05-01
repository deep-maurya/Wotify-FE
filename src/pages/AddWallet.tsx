import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CHAINS, type ChainKey } from "@/lib/wotify";
import { toast } from "@/hooks/use-toast";

const AddWallet = () => {
  const navigate = useNavigate();
  const [chain, setChain] = useState<ChainKey>("ethereum");
  const [address, setAddress] = useState("");
  const [label, setLabel] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = address.trim();
    if (trimmed.length < 20 || trimmed.length > 80) {
      setErr("Enter a valid wallet address.");
      return;
    }
    setErr(null);
    toast({ title: "Wallet added", description: "We'll start watching activity instantly." });
    navigate("/dashboard");
  };

  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">New wallet</p>
      <h1 className="font-serif text-4xl md:text-5xl mt-2 leading-tight">Add a wallet to watch.</h1>
      <p className="mt-3 text-muted-foreground">
        Paste any public address. We'll monitor on-chain activity and notify you in real time.
      </p>

      <form onSubmit={onSubmit} className="mt-10 space-y-6 stagger">
        <div className="space-y-2">
          <Label>Blockchain</Label>
          <Select value={chain} onValueChange={(v) => setChain(v as ChainKey)}>
            <SelectTrigger className="h-11">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CHAINS.map((c) => (
                <SelectItem key={c.key} value={c.key}>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                    <span>{c.name}</span>
                    <span className="text-xs text-muted-foreground font-mono">· {c.symbol}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Wallet address</Label>
          <Input
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="0x… or solana base58 address"
            className="h-11 font-mono text-sm"
          />
          {err && <p className="text-xs text-destructive">{err}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="label">Label (optional)</Label>
          <Input
            id="label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="e.g. Treasury, Trading desk"
            maxLength={60}
            className="h-11"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <Button type="submit" className="rounded-full h-11 px-6">
            Start watching <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
          <Button type="button" variant="outline" className="rounded-full h-11 px-6" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddWallet;
