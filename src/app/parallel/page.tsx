export default function ParallelPage() {
  return (
    <p>
      Both left and right sections are rendered in the same layout
      (/layout.tsx), but each one has its own page.tsx,{" "}
      <s>loading.tsx and error.tsx</s> files.
    </p>
  );
}
