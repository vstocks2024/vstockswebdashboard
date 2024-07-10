import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { Customers, columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
import axios from "axios";



async function getData(): Promise<Customers[]> {

    // Fetch data from your API here.
    const resp=await axios.get(`${process.env.NEXT_PUBLIC_URL}/customers/listall`);
    if(resp.status===200 && resp.statusText==="OK") return resp.data;
    return [];
  }


export default async function CustomersPage(){
    const data = await getData();
    console.log(data);
    return (<>
       <DefaultLayout>
        <main className="mx-auto w-full max-w-[1000px]">
        <Breadcrumb pageName="Customers" />
        <div className="container mx-auto py-2">
         <DataTable columns={columns} data={data} />
        </div>
        </main>
    </DefaultLayout>
    </>);
}







