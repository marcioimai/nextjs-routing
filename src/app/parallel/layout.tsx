import { Suspense } from "react";
import LeftShell from "./@left/_components/shell";
import Skeleton from "@/components/Skeleton";
import RightShell from "./@right/_components/shell";

export default function ParallelLayout({
  left,
  right,
  children,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <Suspense
          fallback={
            <LeftShell>
              <Skeleton className="bg-green-300" />
            </LeftShell>
          }
        >
          {left}
        </Suspense>
        <Suspense
          fallback={
            <RightShell>
              <Skeleton className="bg-blue-300" />
            </RightShell>
          }
        >
          {right}
        </Suspense>
      </div>
    </>
  );
}
