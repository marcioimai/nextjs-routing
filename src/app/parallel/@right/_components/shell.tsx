import Card from "@/components/Card";
import React from "react";

export default function RightShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Card className="border-blue-400 bg-blue-100">{children}</Card>;
}
