import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { Tag, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

async function getData(): Promise<Tag[]> {
  // Fetch data from your API here.
  return []
}

export default async function TagsPage(){
  const data = await getData()
    return <><DefaultLayout>
            <main className="mx-auto w-full max-w-[1080px]">
          <Breadcrumb pageName="Tags" />
          <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
        </main>
        </DefaultLayout></>
}


 

 
