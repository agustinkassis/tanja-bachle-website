import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { NewsletterForm } from "@/components/newsletter-form";

export default function JoinPage() {
  return (
    <div className='container px-4 py-12 md:py-24'>
      <div className='mx-auto max-w-5xl'>
        <div className='grid gap-12 md:grid-cols-2'>
          <div>
            <h1 className='text-4xl font-bold tracking-tighter md:text-5xl'>
              Let's Stay Connected <span className='text-rose-500'>✨</span>
            </h1>
            <p className='mt-4 text-xl text-muted-foreground'>
              Get inspiring updates, behind-the-scenes stories, and early access
              to new projects.
            </p>
            <div className='mt-8'>
              <Image
                src='/nextjs-github-pages/tanja-profile.jpeg'
                alt='Tanja Bächle'
                width={400}
                height={500}
                className='rounded-lg object-cover shadow-lg'
              />
            </div>
          </div>
          <div>
            <div className='rounded-lg bg-rose-50 p-8 shadow-sm'>
              <h2 className='text-2xl font-bold'>Join My Journey</h2>
              <p className='mt-2 text-muted-foreground'>
                I share stories about my work in Bitcoin, decentralized social
                media, writing, and personal growth. Never spammy, always
                authentic.
              </p>
              <div className='mt-6'>
                <NewsletterForm />
              </div>
            </div>
            <div className='mt-8 space-y-4 rounded-lg border p-6'>
              <h3 className='text-xl font-bold'>What You'll Receive</h3>
              <ul className='space-y-3'>
                <li className='flex items-start gap-2'>
                  <CheckCircle2 className='mt-0.5 h-5 w-5 flex-shrink-0 text-rose-500' />
                  <span>Monthly updates on my projects and events</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle2 className='mt-0.5 h-5 w-5 flex-shrink-0 text-rose-500' />
                  <span>
                    Early access to new writing and speaking engagements
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle2 className='mt-0.5 h-5 w-5 flex-shrink-0 text-rose-500' />
                  <span>
                    Insights on Bitcoin, Nostr, and decentralized technologies
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle2 className='mt-0.5 h-5 w-5 flex-shrink-0 text-rose-500' />
                  <span>Personal stories and reflections on my journey</span>
                </li>
              </ul>
              <p className='text-sm text-muted-foreground'>
                I respect your privacy and will never share your information.
                You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
