"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [nostrPreferred, setNostrPreferred] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
      setNostrPreferred(false)
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
    }, 1000)
  }

  return (
    <div>
      {isSuccess ? (
        <div className="rounded-lg bg-green-50 p-6 text-center">
          <h3 className="text-xl font-medium text-green-800">Message Sent! ❤</h3>
          <p className="mt-2 text-green-700">Thank you for reaching out. I'll get back to you as soon as possible.</p>
          <Button variant="outline" className="mt-4" onClick={() => setIsSuccess(false)}>
            Send another message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Select value={subject} onValueChange={setSubject} required>
              <SelectTrigger id="subject">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="General">General</SelectItem>
                <SelectItem value="Media Inquiry">Media Inquiry</SelectItem>
                <SelectItem value="Collaboration">Collaboration</SelectItem>
                <SelectItem value="Event">Event</SelectItem>
                <SelectItem value="Feedback">Feedback</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your message..."
              className="min-h-[150px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="nostr-preferred"
              checked={nostrPreferred}
              onCheckedChange={(checked) => setNostrPreferred(checked as boolean)}
            />
            <Label htmlFor="nostr-preferred" className="text-sm font-normal">
              I prefer to be contacted via Nostr
            </Label>
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white uppercase"
          >
            {isLoading ? (
              <span>Sending...</span>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" /> Send Message ❤
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  )
}
