export function LotusMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M32 54c8-8 14-16 14-24 0-6-4-10-8-10-3 0-5 2-6 4-1-2-3-4-6-4-4 0-8 4-8 10 0 8 6 16 14 24Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M32 50c10-4 18-12 20-20 1-6-2-11-7-12-3-.6-6 1-7 3-.2-3-2-7-6-8-4-1-8 2-9 6-.8-2-3.5-3.5-6.5-3-5 .8-8 6-7 12 2 8 10 16 22.5 22Z"
        fill="currentColor"
        opacity="0.35"
      />
      <circle cx="32" cy="28" r="4" fill="currentColor" />
    </svg>
  );
}

export function LotusDivider() {
  return (
    <div className="flex items-center gap-4 text-gold" aria-hidden="true">
      <span className="ornament-line flex-1" />
      <LotusMark className="h-5 w-5" />
      <span className="ornament-line flex-1" />
    </div>
  );
}
