"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navigationItems = [
  { href: "/", label: "大会概要" },
  { href: "/sponsors", label: "協賛" },
  { href: "/kids-future", label: "こども未来" },
  { href: "/donation", label: "ふるさと納税" },
  { href: "/volunteer-form", label: "ボランティア" },
  { href: "/contact", label: "お問い合わせ" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex space-x-8">
      {navigationItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn("text-white hover:text-accent transition-colors relative py-2", isActive && "text-accent")}
          >
            {item.label}
            {isActive && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"></div>}
          </Link>
        )
      })}
    </nav>
  )
}
