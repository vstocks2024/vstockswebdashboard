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

const FormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Minimum characters must be 3" })
    .max(50, { message: "Maximum characters must be 50" }),
  description: z
    .string()
    .min(2, { message: "Minimum characters must be 2" })
    .max(500, { message: "Maximum characters must be 500" }),
});

export default function NewCategoryPage() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    //console.log(data);
    await axios
      .post(`${process.env.NEXT_PUBLIC_URL}/categories/new`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((resolve) => {
        console.log(resolve.data);
        toast({
          title: resolve.data["status"],
          description: resolve.data["message"],
        });
      })
      .catch((reject) => console.log(reject));
  }
  function onReset() {}
  return (
    <>
      <DefaultLayout>
        <main className="mx-auto w-full max-w-[1080px]">
          <Breadcrumb pageName="New Category" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category Name</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
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
                      <Textarea
                        placeholder="Tell us a little bit about yourself"
                        className="resize-none"
                        {...field}
                      />
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
