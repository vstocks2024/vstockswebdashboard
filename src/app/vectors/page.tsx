import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

import { Vectors, columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"

async function getData(): Promise<Vectors[]> {
  // Fetch data from your API here.
  return []
}

export default async function VectorPage() {
  const data = await getData();
    return (
      <>
      <DefaultLayout>
        <main className="mx-auto w-full max-w-[1080px]">
          <Breadcrumb pageName="Vectors" />
          <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
        </main>
      </DefaultLayout>
    </>
  );
}





