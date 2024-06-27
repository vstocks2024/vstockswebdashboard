import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableCategories from "@/components/Tables/TableCategories";

export default function CategoriesPage(){
    return (<DefaultLayout>
            <Breadcrumb pageName="Categories" />
            <TableCategories/>
            </DefaultLayout>);
}