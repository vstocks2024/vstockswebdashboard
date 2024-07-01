import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "../../../../components/ui/table";
import axios from "axios";
import { DeleteIcon, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdAdd } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function TableVideos() {
  const [videos, setVideos] = useState([]);
  const [deleteId,setDeleteId]=useState<string>("");
  const router=useRouter();
//////////////////////////// Deletion of video code ////////////////////////

const handleDeleteVideo=async(event:any)=>{
  
 const response=await axios.delete(`${process.env.NEXT_PUBLIC_URL}/video/delete/${event.target.id}`)
 console.log(response);

 }


///////////////////////////////////////////////////////////////////////////
///////////////////Fetching the data for table code ////////////////////////
  const getVideosData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/list_videos`
      );
      if (response.status === 200) setVideos(response.data["data"]);
    } catch (err) {
      console.log(err);
    }
  };
  ////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getVideosData();
   }, []);


  return (
    <>
      <Table className="rounded-md ">
        <TableHeader className="bg-gray-200 py-[10px]">
          <TableRow>
            <TableHead className="w-0">
              <span className="sr-only">Avaliable For Purchase</span>
            </TableHead>
            <TableHead>ID</TableHead>
            <TableHead>NAME</TableHead>
            <TableHead>CREATED AT</TableHead>
            <TableHead className="w-0">
              <Button onClick={()=>router.push("/uploads/videos/new")} className=" bg-sky-600 hover:bg-sky-500 inline-flex flex-row items-center justify-between gap-x-1">
                <span>New Video</span>
                <MdAdd color="#FFFFFF" size={20} />
                {/* <span className="sr-only">Actions</span> */}
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {videos && videos.length > 0 ? (
            videos.map((video) => {
              return (
                <>
                  <TableRow key={video["id"]} id={video["id"]}>
                    <TableCell></TableCell>
                    <TableCell>{video["id"]}</TableCell>
                    <TableCell>{video["video_name"]}</TableCell>
                    <TableCell>{video["createdAt"]}</TableCell>
                    <TableCell className="flex flex-row items-center justify-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <MoreVertical />
                          <span className="sr-only">Actions</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="border border-red-500">
                          <DropdownMenuItem
                            className="border border-green-500 cursor-pointer"
                            asChild
                          >
                            <a download href={``}>
                              Download
                            </a>
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="border border-green-500 cursor-pointer"
                            asChild
                          >
                            <button
                              className="inline-flex flex-row items-center justify-between gap-x-2"
                              onClick={handleDeleteVideo}
                              id={video["id"]}>
                              Delete
                            </button>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </>
              );
            })
          ) : (
            <></>
          )}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </>
  );
}
