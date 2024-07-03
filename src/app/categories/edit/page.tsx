"use client";


import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import {useSearchParams } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  name: z
    .string()
    .min(2, { message: "Minimum characters must be 3" })
    .max(50, { message: "Maximum characters must be 50" }),
  description: z
    .string()
    .min(2, { message: "Minimum characters must be 2" })
    .max(500, { message: "Maximum characters must be 500" }),
});

async function handleGetCategoryById(id:string) {
  const resp=await axios.get(`${process.env.NEXT_PUBLIC_URL}/categories/get/${id}`);
  console.log(resp);

}

export default function EditCategoryPage() {
  const searchParams = useSearchParams();
  const category_id=searchParams.get('category_id')
  console.log(category_id);
  

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id:"",
      name: "",
      description: "",
    },
  });
  
    
  
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    //console.log(data);
    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/categories/new`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (resp.status === 201 && resp.statusText === "Created") {
      console.log(resp);
      toast({
        title: "Success",
        description: `Category Successfully Created`,
      });
    } else {
      console.log(resp);
      toast({
        title: "Failure",
        description:
          "Category doesn't get created please provide a unique category name and valid description",
        variant: "destructive",
      });
    }
  }
  function onReset() {}
  return (
    <>
      <DefaultLayout>
        <main className="mx-auto w-full max-w-[1080px]">
          <Breadcrumb pageName="Edit Category" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Id</FormLabel>
                    <FormControl>
                      <Input value={field.value} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name. It can be your real name
                      or a pseudonym. You can only change this once every 30
                      days.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input value={field.name} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name. It can be your real name
                      or a pseudonym. You can only change this once every 30
                      days.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Description</FormLabel>
                    <FormControl>
                      <Textarea className="resize-none" value={field.name} />
                    </FormControl>
                    <FormDescription>
                      You can <span>@mention</span> other users and
                      organizations to link to them.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <div className="inline-flex flex-row items-center justify-between gap-x-2"> */}
              <Button type="submit">Add Category</Button>&nbsp;&nbsp;
              <Button type="reset">Reset</Button>
              {/* </div> */}
            </form>
          </Form>
        </main>
      </DefaultLayout>
    </>
  );
}
