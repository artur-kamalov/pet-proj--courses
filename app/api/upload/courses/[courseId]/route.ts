import { authConfig } from '@/configs/auth'
import { db } from '@/lib/db'
import { writeFile } from 'fs/promises'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'

export async function PATCH(
  req: NextRequest,
  { params }: { params: { courseId: string } }
) {

  try {
    //Check if file and user exists
    const data = await req.formData()
    const file: File | null = data.get('file') as unknown as File
  
    if (!file) {
      return new NextResponse("File uploading Error", {status: 401})
    }
    const userId = await getServerSession(authConfig).then(session => session?.user?.email)
    
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const path = `/uploads/courseImages/${file.name}` //img path
    const { courseId } = params;
    
    // updating course img url in db 
    const course = await db.course.update({
      where: {
        id: courseId,
        userId: userId
      },
      data: {
        imageUrl: path
      }
    });

    // add image to public/uploads/courseImages
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    await writeFile('./public' + path, buffer)
    console.log(`open ${path} to see the uploaded file`)

    return NextResponse.json(course);
  } catch (error) {
    console.log(error)
  }
}