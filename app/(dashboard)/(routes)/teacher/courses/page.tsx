import { Button } from "@/components/ui/button"
import Link from "next/link"

const CoursesPage = () => {
  return (
    <div>
        <Link href='/teacher/create'>
            <Button className="m-4">
                New course
            </Button>
        </Link>
    </div>
  )
}

export default CoursesPage