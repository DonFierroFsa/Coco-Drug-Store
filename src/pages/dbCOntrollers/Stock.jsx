import FormStock from "../../components/dbComponents/stock/FormStock";
import TableStock from "../../components/dbComponents/stock/TableStock";

export default function Stock() {
  return (
    <section className="flex w-full flex-col items-center">
      <h2 className="my-10 text-4xl font-bold">Control de Stock</h2>
      <FormStock />
      <TableStock />
    </section>
  );
}
