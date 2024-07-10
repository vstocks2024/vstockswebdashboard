"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function NewTagButton() {
  const router = useRouter();
  return (
    <div className="flex flex-row items-center justify-end my-2">
      <Button
        onClick={() => router.push("/tags/new")}
        className="bg-sky-600 text-white hover:bg-sky-500"
        variant={"default"}
      >
        + New Tag
      </Button>
    </div>
  );
}
