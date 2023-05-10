import { wait } from "@/utils/utils";
import RightShell from "./_components/shell";

export default async function RightPage() {
  await wait(5000);
  return <RightShell>Right Section</RightShell>;
}
