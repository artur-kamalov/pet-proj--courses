'use client'

import { LucideIcon } from "lucide-react";
import {usePathname, useRouter} from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

const SidebarItem= ({href, icon: Icon, label}: SidebarItemProps) => {
    const pathname = usePathname()
    const router = useRouter()

    const isActive = 
        (pathname === '/' && href === '/') 
        || (pathname === href) 
        || (pathname?.startsWith(`${href}/`))

    const onClick = () => {
        router.push(href)
    }

  return (
    <button type="button"
    className={cn(
        "flex items-center gap-x-2 pl-6",
        "text-slate-500 text-sm font-[500]",
        "hover:text-slate-600 hover:bg-slate-300/20 transition-all",
        isActive ? 
            "text-sky-600 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-600" : ""
    )}
    onClick={onClick}
    >
        <div className="flex items-center gap-x-2 py-4 ">
            <Icon size={22}
                className={cn(
                    "text-slate-500",
                    isActive ? "text-sky-600" : ""
                )}
            />

            {label}
        </div>

        <div
        className={cn(
          "ml-auto opacity-0 border-2 border-sky-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  )
}

export default SidebarItem