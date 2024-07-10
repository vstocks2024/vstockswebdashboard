import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

import { Vectors, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import axios from "axios";
import NewVectorButton from "./_components/NewVectorButton";

async function getVectorsData(): Promise<Vectors[]> {
  // Fetch data from your API here.
  const resp = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/vectors/listall`
  );
  if (resp.status === 200 && resp.statusText === "OK") return resp.data;
  return [];
}

export default async function VectorPage() {
  const data = await getVectorsData();
  return (
    <>
      <DefaultLayout>
        <main className="mx-auto w-full max-w-[1150px]">
          <Breadcrumb pageName="Vectors" />
          <div className="container mx-auto py-2">
            <NewVectorButton />
            <DataTable columns={columns} data={data} />
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}
