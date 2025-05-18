"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold tracking-tight text-2xl text-slate-700">
            Tanja Bächle
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/about" ? "text-primary" : "text-muted-foreground",
            )}
          >
            About
          </Link>
          <Link
            href="/book"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/book" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Book
          </Link>
          <Link
            href="/projects"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/projects" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Projects
          </Link>
          <Link
            href="/media"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/media" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Media
          </Link>
          <Link
            href="/join"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/join" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Join
          </Link>
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/contact" ? "text-primary" : "text-muted-foreground",
            )}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/" ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/about" ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  About
                </Link>
                <Link
                  href="/book"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/book" ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  Book
                </Link>
                <Link
                  href="/projects"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/projects" ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  Projects
                </Link>
                <Link
                  href="/media"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/media" ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  Media
                </Link>
                <Link
                  href="/join"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/join" ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  Join
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/contact" ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
