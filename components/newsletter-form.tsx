"use client"

import type React from "react"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [bitcoinUpdates, setBitcoinUpdates] = useState(false)
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
      setEmail("")
      setBitcoinUpdates(false)
      toast({
        title: "Success!",
        description: "You've been subscribed to the newsletter.",
      })
    }, 1000)
  }

  return (
    <div>
      {isSuccess ? (
        <div className="rounded-lg bg-green-50 p-6 text-center">
          <h3 className="text-xl font-medium text-green-800">Thanks for subscribing! ❤</h3>
          <p className="mt-2 text-green-700">You'll hear from me soon.</p>
          <Button variant="outline" className="mt-4" onClick={() => setIsSuccess(false)}>
            Subscribe another email
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              placeholder="your.email@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="bitcoin-updates"
              checked={bitcoinUpdates}
              onCheckedChange={(checked) => setBitcoinUpdates(checked as boolean)}
            />
            <Label htmlFor="bitcoin-updates" className="text-sm font-normal">
              I'm interested in Bitcoin & Nostr updates
            </Label>
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white uppercase"
          >
            {isLoading ? (
              <span>Processing...</span>
            ) : (
              <>
                <span>Join My Journey</span> <span className="ml-1">✨</span>
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground">
            By subscribing, you agree to receive updates and marketing emails. You can unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  )
}
