import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { Tag, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import axios from "axios";


async function getData(): Promise<Tag[]> {
  // Fetch data from your API here.
  const resp= await axios.get(`${process.env.NEXT_PUBLIC_URL}/tags/list_tags`);
  if(resp.status===200 && resp.statusText==="OK") return resp.data;
  return [];
  
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


 

 
