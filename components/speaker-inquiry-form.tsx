"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export function SpeakerInquiryForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [message, setMessage] = useState("")
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
      setOrganization("")
      setDate(undefined)
      setMessage("")
      toast({
        title: "Request sent!",
        description: "Thank you for your inquiry. I'll get back to you soon.",
      })
    }, 1000)
  }

  return (
    <div>
      {isSuccess ? (
        <div className="rounded-lg bg-green-50 p-6 text-center">
          <h3 className="text-xl font-medium text-green-800">Request Sent! ✨</h3>
          <p className="mt-2 text-green-700">
            Thank you for your inquiry. I'll review your request and get back to you soon.
          </p>
          <Button variant="outline" className="mt-4" onClick={() => setIsSuccess(false)}>
            Submit another request
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
            <Label htmlFor="organization">Organization</Label>
            <Input
              id="organization"
              placeholder="Company, podcast, or event name"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Event date (if known)</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Description or message</Label>
            <Textarea
              id="message"
              placeholder="Please describe your event, desired topic, and any other relevant details..."
              className="min-h-[150px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white uppercase"
          >
            {isLoading ? "Processing..." : "Send Request"}
          </Button>
        </form>
      )}
    </div>
  )
}
