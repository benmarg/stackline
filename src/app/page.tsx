import { api } from "@/trpc/server";
import DataContainer from "./_components/dataContainer";
import { DataTable } from "./_components/dataTable";
import { columns } from "./_components/columns";
import type { Sales } from "./_components/columns";

export default async function Home() {
  const data = await api.sales.getSales();

  return (
    <main className="flex min-h-screen bg-slate-200">
      <div className="mx-4 mt-12 flex w-full gap-12">
        <DataContainer product={data} />
        <DataTable columns={columns} data={data[0]?.sales as Sales[]} />
      </div>
    </main>
  );
}
