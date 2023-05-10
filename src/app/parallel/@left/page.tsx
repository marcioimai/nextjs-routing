import { wait } from "@/utils/utils";
import LeftShell from "./_components/shell";

export default async function LeftPage() {
  await wait(3000);
  return <LeftShell>Left Section</LeftShell>;
}
