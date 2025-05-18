import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className='container px-4 py-12 md:py-24'>
      <div className='mx-auto max-w-5xl'>
        <div className='grid gap-12 md:grid-cols-3'>
          <div className='md:col-span-1'>
            <div className='sticky top-24'>
              <Image
                src='/nextjs-github-pages/tanja-profile.jpeg'
                alt='Tanja Bächle'
                width={300}
                height={400}
                className='rounded-lg object-cover shadow-lg'
              />
              <div className='mt-6 space-y-4'>
                <h3 className='text-xl font-bold'>Tanja Bächle</h3>
                <p className='text-sm text-muted-foreground'>
                  Also writing as T.D. Forest
                </p>
                <div className='space-y-1 text-sm'>
                  <p>Event Manager</p>
                  <p>Author</p>
                  <p>Community Builder</p>
                  <p>Public Speaker</p>
                </div>
                <p className='text-sm text-muted-foreground'>Berlin, Germany</p>
                <Button asChild className='w-full'>
                  <Link href='/contact'>
                    Contact Me <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className='md:col-span-2'>
            <h1 className='text-4xl font-bold tracking-tighter md:text-5xl'>
              About Me
            </h1>
            <div className='mt-8 space-y-8'>
              <div>
                <h2 className='text-2xl font-bold'>Early Career</h2>
                <p className='mt-4'>
                  Welcome! I'm Tanja — an author, event producer, and freedom
                  advocate. I believe in building communities where every voice
                  can be heard. My journey began in the event management
                  industry, where I honed my skills in bringing people together
                  and creating meaningful experiences.
                </p>
              </div>
              <div>
                <h2 className='text-2xl font-bold'>Breakdown & Thailand</h2>
                <p className='mt-4'>
                  Life took an unexpected turn when I experienced burnout and
                  mental health challenges. This led me to Thailand, where I
                  began a journey of healing and self-discovery. During this
                  transformative period, I started writing what would eventually
                  become my book, "The Extraordinary / Zwischen nackt und
                  narkotisiert," published under the pseudonym T.D. Forest.
                </p>
              </div>
              <div>
                <h2 className='text-2xl font-bold'>Bitcoin & Community Work</h2>
                <p className='mt-4'>
                  My path to recovery introduced me to Bitcoin and decentralized
                  technologies, which resonated deeply with my values of freedom
                  and self-sovereignty. I became passionate about these
                  technologies and their potential to empower individuals. This
                  led me to organize the Nostr Booth Initiative at Bitcoin
                  conferences, helping others understand and adopt decentralized
                  social media platforms.
                </p>
              </div>
              <div>
                <h2 className='text-2xl font-bold'>Present Day</h2>
                <p className='mt-4'>
                  Today, I combine my experience in event production,
                  storytelling, and community building to advocate for
                  decentralized technologies and personal empowerment. I speak
                  at conferences, appear on podcasts, and continue to write and
                  organize events that bring people together around these
                  important topics.
                </p>
              </div>
              <div className='rounded-lg bg-slate-50 p-6'>
                <h2 className='text-2xl font-bold'>My Mission</h2>
                <blockquote className='mt-4 border-l-4 border-rose-300 pl-4 italic'>
                  "I believe in building communities where every voice can be
                  heard. Join me on my journey through storytelling, Bitcoin,
                  and decentralized technology."
                </blockquote>
              </div>
            </div>
            <div className='mt-12'>
              <h2 className='text-2xl font-bold'>Timeline</h2>
              <div className='mt-6 space-y-6'>
                <Card>
                  <CardContent className='p-6'>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-lg font-bold'>2022</h3>
                      <span className='rounded-full bg-rose-100 px-3 py-1 text-sm text-rose-700'>
                        Published
                      </span>
                    </div>
                    <p className='mt-2'>
                      Published "The Extraordinary / Zwischen nackt und
                      narkotisiert" under the pseudonym T.D. Forest
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className='p-6'>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-lg font-bold'>2023</h3>
                      <span className='rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700'>
                        Initiative
                      </span>
                    </div>
                    <p className='mt-2'>
                      Founded the Nostr Booth Initiative at Bitcoin conferences
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className='p-6'>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-lg font-bold'>2025</h3>
                      <span className='rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700'>
                        Speaking
                      </span>
                    </div>
                    <p className='mt-2'>Speaker at BITCOIN FACHEXPERTEN</p>
                    <p className='mt-1 text-sm text-muted-foreground'>
                      Largest Bitcoin german speaking conference
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
