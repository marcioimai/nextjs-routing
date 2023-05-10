import Card from "@/components/Card";

export default function SlugPage({ params }: { params: { slug: string } }) {
  return <Card>{params.slug} Page</Card>;
}
