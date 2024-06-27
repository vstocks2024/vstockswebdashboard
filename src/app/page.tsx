import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title:"",
  description: "",
};

export default function Home() {
  redirect("/customers");
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
