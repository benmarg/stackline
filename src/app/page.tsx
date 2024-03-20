import Link from "next/link";

import { CreatePost } from "@/app/_components/create-post";
import { api } from "@/trpc/server";
import DataContainer from "./_components/dataContainer";

export default async function Home() {
  const data = await api.sales.getSales();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-200">
      <DataContainer product={data} />
    </main>
  );
}
