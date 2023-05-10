import Item from "../../_components/Item";

export default function IdPage({ params }: { params: { id: string } }) {
  return <Item id={params.id} />;
}
