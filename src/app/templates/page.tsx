import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import DefaultLayout from "@/components/Layouts/DefaultLaout"
import TableTemplates from "./_components/TableTemplates"



export default function TemplatePage(){


    return <>
    <DefaultLayout>
    <main className="mx-auto w-full max-w-[1000px] border-white">
        <Breadcrumb pageName="Templates" />
        <TableTemplates/>
    </main>
    </DefaultLayout>
    </>
}