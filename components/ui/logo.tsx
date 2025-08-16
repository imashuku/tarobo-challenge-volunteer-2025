import Link from "next/link"
import { Mountain } from "lucide-react"

interface LogoProps {
  href?: string
  className?: string
}

export function Logo({ href = "https://tarobo-challenge.com", className = "" }: LogoProps) {
  return (
    <Link href={href} className={`flex items-center space-x-3 group ${className}`}>
      <div className="relative">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform">
          <Mountain className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full"></div>
      </div>
      <div className="flex flex-col">
        <span className="font-heading font-bold text-lg text-secondary leading-tight">太郎坊チャレンジ2025</span>
        <span className="text-sm text-accent font-medium">挑戦の頂へ</span>
      </div>
    </Link>
  )
}
