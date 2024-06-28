"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableVideos from "@/app/uploads/videos/_components/TableVideos";
import axios from "axios";

export default function VideoPage() {
  return (
    <>
      <DefaultLayout>
        <main className="mx-auto w-full max-w-[1000px] border-white">
          <Breadcrumb pageName="Videos" />
          <TableVideos />
        </main>
      </DefaultLayout>
    </>
  );
}
