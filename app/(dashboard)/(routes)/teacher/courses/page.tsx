import { Button } from "@/components/ui/button"
import Link from "next/link"

const CoursesPage = () => {
  return (
    <div>
        <Link href={``}>
            <Button>
                New course
            </Button>
        </Link>
    </div>
  )
}

export default CoursesPage