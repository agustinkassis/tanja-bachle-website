import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className='relative'>
      <div className='absolute inset-0 bg-gradient-to-b from-slate-100 to-white' />
      <div className='container relative px-4 py-12 md:py-24 lg:py-32'>
        <div className='mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12'>
          <div>
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl'>
              Tanja Bächle
            </h1>
            <p className='mt-4 text-xl text-muted-foreground'>
              Author, Event Manager, Community Builder, Public Speaker
            </p>
            <p className='mt-4 text-muted-foreground'>
              Welcome! I'm Tanja — an author, event producer, and freedom
              advocate. I believe in building communities where every voice can
              be heard. Join me on my journey through storytelling, Bitcoin, and
              decentralized technology.
            </p>
            <div className='mt-6 flex flex-col gap-2 min-[400px]:flex-row'>
              <Button
                asChild
                className='bg-rose-500 hover:bg-rose-600 text-white'
              >
                <Link href='/join'>
                  Join My Journey <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button asChild variant='outline'>
                <Link href='/book'>Read The Book</Link>
              </Button>
              <Button asChild variant='outline'>
                <Link href='/media'>Media & Press</Link>
              </Button>
            </div>
          </div>
          <div className='flex justify-center'>
            <Image
              src='/nextjs-github-pages/tanja-profile.jpeg'
              alt='Tanja Bächle'
              width={500}
              height={500}
              className='rounded-lg object-cover shadow-lg'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
