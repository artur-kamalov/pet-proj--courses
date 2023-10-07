import IconBadge from "@/components/IconBadge"

import { authConfig } from "@/configs/auth"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import { CircleDollarSign, LayoutDashboard } from "lucide-react"

import { db } from "@/lib/db"
import TitleForm from "./_components/TitleForm"
import DescriptionForm from "./_components/DescriptionForm"
import ImageForm from "./_components/ImageForm"
import { CategoryForm } from "./_components/CategoryForm"
import PriceForm from "./_components/PriceForm"

const CourseIdPage = async ({params} : {params: {courseId: string}}) => {

  const session = await getServerSession(authConfig)

  console.log("SESSION: ",session)
  if(!session){
    return redirect('/')
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId
    }
  })

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc"
    }
  })

  if(!course){
    return redirect('/')
  }

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId
  ]

  const totalFields = requiredFields.length
  const completedFields = requiredFields.filter(Boolean).length

  const completionText = `(${completedFields}/${totalFields})`

  return (
    <>
      {/* {!course.isPublished && (
        <Banner
          label="This course is unpublished. It will not be visible to the students."
        />
      )} */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">
              Course setup
            </h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>
          </div>
          {/* <Actions
            disabled={!isComplete}
            courseId={params.courseId}
            isPublished={course.isPublished}
          /> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">
                Customize your course
              </h2>
            </div>
            <TitleForm
              initialData={course}
              courseId={course.id}
            />
            <DescriptionForm
              initialData={course}
              courseId={course.id}
            />
            <ImageForm
              initialData={course}
              courseId={course.id}
            />
            <CategoryForm
              initialData={course}
              courseId={course.id}
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          </div>
          <div className="space-y-6">
            <div>
              {/* <div className="flex items-center gap-x-2">
                <IconBadge icon={ListChecks} />
                <h2 className="text-xl">
                  Course chapters
                </h2>
              </div>
              <ChaptersForm
                initialData={course}
                courseId={course.id}
              /> */}
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={CircleDollarSign} />
                <h2 className="text-xl">
                  Sell your course
                </h2>
              </div>
              <PriceForm
                initialData={course}
                courseId={course.id}
              />
            </div>
            <div>
              {/* <div className="flex items-center gap-x-2">
                <IconBadge icon={File} />
                <h2 className="text-xl">
                  Resources & Attachments
                </h2>
              </div>
              <AttachmentForm
                initialData={course}
                courseId={course.id}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
   );
}

export default CourseIdPage