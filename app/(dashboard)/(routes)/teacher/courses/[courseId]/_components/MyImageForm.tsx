"use client";

import * as zod from "zod";
import axios from "axios";
import { Pencil, PlusCircle, ImageIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface ImageFormProps {
  initialData: Course
  courseId: string;
};

const MyImageForm = ({
  initialData,
  courseId
}: ImageFormProps) => {

  // console.log("===== IMAGE URL =====\n",initialData.imageUrl)
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const [file, setFile] = useState<File>()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return

    try {      
        const data = new FormData()
        data.set('file', file)

        await axios.patch(`/api/upload/courses/${courseId}`, data);
        toast.success("Course updated");
        toggleEdit();
        router.refresh();

    } catch (e: any) {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course image
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && (
            <>Cancel</>
          )}
          {!isEditing && !initialData.imageUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add an image
            </>
          )}
          {!isEditing && initialData.imageUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit image
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        !initialData.imageUrl ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
            <ImageIcon className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <Image
              alt="Upload"
              fill
              className="object-cover rounded-md"
              src={initialData.imageUrl}
            />
          </div>
        )
      )}
      {isEditing && (
        <>
            <div>
                <h1>my file upload form</h1>
                <form onSubmit={onSubmit}>
                    <input
                        type="file"
                        name="file"
                        onChange={(e) => setFile(e.target.files?.[0])}
                    />
                    <input type="submit" value="Upload" />
                </form>

                <div className="text-xs text-muted-foreground mt-4">
                  16:9 aspect ratio recommended
                </div>
            </div>
        </>
      )}
    </div>
  )
}
export default MyImageForm