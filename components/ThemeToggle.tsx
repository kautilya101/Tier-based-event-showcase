"use client"

import { MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 bg-white/5 hover:bg-white/10 dark:bg-black rounded-sm cursor-pointer"
    >
      {
        theme === 'dark' ? <MoonIcon className="w-4 h-4" /> : <Sun className="w-4 h-4" />
      }
    </button>
  )
}
