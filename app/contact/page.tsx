import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">Contact & Connect</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Got a question, idea, or just want to say hi? I'd love to hear from you.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below to get in touch</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Alternative Contact</CardTitle>
                <CardDescription>Other ways to reach me</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">hello@tanjabachle.com</p>
                </div>
                <div>
                  <p className="font-medium">Nostr</p>
                  <p className="text-xs text-muted-foreground break-all">
                    npub1abcdefghijklmnopqrstuvwxyz0123456789abcdefghijklmnopqrstuvwxyz
                  </p>
                </div>
                <div>
                  <p className="font-medium">Social Media</p>
                  <div className="mt-2">
                    <SocialLinks />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Time</CardTitle>
                <CardDescription>When to expect to hear back</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  I typically respond to messages within 2-3 business days. For urgent inquiries related to speaking
                  engagements or media requests, please mention this in your message subject.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
                <CardDescription>Where I'm based</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  I'm based in Berlin, Germany, but I'm available for remote collaborations and speaking engagements
                  worldwide. For in-person events, I'm open to travel depending on availability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
