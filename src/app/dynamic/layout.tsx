import Link from "next/link";
import React from "react";

export default function DynamicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>Choose a dynamic route:</p>
      <ul className="list-disc list-inside">
        <li>
          <Link href="/dynamic/alpha">alpha</Link>
        </li>
        <li>
          <Link href="/dynamic/beta">beta</Link>
        </li>
      </ul>
      {children}
    </>
  );
}
