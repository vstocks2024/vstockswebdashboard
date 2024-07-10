import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";



export default function DeleteButton({cat_id}:{cat_id:string}) {
  const router = useRouter();
  const handleDeleteCategory=async(id:string)=> {
    const resp = await axios.delete(
      `${process.env.NEXT_PUBLIC_URL}/categories/delete/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(resp);
    router.refresh();
  }
  return (
    <>
      <Button className="w-full" variant={"destructive"} onClick={()=>handleDeleteCategory(cat_id)}>
        Delete
      </Button>
    </>
  );
}
