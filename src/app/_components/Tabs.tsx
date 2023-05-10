"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TiFlowMerge, TiFlowParallel } from "react-icons/ti";

const items = [
  {
    label: "Parallel Routes",
    href: "/parallel",
    icon: <TiFlowParallel color="gray" />,
  },
  {
    label: "Dynamic Routes",
    href: "/dynamic",
    icon: <TiFlowParallel color="gray" />,
  },
  {
    label: "Intercepting Routes",
    href: "/intercepting",
    icon: <TiFlowMerge color="gray" />,
  },
];

export default function Tabs() {
  const pathname = usePathname();
  return (
    <ul className="flex border-b border-gray-100">
      {items.map((item, index) => (
        <li key={index} className="flex-1">
          <Link className="relative block p-4" href={item.href}>
            {pathname.startsWith(item.href) && (
              <span className="absolute inset-x-0 -bottom-px h-px w-full bg-gray-600"></span>
            )}
            <div className="flex items-center justify-center gap-4">
              {/* {item.icon} */}
              <span className="text-gray-900"> {item.label} </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
