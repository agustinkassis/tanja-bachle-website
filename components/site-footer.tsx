import { Button } from "@/components/ui/button"
import Link from "next/link"

import { SocialLinks } from "@/components/social-links"

export function SiteFooter() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">Tanja Bächle</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Author, Event Manager, Community Builder, Public Speaker
            </p>
            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Navigation</h3>
            <nav className="mt-2 flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="/book" className="text-sm text-muted-foreground hover:text-primary">
                Book
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary">
                Projects
              </Link>
              <Link href="/media" className="text-sm text-muted-foreground hover:text-primary">
                Media
              </Link>
              <Link href="/join" className="text-sm text-muted-foreground hover:text-primary">
                Join My Journey
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-bold">Book</h3>
            <nav className="mt-2 flex flex-col space-y-2">
              <Link href="/book" className="text-sm text-muted-foreground hover:text-primary">
                The Extraordinary
              </Link>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Amazon DE
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                Amazon EN
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                story.one
              </a>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="mt-2 text-sm text-muted-foreground">For inquiries, collaborations, or speaking engagements</p>
            <p className="mt-2 text-sm text-muted-foreground">Email: hello@tanjabachle.com</p>
            <p className="mt-2 text-sm text-muted-foreground">Location: Berlin, Germany</p>
            <div className="mt-4">
              <Link href="/join">
                <Button variant="outline" size="sm" className="bg-rose-500 hover:bg-rose-600 text-white border-0">
                  Join My Journey ✨
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Tanja Bächle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
