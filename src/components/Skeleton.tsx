export default function Skeleton({ className }: { className?: string }) {
  return (
    <span
      className={`inline-block animate-pulse h-6 w-48 bg-slate-300 rounded ${className}`}
    ></span>
  );
}
