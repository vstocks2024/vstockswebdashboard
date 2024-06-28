import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function VideoForm(){
    const [name,setName]=useState<string>();
    return (<>
    <DefaultLayout>
    <form className="space-y-8">
        <div className="sapce-y-2">
            <Label  htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required
            value={name} onChange={e=>setName(e.target.value)}/>
        </div>
        </form>
        </DefaultLayout></>);
}