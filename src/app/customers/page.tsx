import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableCustomers from "@/components/Tables/TableCustomers";


export default function MessagesPage(){
    return (<>
       <DefaultLayout>
        <main className="mx-auto w-full max-w-[1000px]">
        <Breadcrumb pageName="Customers" />
        <TableCustomers/>
        </main>
    </DefaultLayout>
    </>);
}