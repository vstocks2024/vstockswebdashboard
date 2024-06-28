"use client";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function VideoForm() {
  
/////////////////////////// Success Notification ///////////////////////
  const notify = () => toast.success('Video Uploaded Successfully', {
    position: "top-right",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
//////////////////////////////////////////////////////////////////////

/////////////////////////// Error Notification ///////////////////////

  const errorNotify = (error:any) =>toast.error(error, {
    position: "top-right",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

////////////////////////////////////////////////////////////////////
  
///////////////Single Video File Upload function////////////////////
  const handleSingleVideoFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;
      console.log(file.name);
      const formData = new FormData();
      formData.append("newvideo", file);
      await axios
        .post(`${process.env.NEXT_PUBLIC_URL}/new_video`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((resolve) => {
          console.log(resolve);
          event.target.value="";
          notify();
        })
        .catch((reject) => {
          console.log(reject);
          errorNotify("Some network related issue has occured");
          
        });
    } catch (err) {
      console.log(err);
      errorNotify("File not uploaded properly");
    }
  };

////////////////////////////End of Function/////////////////////////////

  return (
    <>
      <DefaultLayout>
        <ToastContainer/>
          <div className="m-[1px] p-[1px] flex flex-col">
            <div className="m-[1px] p-[1px] lg:w-1/2 w-full ">
              <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                  <h3 className="font-medium text-dark dark:text-white">
                    Single Video File Upload(any format)
                  </h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                  {/* <div className="space-y-2">
                    <Label
                      className="mb-3 block text-body-sm font-medium text-dark dark:text-white"
                      htmlFor="name"
                    >
                      Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke bg-transparent outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                    />
                  </div> */}
                  <div>
                    <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                      Attach file
                    </label>
                    <input
                      type="file"
                      id="newvideo"
                      name="newvideo"
                      accept="video/*"
                      className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-[#E2E8F0] file:px-6.5 file:py-[13px] file:text-body-sm file:font-medium file:text-dark-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                      onChange={handleSingleVideoFileUpload}
                    />
                  </div>
                   {/* <div className="flex flex-row items-center justify-end gap-x-2"> 
                    <Button variant={"outline"} type="reset">
                      Reset
                    </Button>
                    <Button variant={"default"} type="submit">
                      Upload
                    </Button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
      </DefaultLayout>
    </>
  );
}
