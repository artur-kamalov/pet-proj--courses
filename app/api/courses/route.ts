import { db } from "@/lib/db"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const session = await getServerSession()
        const { title } = await req.json()

        if (!session) {
            return new NextResponse("Unauthorized", {status: 401})
        }
        
        const course = await db.course.create({
            data: {
                userId: session.user?.email || "email id none",
                title,
            }
        })

        return NextResponse.json(course)
    } catch (error) {
        console.log("[COURSES]", error)
        return new NextResponse("Internal error", {status: 500})
    }
}