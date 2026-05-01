import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/wotify/Logo";
import { ThemeToggle } from "@/components/wotify/ThemeToggle";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80),
  email: z.string().trim().email("Enter a valid email").max(255),
  password: z.string().min(8, "Password must be at least 8 characters").max(120),
});

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Welcome to Wotify", description: "Your account is ready." });
      navigate("/dashboard");
    }, 600);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      <div className="flex flex-col">
        <div className="h-16 px-6 md:px-10 flex items-center justify-between border-b border-border">
          <Logo />
          <ThemeToggle />
        </div>
        <div className="flex-1 flex items-center px-6 md:px-10 py-16">
          <div className="w-full max-w-md mx-auto stagger">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Create account</p>
            <h1 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">
              Watch wallets in seconds.
            </h1>
            <p className="mt-3 text-muted-foreground">Free forever for the first 5 wallets.</p>

            <form onSubmit={onSubmit} className="mt-10 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Cooper"
                  className="h-11"
                />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                  className="h-11"
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="At least 8 characters"
                  className="h-11"
                />
                {errors.password && <p className="text-xs text-destructive">{errors.password}</p>}
              </div>

              <Button type="submit" disabled={loading} className="w-full h-11 rounded-full">
                {loading ? "Creating account…" : (<>Create account <ArrowRight className="ml-1 h-4 w-4" /></>)}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Already have an account?{" "}
                <Link to="/dashboard" className="text-foreground underline-offset-4 hover:underline">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <aside className="hidden lg:flex border-l border-border bg-secondary/40 items-center justify-center p-16">
        <div className="max-w-md">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs">
            <span className="live-dot bg-success" />
            <span className="font-mono">Trusted by 4,200+ operators</span>
          </span>
          <blockquote className="font-serif text-3xl md:text-4xl leading-tight mt-8">
            “Wotify replaced three internal scripts and a Slack bot. Our treasury team finally sleeps at night.”
          </blockquote>
          <div className="mt-8 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-background text-sm font-medium">
              MR
            </span>
            <div>
              <div className="text-sm font-medium">Mara Reynolds</div>
              <div className="text-xs text-muted-foreground font-mono">Head of Treasury, Northwind Capital</div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Register;
