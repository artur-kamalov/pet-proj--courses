import Mux from "@mux/mux-node";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authConfig } from "@/configs/auth";

// const { Video } = new Mux(
//   process.env.MUX_TOKEN_ID!,
//   process.env.MUX_TOKEN_SECRET!,
// );

// export async function DELETE(
//   req: Request,
//   { params }: { params: { courseId: string } }
// ) {
//   try {

//     const session = await getServerSession(authConfig)
//     const userId = session?.user?.email;

//     if (!userId) {
//       return new NextResponse("Unauthorized", { status: 401 });
//     }

//     const course = await db.course.findUnique({
//       where: {
//         id: params.courseId,
//         userId: userId,
//       },
//       include: {
//         chapters: {
//           include: {
//             muxData: true,
//           }
//         }
//       }
//     });

//     if (!course) {
//       return new NextResponse("Not found", { status: 404 });
//     }

//     for (const chapter of course.chapters) {
//       if (chapter.muxData?.assetId) {
//         await Video.Assets.del(chapter.muxData.assetId);
//       }
//     }

//     const deletedCourse = await db.course.delete({
//       where: {
//         id: params.courseId,
//       },
//     });

//     return NextResponse.json(deletedCourse);
//   } catch (error) {
//     console.log("[COURSE_ID_DELETE]", error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// }

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  
  try {
    const userId = await getServerSession(authConfig).then(session => session?.user?.email)

    const { courseId } = params;
    
    const values = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.update({
      where: {
        id: courseId,
        userId: userId
      },
      data: {
        ...values,
      }
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}