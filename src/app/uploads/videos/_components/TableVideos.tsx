import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import axios from "axios";
import { DeleteIcon, MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { FaRegTrashAlt } from "react-icons/fa";

export default function TableVideos() {
  const [videos, setVideos] = useState([]);

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

  useEffect(() => {
    getVideosData();
  }, []);
  return (
    <>
      <Table className="rounded-md">
        <TableHeader className="bg-gray-600">
          <TableRow>
            <TableHead className="w-0">
              <span className="sr-only">Avaliable For Purchase</span>
            </TableHead>
            <TableHead>ID</TableHead>
            <TableHead>NAME</TableHead>
            <TableHead>CREATED AT</TableHead>
            <TableHead className="w-0">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-gray-300">
          {videos && videos.length > 0 ? (
            videos.map((video) => {
              return (
                <>
                  <TableRow key={video["id"]}>
                    <TableCell></TableCell>
                    <TableCell>{video["id"]}</TableCell>
                    <TableCell>{video["video_name"]}</TableCell>
                    <TableCell>{video["createdAt"]}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                      <DropdownMenuTrigger>
                      <MoreVertical/>
                      <span className="sr-only">Actions</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="border border-red-500">
                        <DropdownMenuItem className="border border-green-500 cursor-pointer" asChild>
                          <a download href={``}>Download</a>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="border border-green-500 cursor-pointer" asChild>
                          <Link className="inline-flex flex-row items-center justify-between gap-x-2" href={`/`}><span>Delete</span><FaRegTrashAlt className="w-4" /></Link>
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
      </Table>
    </>
  );
}
