import Card from "@/components/Card";
import React from "react";

export default function LeftShell({ children }: { children: React.ReactNode }) {
  return <Card className="border-green-400 bg-green-100">{children}</Card>;
}
