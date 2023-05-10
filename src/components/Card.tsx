import React from "react";

export default function Card({
  children,
  className = "border-neutral-400 bg-neutral-200",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`border rounded-md p-4 ${className}`}>{children}</div>;
}
