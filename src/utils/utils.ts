export async function wait(miliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
}
