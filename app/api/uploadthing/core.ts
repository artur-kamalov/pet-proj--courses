import { getServerSession } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
 
const f = createUploadthing();
 
const handleAuth = async () => {
    const session = await getServerSession()
    if (!session) throw new Error("Unauthorized")

    const userId = session.user?.email
    return {userId}
};
 
export const ourFileRouter = {
    courseImage: f({ image: {maxFileSize: "4MB", maxFileCount: 1}})
        .middleware(() => handleAuth())
        .onUploadComplete(() => {}),
    courseAttachment: f(["text", "image", "video", "audio", "pdf", "image/jpeg"])
        .middleware(() => handleAuth())
        .onUploadComplete(() => {}),
    chapterVideo: f({ video: {maxFileSize: "512GB", maxFileCount: 1}})
        .middleware(() => handleAuth())
        .onUploadComplete(() => {}),
        
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;