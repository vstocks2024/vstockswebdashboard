import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb"
import DefaultLayout from "@/components/Layouts/DefaultLaout"




export default function TemplatePage(){


    return <>
    <DefaultLayout>
    <main className="mx-auto w-full max-w-[1080px] border-white">
        <Breadcrumb pageName="Templates" />
        
        
    </main>
    </DefaultLayout>
    </>
}