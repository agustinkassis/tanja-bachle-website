import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Calendar, Mic } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeroSection } from "@/components/hero-section";
import { NewsletterSignup } from "@/components/newsletter-signup";

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <HeroSection />

      <section className='container px-4 py-12 md:py-24 lg:py-32'>
        <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
          <div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              About Me
            </h2>
            <p className='mt-4 text-muted-foreground'>
              I'm Tanja — an author, event producer, and freedom advocate. I
              believe in building communities where every voice can be heard.
              Join me on my journey through storytelling, Bitcoin, and
              decentralized technology.
            </p>
            <div className='mt-6 flex flex-col gap-2 min-[400px]:flex-row'>
              <Button asChild>
                <Link href='/about'>
                  Learn More <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>
          </div>
          <div className='flex justify-center'>
            <Image
              src='/nextjs-github-pages/conference-speaker.png'
              alt='Tanja Bächle speaking at a conference'
              width={400}
              height={400}
              className='rounded-lg object-cover'
              priority
            />
          </div>
        </div>
      </section>

      <section className='bg-slate-50 py-12 md:py-24 lg:py-32'>
        <div className='container px-4'>
          <div className='mx-auto max-w-5xl'>
            <h2 className='text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Featured Work
            </h2>
            <p className='mt-4 text-center text-muted-foreground'>
              Explore my projects, writing, and community initiatives
            </p>
            <Tabs defaultValue='book' className='mt-12'>
              <TabsList className='grid w-full grid-cols-3'>
                <TabsTrigger value='book'>Book</TabsTrigger>
                <TabsTrigger value='projects'>Projects</TabsTrigger>
                <TabsTrigger value='speaking'>Speaking</TabsTrigger>
              </TabsList>
              <TabsContent value='book' className='mt-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      The Extraordinary / Zwischen nackt und narkotisiert
                    </CardTitle>
                    <CardDescription>
                      Published in 2022 under the pseudonym T.D. Forest
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='grid gap-6 md:grid-cols-2'>
                    <div className='flex justify-center'>
                      <Image
                        src='/nextjs-github-pages/the-extraordinary-book-cover.png'
                        alt='The Extraordinary book cover'
                        width={200}
                        height={300}
                        className='rounded-md shadow-lg'
                      />
                    </div>
                    <div>
                      <p className='mb-4'>
                        A personal journey of transformation, mental health, and
                        recovery, sharing insights that can help others navigate
                        their own challenges.
                      </p>
                      <div className='flex flex-wrap gap-2'>
                        <Button variant='outline' size='sm'>
                          <BookOpen className='mr-2 h-4 w-4' /> Amazon DE
                        </Button>
                        <Button variant='outline' size='sm'>
                          <BookOpen className='mr-2 h-4 w-4' /> Amazon EN
                        </Button>
                        <Button variant='outline' size='sm'>
                          <BookOpen className='mr-2 h-4 w-4' /> story.one
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant='ghost'>
                      <Link href='/book'>
                        Learn more about the book{" "}
                        <ArrowRight className='ml-2 h-4 w-4' />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value='projects' className='mt-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>Nostr Booth Initiative</CardTitle>
                    <CardDescription>
                      Promoting decentralized social media at Bitcoin
                      conferences
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='grid gap-6 md:grid-cols-2'>
                      <div className='flex justify-center'>
                        <Image
                          src='/nextjs-github-pages/placeholder-pzjo9.png'
                          alt='Nostr Booth at a Bitcoin conference'
                          width={400}
                          height={300}
                          className='rounded-md shadow-lg'
                        />
                      </div>
                      <div>
                        <p>
                          I organize and lead the Nostr Booth Initiative at
                          Bitcoin conferences worldwide, helping people
                          understand and adopt decentralized social media
                          platforms.
                        </p>
                        <div className='mt-4 flex flex-wrap gap-2'>
                          <Button variant='outline' size='sm'>
                            <Calendar className='mr-2 h-4 w-4' /> Past Events
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant='ghost'>
                      <Link href='/projects'>
                        View all projects{" "}
                        <ArrowRight className='ml-2 h-4 w-4' />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value='speaking' className='mt-6'>
                <Card>
                  <CardHeader>
                    <CardTitle>Speaking Engagements</CardTitle>
                    <CardDescription>
                      Conferences, podcasts, and community events
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='grid gap-6 md:grid-cols-2'>
                      <div className='flex justify-center'>
                        <Image
                          src='/nextjs-github-pages/tech-conference-speaker.png'
                          alt='Tanja speaking at a conference'
                          width={400}
                          height={300}
                          className='rounded-md shadow-lg'
                        />
                      </div>
                      <div>
                        <p>
                          I speak about Bitcoin, decentralized social media,
                          personal transformation, and community building at
                          conferences and on podcasts.
                        </p>
                        <div className='mt-4 space-y-2'>
                          <div className='flex items-center gap-2'>
                            <Mic className='h-4 w-4 text-slate-500' />
                            <span>BITCOIN FACHEXPERTEN</span>
                          </div>
                          <div className='flex items-center gap-2 ml-6 text-xs text-slate-500'>
                            <span>
                              Largest Bitcoin german speaking conference
                            </span>
                          </div>
                          <div className='flex items-center gap-2'>
                            <Mic className='h-4 w-4 text-slate-500' />
                            <span>DJ Valerie B Love Podcast</span>
                          </div>
                          <div className='flex items-center gap-2'>
                            <Mic className='h-4 w-4 text-slate-500' />
                            <span>Bitcoin Audible</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant='ghost'>
                      <Link href='/media'>
                        View all appearances{" "}
                        <ArrowRight className='ml-2 h-4 w-4' />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className='container px-4 py-12 md:py-24 lg:py-32'>
        <div className='mx-auto max-w-5xl'>
          <div className='rounded-lg bg-slate-100 p-8'>
            <div className='grid gap-8 md:grid-cols-2'>
              <div>
                <h2 className='text-3xl font-bold tracking-tighter'>
                  Stay Connected
                </h2>
                <p className='mt-4 text-muted-foreground'>
                  Join my newsletter to receive updates on my latest projects,
                  events, and insights.
                </p>
              </div>
              <div>
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
