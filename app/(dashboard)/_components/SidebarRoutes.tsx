'use client'

import { BarChart2, Compass, Layout, List } from 'lucide-react'
import SidebarItem from './SidebarItem'
import { usePathname } from 'next/navigation';

const userRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    },
];

const teacherRoutes = [
    {
        icon: List,
        label: "Courses",
        href: "/teacher/courses",
    },
    {
        icon: BarChart2,
        label: "Analytics",
        href: "/teacher/analytics",
    },
]

const SidebarRoutes = () => {
    const pathname = usePathname()
    
    const isTeacherPage = pathname?.includes("/teacher")
    
    const routes = isTeacherPage ? teacherRoutes : userRoutes
    return (
        <div className='flex flex-col w-full'>
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}

export default SidebarRoutes