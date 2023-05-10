import Item from "@/app/intercepting/_components/Item";
import Modal from "@/components/Modal";

export default function IdModal({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <p className="mb-4">Refreshing this page should render item's page.</p>
      <Item id={params.id} />
    </Modal>
  );
}
