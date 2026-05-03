// Centralise all query keys so refetches / invalidations never use raw strings.
// Usage: queryClient.invalidateQueries({ queryKey: queryKeys.auth.me() })

export const queryKeys = {
  auth: {
    all: ["auth"] as const,
    me: () => [...queryKeys.auth.all, "me"] as const,
  },
} as const;
