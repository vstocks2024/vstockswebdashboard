"use client"

import { z } from "zod"

const formSchema = z.object({
 name: z.string().min(2, {message: "Must be 2 and not more than 50 characters long" }).max(50),
 description: z.string().min(2 ,{message: "Must be 2 and not more than 500 characters long"}).max(500),
})

export default function NewVectorPage() {
    return (
      <>
      </>)}