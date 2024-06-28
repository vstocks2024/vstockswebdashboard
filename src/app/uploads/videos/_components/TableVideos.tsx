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
      <Table>
        <TableHeader className="bg-gray-200">
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
        <TableBody>
          {videos && videos.length > 0 ? (
            videos.map((video) => {
              return (
                <>
                  <TableRow key={video["id"]}>
                    <TableCell></TableCell>
                    <TableCell>{video["id"]}</TableCell>
                    <TableCell>{video["video_name"]}</TableCell>
                    <TableCell>{video["createdAt"]}</TableCell>
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
