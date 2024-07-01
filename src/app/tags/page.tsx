import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export default function TagsPage(){
    return <><DefaultLayout>
            <main className="mx-auto w-full max-w-[1080px]">
          <Breadcrumb pageName="Tags" />
        </main>
        </DefaultLayout></>
}