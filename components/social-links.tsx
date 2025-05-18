import Link from "next/link"
import { ExternalLink, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" size="sm" asChild>
        <Link href="https://twitter.com/tanjabachle" target="_blank" rel="noopener noreferrer">
          <Twitter className="mr-2 h-4 w-4" /> Twitter/X
        </Link>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <Link href="https://linkedin.com/in/tanjabachle" target="_blank" rel="noopener noreferrer">
          <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
        </Link>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <ExternalLink className="mr-2 h-4 w-4" /> Nostr
        </Link>
      </Button>
    </div>
  )
}
