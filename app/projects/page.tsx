import Image from "next/image";
import { Calendar, LinkIcon, Users } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
  return (
    <div className='container px-4 py-12 md:py-24'>
      <div className='mx-auto max-w-5xl'>
        <h1 className='text-4xl font-bold tracking-tighter md:text-5xl'>
          Projects & Initiatives
        </h1>
        <p className='mt-4 text-xl text-muted-foreground'>
          Exploring decentralization, community building, and personal
          empowerment
        </p>

        <div className='mt-12 space-y-12'>
          <Card>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <div>
                  <CardTitle>Nostr Booth Initiative</CardTitle>
                  <CardDescription>
                    Promoting decentralized social media at Bitcoin conferences
                  </CardDescription>
                </div>
                <Badge className='bg-rose-500 hover:bg-rose-600'>
                  Featured
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className='grid gap-6 md:grid-cols-2'>
                <div>
                  <Image
                    src='/nextjs-github-pages/placeholder-pzjo9.png'
                    alt='Nostr Booth at a Bitcoin conference'
                    width={500}
                    height={300}
                    className='rounded-lg object-cover shadow-lg'
                  />
                </div>
                <div>
                  <p>
                    The Nostr Booth Initiative is a grassroots effort to promote
                    and educate people about Nostr, a decentralized social media
                    protocol. At Bitcoin conferences worldwide, we set up booths
                    where attendees can learn about Nostr, create accounts, and
                    join the growing community of users.
                  </p>
                  <div className='mt-6 space-y-4'>
                    <div className='flex items-center gap-2'>
                      <Calendar className='h-5 w-5 text-slate-500' />
                      <span>Started in 2023</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Users className='h-5 w-5 text-slate-500' />
                      <span>Helped onboard 500+ users to Nostr</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <LinkIcon className='h-5 w-5 text-slate-500' />
                      <a href='#' className='text-rose-500 hover:underline'>
                        nostr.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Organization</CardTitle>
              <CardDescription>
                Creating meaningful gatherings and conferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-6 md:grid-cols-2'>
                <div>
                  <Image
                    src='/nextjs-github-pages/placeholder.svg?height=300&width=500&query=event venue with people networking'
                    alt='Event organization'
                    width={500}
                    height={300}
                    className='rounded-lg object-cover shadow-lg'
                  />
                </div>
                <div>
                  <p>
                    With my background in event management, I organize and
                    facilitate gatherings that bring together communities around
                    Bitcoin, decentralized technologies, and personal growth.
                    These events range from intimate workshops to large
                    conference segments.
                  </p>
                  <div className='mt-6 space-y-4'>
                    <div className='flex items-center gap-2'>
                      <Calendar className='h-5 w-5 text-slate-500' />
                      <span>10+ years of event management experience</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Users className='h-5 w-5 text-slate-500' />
                      <span>Events ranging from 20 to 1000+ attendees</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Building</CardTitle>
              <CardDescription>
                Fostering connections and support networks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='grid gap-6 md:grid-cols-2'>
                <div>
                  <Image
                    src='/nextjs-github-pages/placeholder.svg?height=300&width=500&query=diverse group of people in community meeting'
                    alt='Community building'
                    width={500}
                    height={300}
                    className='rounded-lg object-cover shadow-lg'
                  />
                </div>
                <div>
                  <p>
                    I'm passionate about creating and nurturing communities
                    where people can connect, learn, and grow together. My
                    community building work focuses on creating inclusive spaces
                    where diverse perspectives are valued and everyone has a
                    voice.
                  </p>
                  <div className='mt-6 space-y-4'>
                    <div className='flex items-center gap-2'>
                      <Users className='h-5 w-5 text-slate-500' />
                      <span>Focus on inclusivity and diverse perspectives</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Calendar className='h-5 w-5 text-slate-500' />
                      <span>
                        Regular community meetups and online gatherings
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Initiatives</CardTitle>
              <CardDescription>
                Future projects and collaborations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-6'>
                <p>
                  I'm constantly exploring new ways to combine my passions for
                  storytelling, community building, and decentralized
                  technologies. Stay tuned for upcoming projects and
                  collaborations.
                </p>
                <div className='grid gap-4 sm:grid-cols-2'>
                  <Card>
                    <CardContent className='p-6'>
                      <h3 className='font-bold'>Workshop Series</h3>
                      <p className='mt-2 text-sm'>
                        Upcoming workshops on personal storytelling and
                        transformation
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className='p-6'>
                      <h3 className='font-bold'>Writing Projects</h3>
                      <p className='mt-2 text-sm'>
                        New writing projects exploring the intersection of
                        technology and personal growth
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
