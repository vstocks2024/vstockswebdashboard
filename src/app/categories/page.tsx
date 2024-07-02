import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import {  Category, columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
async function getData(): Promise<Category[]> {
    // Fetch data from your API here.
    return [];
  }


export default async function CategoryPage(){
    const data = await getData()
    return (<DefaultLayout>
            <Breadcrumb pageName="Categories" />
            <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
            
            </DefaultLayout>);
}






