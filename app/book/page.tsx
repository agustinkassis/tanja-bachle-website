import Image from "next/image";
import { BookOpen, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function BookPage() {
  return (
    <div className='container px-4 py-12 md:py-24'>
      <div className='mx-auto max-w-5xl'>
        <div className='grid gap-12 md:grid-cols-3'>
          <div className='md:col-span-1'>
            <div className='sticky top-24'>
              <Image
                src='/nextjs-github-pages/the-extraordinary-book-cover.png'
                alt='The Extraordinary book cover'
                width={350}
                height={500}
                className='rounded-lg object-cover shadow-lg'
              />
              <div className='mt-6 space-y-4'>
                <h3 className='text-xl font-bold'>The Extraordinary</h3>
                <p className='text-sm text-muted-foreground'>
                  Zwischen nackt und narkotisiert
                </p>
                <p className='text-sm text-muted-foreground'>
                  Published in 2022
                </p>
                <p className='text-sm text-muted-foreground'>
                  Author: T.D. Forest
                </p>
                <div className='space-y-2'>
                  <Button className='w-full bg-rose-500 hover:bg-rose-600 text-white'>
                    <BookOpen className='mr-2 h-4 w-4' /> Buy Now on Amazon DE
                  </Button>
                  <Button className='w-full bg-rose-500 hover:bg-rose-600 text-white'>
                    <BookOpen className='mr-2 h-4 w-4' /> Buy Now on Amazon EN
                  </Button>
                  <Button className='w-full bg-rose-500 hover:bg-rose-600 text-white'>
                    <BookOpen className='mr-2 h-4 w-4' /> Buy Now on story.one
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='md:col-span-2'>
            <h1 className='text-4xl font-bold tracking-tighter md:text-5xl'>
              The Extraordinary
            </h1>
            <p className='mt-2 text-xl text-muted-foreground'>
              Zwischen nackt und narkotisiert
            </p>

            <div className='mt-6 rounded-lg bg-slate-50 p-6'>
              <p className='text-xl italic font-serif'>
                "Addiction. Ambition. The search for self-love. One woman's
                story of survival."
              </p>
            </div>

            <div className='mt-8 space-y-6 font-serif'>
              <p>
                "The Extraordinary" is a deeply personal account of
                transformation, mental health, and recovery. Written during a
                pivotal time in my life, this book shares insights and
                experiences that can help others navigate their own challenges.
              </p>
              <p>
                The journey begins with a breakdown—a moment when everything I
                thought I knew about myself and my life came crashing down. From
                the depths of burnout and addiction to the slow, painful process
                of rebuilding, this story traces the path of healing and
                self-discovery that led me to where I am today.
              </p>
              <p>
                Through raw, honest storytelling, I explore the complexities of
                mental health, the search for identity, and the courage it takes
                to rebuild a life on your own terms.
              </p>

              <div className='flex justify-center'>
                <Button variant='outline' className='mt-4'>
                  <ExternalLink className='mr-2 h-4 w-4' /> Read Sample Chapter
                  (PDF)
                </Button>
              </div>
            </div>

            <Separator className='my-8' />

            <div>
              <h2 className='text-2xl font-bold'>Reader Testimonials</h2>
              <div className='mt-4 space-y-4'>
                <blockquote className='rounded-lg bg-white p-6 shadow-sm'>
                  <p className='font-serif italic'>
                    "A powerful and moving account of personal transformation.
                    T.D. Forest's honesty and vulnerability shine through on
                    every page. This book came to me at exactly the right moment
                    in my life."
                  </p>
                  <p className='mt-4 text-right font-medium'>
                    — Maria K., Berlin
                  </p>
                </blockquote>
                <blockquote className='rounded-lg bg-white p-6 shadow-sm'>
                  <p className='font-serif italic'>
                    "Raw, unflinching, and ultimately hopeful. This memoir takes
                    you on a journey through darkness and into light. I couldn't
                    put it down and found myself reflecting on my own life
                    choices long after I finished the final page."
                  </p>
                  <p className='mt-4 text-right font-medium'>
                    — Thomas L., Hamburg
                  </p>
                </blockquote>
              </div>
            </div>

            <Separator className='my-8' />

            <div>
              <h2 className='text-2xl font-bold'>About T.D. Forest</h2>
              <p className='mt-4'>
                T.D. Forest is the pseudonym I use for my literary work. The
                name represents a space where I can explore and express deeply
                personal experiences and insights. Through this alter ego, I've
                been able to share vulnerable parts of my journey that might
                otherwise have remained private.
              </p>
              <p className='mt-4'>
                Writing under this name has allowed me to connect with readers
                on a profound level, creating a bridge between my experiences
                and their own journeys of growth and transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
