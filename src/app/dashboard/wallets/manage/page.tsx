'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Copy, Trash2, CheckCheck, Wallet, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CHAINS, type ChainKey } from '@/lib/wotify';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// ─── Types ────────────────────────────────────────────────────────────────────

type WalletStatus = 'active' | 'inactive';

interface WalletEntry {
  id: string;
  chain: ChainKey;
  address: string;
  label: string;
  status: WalletStatus;
  addedAt: string;
}

// ─── Mock data ────────────────────────────────────────────────────────────────

const MOCK_WALLETS: WalletEntry[] = [
  {
    id: '1',
    chain: 'ethereum',
    address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
    label: 'Treasury',
    status: 'active',
    addedAt: '2 days ago',
  },
  {
    id: '2',
    chain: 'solana',
    address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
    label: 'Trading desk',
    status: 'active',
    addedAt: '5 days ago',
  },
  {
    id: '3',
    chain: 'bnb',
    address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
    label: 'Cold storage',
    status: 'inactive',
    addedAt: '1 week ago',
  },
  {
    id: '4',
    chain: 'polygon',
    address: '0x8dFf5E27EA6b7AC08EbFdf9eB090F32ee9a30fcf',
    label: '',
    status: 'active',
    addedAt: '2 weeks ago',
  },
  {
    id: '5',
    chain: 'arbitrum',
    address: '0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed',
    label: 'Dev wallet',
    status: 'inactive',
    addedAt: '1 month ago',
  },
  {
    id: '6',
    chain: 'tron',
    address: 'TN9RRaXkCFtTXRso2GdTZxSxxwufzxLQPP',
    label: '',
    status: 'active',
    addedAt: '1 month ago',
  },
];

// ─── Toggle ───────────────────────────────────────────────────────────────────

function Toggle({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={onChange}
      className={cn(
        'relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent',
        'transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        enabled ? 'bg-foreground' : 'bg-muted'
      )}
    >
      <span
        className={cn(
          'inline-block h-4 w-4 rounded-full bg-background shadow transform transition-transform duration-200',
          enabled ? 'translate-x-4' : 'translate-x-0'
        )}
      />
    </button>
  );
}

// ─── Copy address ─────────────────────────────────────────────────────────────

function CopyAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const short = `${address.slice(0, 8)}…${address.slice(-6)}`;
  return (
    <button
      type="button"
      onClick={copy}
      title={address}
      className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors group"
    >
      <span>{short}</span>
      {copied ? (
        <CheckCheck className="h-3 w-3 text-foreground shrink-0" />
      ) : (
        <Copy className="h-3 w-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const ManageWallets = () => {
  const navigate = useRouter();
  const [wallets, setWallets] = useState<WalletEntry[]>(MOCK_WALLETS);
  const [search, setSearch] = useState('');

  const activeCount = wallets.filter((w) => w.status === 'active').length;

  const filtered = wallets.filter((w) => {
    const q = search.toLowerCase();
    return (
      w.address.toLowerCase().includes(q) ||
      w.label.toLowerCase().includes(q) ||
      w.chain.toLowerCase().includes(q)
    );
  });

  const handleToggle = (id: string) => {
    setWallets((prev) =>
      prev.map((w) =>
        w.id === id
          ? { ...w, status: w.status === 'active' ? 'inactive' : 'active' }
          : w
      )
    );
  };

  const handleDelete = (id: string) => {
    setWallets((prev) => prev.filter((w) => w.id !== id));
    toast({ title: 'Wallet removed', description: 'No longer being watched.' });
  };

  return (
    <div className="space-y-10">
      {/* ── Header ── */}
      <header className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Wallets
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2 leading-tight tracking-tight">
            Manage wallets.
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {activeCount} of {wallets.length} wallets actively monitored.
          </p>
        </div>
        <Link href="../wallets/new">
          <Button className="rounded-full h-11 px-5 bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            <Plus className="h-4 w-4" />
            Add wallet
          </Button>
        </Link>
      </header>

      {/* ── Card ── */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        {/* Card header */}
        <div className="px-6 py-4 border-b border-border bg-secondary/30 flex items-center gap-3">
          <span className="h-7 w-7 rounded-md bg-secondary flex items-center justify-center shrink-0">
            <Wallet className="h-3.5 w-3.5 text-muted-foreground" />
          </span>
          <div className="flex-1">
            <p className="text-sm font-medium">All wallets</p>
            <p className="text-xs text-muted-foreground">
              Toggle to pause monitoring · {activeCount} active ·{' '}
              {wallets.length - activeCount} paused
            </p>
          </div>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search…"
              className="h-8 pl-8 w-48 rounded-lg text-xs"
            />
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/20">
                <th className="px-6 py-2.5 text-left">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Wallet
                  </span>
                </th>
                <th className="px-4 py-2.5 text-left">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Address
                  </span>
                </th>
                <th className="px-4 py-2.5 text-left">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Chain
                  </span>
                </th>
                <th className="px-4 py-2.5 text-left">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Added
                  </span>
                </th>
                <th className="px-4 py-2.5 text-center">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Status
                  </span>
                </th>
                <th className="px-4 py-2.5 text-center">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Watch
                  </span>
                </th>
                <th className="px-6 py-2.5 text-right">
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Actions
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((wallet) => {
                  const chain = CHAINS.find((c) => c.key === wallet.chain);
                  if (!chain) return null;
                  const Logo = chain.logo;
                  const isActive = wallet.status === 'active';

                  return (
                    <tr
                      key={wallet.id}
                      className={cn(
                        'border-b border-border last:border-0 transition-colors hover:bg-muted/20',
                        !isActive && 'opacity-50'
                      )}
                    >
                      {/* Wallet label */}
                      <td className="px-6 py-3.5">
                        {wallet.label ? (
                          <span className="font-medium text-sm">
                            {wallet.label}
                          </span>
                        ) : (
                          <span className="text-xs text-muted-foreground italic">
                            No label
                          </span>
                        )}
                      </td>

                      {/* Address */}
                      <td className="px-4 py-3.5">
                        <CopyAddress address={wallet.address} />
                      </td>

                      {/* Chain */}
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-2">
                          <Logo className="h-4 w-4 shrink-0" />
                          <span className="text-xs font-mono text-muted-foreground">
                            {chain.symbol}
                          </span>
                        </div>
                      </td>

                      {/* Added */}
                      <td className="px-4 py-3.5">
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                          {wallet.addedAt}
                        </span>
                      </td>

                      {/* Status badge */}
                      <td className="px-4 py-3.5 text-center">
                        <span
                          className={cn(
                            'inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full font-medium',
                            isActive
                              ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                              : 'bg-muted text-muted-foreground'
                          )}
                        >
                          <span
                            className={cn(
                              'h-1.5 w-1.5 rounded-full',
                              isActive ? 'bg-green-500' : 'bg-muted-foreground'
                            )}
                          />
                          {isActive ? 'Active' : 'Paused'}
                        </span>
                      </td>

                      {/* Toggle */}
                      <td className="px-4 py-3.5 text-center">
                        <Toggle
                          enabled={isActive}
                          onChange={() => handleToggle(wallet.id)}
                        />
                      </td>

                      {/* Delete */}
                      <td className="px-6 py-3.5 text-right">
                        <button
                          type="button"
                          onClick={() => handleDelete(wallet.id)}
                          className="p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="py-16 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                        <Wallet className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <p className="text-sm font-medium">No wallets found</p>
                      <p className="text-xs text-muted-foreground">
                        {search
                          ? 'Try a different search term.'
                          : 'Add your first wallet to get started.'}
                      </p>
                      {!search && (
                        <Button
                          onClick={() => navigate.push('/wallets/add')}
                          className="mt-1 rounded-full h-9 px-4 gap-1.5 text-sm"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          Add wallet
                        </Button>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        {filtered.length > 0 && (
          <div className="px-6 py-3 border-t border-border bg-secondary/20 flex items-center justify-between">
            <span className="text-xs text-muted-foreground font-mono">
              {filtered.length} wallet{filtered.length !== 1 ? 's' : ''}
              {search ? ' found' : ' total'}
            </span>
            <span className="text-xs text-muted-foreground font-mono">
              {activeCount} active · {wallets.length - activeCount} paused
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageWallets;
