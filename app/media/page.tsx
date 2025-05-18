import Image from "next/image";
import { Calendar, ExternalLink, Mic } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MediaPage() {
  return (
    <div className='container px-4 py-12 md:py-24'>
      <div className='mx-auto max-w-5xl'>
        <h1 className='text-4xl font-bold tracking-tighter md:text-5xl'>
          Media & Press
        </h1>
        <p className='mt-4 text-xl text-muted-foreground'>
          Interviews, podcasts, and press coverage
        </p>

        <Tabs defaultValue='appearances' className='mt-12'>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='appearances'>Appearances</TabsTrigger>
            <TabsTrigger value='press-kit'>Press Kit</TabsTrigger>
            <TabsTrigger value='contact'>Media Contact</TabsTrigger>
          </TabsList>

          <TabsContent value='appearances' className='mt-6'>
            <div className='space-y-8'>
              <Card>
                <CardHeader>
                  <CardTitle>BITCOIN FACHEXPERTEN</CardTitle>
                  <CardDescription>
                    Largest Bitcoin german speaking conference
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='grid gap-6 md:grid-cols-2'>
                    <div>
                      <Image
                        src='/nextjs-github-pages/bitcoin-conference-speaker.png'
                        alt='Speaking at BITCOIN FACHEXPERTEN'
                        width={500}
                        height={300}
                        className='rounded-lg object-cover shadow-lg'
                      />
                    </div>
                    <div>
                      <p>
                        I spoke at BITCOIN FACHEXPERTEN about the importance of
                        decentralized social media and my experience with the
                        Nostr Booth Initiative. The talk focused on community
                        building and grassroots adoption of new technologies.
                      </p>
                      <div className='mt-6 space-y-4'>
                        <div className='flex items-center gap-2'>
                          <Calendar className='h-5 w-5 text-slate-500' />
                          <span>March 15, 2025</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Mic className='h-5 w-5 text-slate-500' />
                          <span>
                            Topic: "Building Communities Around Decentralized
                            Technologies"
                          </span>
                        </div>
                        <Button variant='outline' size='sm' className='mt-2'>
                          <ExternalLink className='mr-2 h-4 w-4' /> Watch
                          Recording
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>DJ Valerie B Love Podcast</CardTitle>
                  <CardDescription>Podcast Interview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='grid gap-6 md:grid-cols-2'>
                    <div>
                      <Image
                        src='/nextjs-github-pages/podcast-interview-setup.png'
                        alt='DJ Valerie B Love Podcast'
                        width={500}
                        height={300}
                        className='rounded-lg object-cover shadow-lg'
                      />
                    </div>
                    <div>
                      <p>
                        I was interviewed on the DJ Valerie B Love Podcast about
                        my book "The Extraordinary" and my journey from burnout
                        to finding purpose through writing and community
                        building.
                      </p>
                      <div className='mt-6 space-y-4'>
                        <div className='flex items-center gap-2'>
                          <Calendar className='h-5 w-5 text-slate-500' />
                          <span>November 10, 2024</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Mic className='h-5 w-5 text-slate-500' />
                          <span>
                            Episode: "Finding Your Voice Through Adversity"
                          </span>
                        </div>
                        <Button variant='outline' size='sm' className='mt-2'>
                          <ExternalLink className='mr-2 h-4 w-4' /> Listen to
                          Episode
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Bitcoin Audible</CardTitle>
                  <CardDescription>Podcast Interview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='grid gap-6 md:grid-cols-2'>
                    <div>
                      <Image
                        src='/nextjs-github-pages/bitcoin-podcast-studio.png'
                        alt='Bitcoin Audible Podcast'
                        width={500}
                        height={300}
                        className='rounded-lg object-cover shadow-lg'
                      />
                    </div>
                    <div>
                      <p>
                        I appeared on Bitcoin Audible to discuss the Nostr Booth
                        Initiative and the importance of decentralized social
                        media in the Bitcoin ecosystem. We explored the
                        challenges and opportunities of community-driven
                        adoption.
                      </p>
                      <div className='mt-6 space-y-4'>
                        <div className='flex items-center gap-2'>
                          <Calendar className='h-5 w-5 text-slate-500' />
                          <span>July 22, 2024</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Mic className='h-5 w-5 text-slate-500' />
                          <span>
                            Episode: "Decentralized Social Media and the Future
                            of Communication"
                          </span>
                        </div>
                        <Button variant='outline' size='sm' className='mt-2'>
                          <ExternalLink className='mr-2 h-4 w-4' /> Listen to
                          Episode
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value='press-kit' className='mt-6'>
            <Card>
              <CardHeader>
                <CardTitle>Press Kit</CardTitle>
                <CardDescription>
                  Resources for media and press inquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-8'>
                  <div>
                    <h3 className='text-xl font-bold'>Official Bio</h3>
                    <div className='mt-4 rounded-lg bg-slate-50 p-6'>
                      <p>
                        Tanja Bächle is an author (writing as T.D. Forest),
                        event manager, community builder, and public speaker
                        based in Berlin, Germany. Her work focuses on
                        decentralized social media, Bitcoin, personal
                        transformation, and community building. She is the
                        author of "The Extraordinary / Zwischen nackt und
                        narkotisiert" (2022) and the organizer of the Nostr
                        Booth Initiative at Bitcoin conferences worldwide. Tanja
                        speaks fluent German and English and is available for
                        speaking engagements, interviews, and collaborations.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-xl font-bold'>Approved Images</h3>
                    <div className='mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
                      <div>
                        <Image
                          src='/nextjs-github-pages/placeholder.svg?height=300&width=300&query=professional headshot of woman'
                          alt='Tanja Bächle Headshot'
                          width={300}
                          height={300}
                          className='rounded-lg object-cover shadow-lg'
                        />
                        <p className='mt-2 text-sm text-muted-foreground'>
                          Professional Headshot
                        </p>
                      </div>
                      <div>
                        <Image
                          src='/nextjs-github-pages/placeholder.svg?height=300&width=300&query=woman speaking at conference'
                          alt='Tanja Bächle Speaking'
                          width={300}
                          height={300}
                          className='rounded-lg object-cover shadow-lg'
                        />
                        <p className='mt-2 text-sm text-muted-foreground'>
                          Speaking Engagement
                        </p>
                      </div>
                      <div>
                        <Image
                          src='/nextjs-github-pages/placeholder.svg?height=300&width=300&query=casual portrait of woman outdoors'
                          alt='Tanja Bächle Casual'
                          width={300}
                          height={300}
                          className='rounded-lg object-cover shadow-lg'
                        />
                        <p className='mt-2 text-sm text-muted-foreground'>
                          Casual Portrait
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className='text-xl font-bold'>Topics of Expertise</h3>
                    <div className='mt-4 grid gap-4 sm:grid-cols-2'>
                      <Card>
                        <CardContent className='p-6'>
                          <h4 className='font-bold'>
                            Decentralized Social Media
                          </h4>
                          <p className='mt-2 text-sm'>
                            Nostr, decentralized protocols, community adoption
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className='p-6'>
                          <h4 className='font-bold'>
                            Bitcoin & Financial Sovereignty
                          </h4>
                          <p className='mt-2 text-sm'>
                            Bitcoin adoption, community building, education
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className='p-6'>
                          <h4 className='font-bold'>Personal Transformation</h4>
                          <p className='mt-2 text-sm'>
                            Mental health, burnout recovery, finding purpose
                          </p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className='p-6'>
                          <h4 className='font-bold'>Event Production</h4>
                          <p className='mt-2 text-sm'>
                            Community events, conference organization,
                            grassroots initiatives
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='contact' className='mt-6'>
            <Card>
              <CardHeader>
                <CardTitle>Media Contact</CardTitle>
                <CardDescription>
                  For press inquiries and interview requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-6'>
                  <p>
                    If you're a journalist, podcast host, or event organizer
                    interested in featuring Tanja Bächle, please use the contact
                    information below or fill out the contact form.
                  </p>
                  <div className='rounded-lg bg-slate-50 p-6'>
                    <h3 className='text-xl font-bold'>Contact Information</h3>
                    <div className='mt-4 space-y-2'>
                      <p>Email: media@tanjabachle.com</p>
                      <p>Response time: Within 48 hours</p>
                    </div>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold'>Available For</h3>
                    <ul className='mt-4 list-inside list-disc space-y-2'>
                      <li>Podcast interviews</li>
                      <li>Conference speaking</li>
                      <li>Panel discussions</li>
                      <li>Written interviews</li>
                      <li>Expert commentary</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
