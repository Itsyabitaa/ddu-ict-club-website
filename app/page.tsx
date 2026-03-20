import Link from "next/link";
import { ArrowRight , Terminal } from "lucide-react";
import Marquee from "@/components/Marquee";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EventCard } from "@/components/EventCard";
 
import { TestimonialCard } from "@/components/TestimonialCard";
import { client } from "@/sanity/lib/client";
import { EventItem } from "@/lib/types";
import { getMegaItem } from "@/lib/mega";

export default async function Home() {
  const megaItem = await getMegaItem();
  const upcomingEvents: EventItem[] = await client.fetch(`*[_type == "event" && status in ["upcoming", "ongoing"]] | order(_createdAt asc)[0...3] {
      "id": _id,
      title,
      description,
      dateLabel,
      timeLabel,
      status,
      recurrence,
      isMega,
      "heroImage": heroImage.asset->url
  }`);

  const siteSettings = await client.fetch(`*[_type == "siteSettings"][0] { memberCount, eventCount, projectCount }`);
  const testimonials = await client.fetch(`*[_type == "testimonial"] | order(_createdAt asc) [0...3] { "id": _id, quote, author, role }`);

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Persistent Animated Background */}
      <div className="fixed inset-0 z-0 bg-lake opacity-50"></div>
      <div className="fixed inset-0 z-0 bg-noise"></div>

      {/* Hero Section - Stack 1 */}
      <section className="stack-section z-[10]">
        {/* Background Grid Pattern (Subtle) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* The "ICT Orb" - Centered Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[120px] animate-pulse-glow"></div>
        
        <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex animate-reveal">
            <span className="border-2 border-foreground px-6 py-2 text-sm font-black uppercase tracking-[0.2em]">
              Dire Dawa University
            </span>
          </div>

          {/* Huge Typography */}
          <div className="space-y-4 animate-reveal [animation-delay:200ms]">
            <h1 className="text-7xl font-black uppercase tracking-tighter sm:text-8xl md:text-9xl lg:text-[12rem] leading-none">
              ICT <span className="text-outline text-transparent" style={{ WebkitTextStroke: '2px hsl(var(--foreground))' }}>CLUB</span>
            </h1>
            <h2 className="text-3xl font-black uppercase tracking-widest sm:text-4xl md:text-5xl opacity-80">
              We Build The Future.
            </h2>
          </div>

          <p className="mt-12 max-w-2xl text-lg md:text-xl text-muted-foreground animate-reveal [animation-delay:400ms] leading-relaxed">
            The premier hub for innovators, hackers, and creators at DDU. <br className="hidden md:block"/>
            Turning coffee into code and ideas into reality.
          </p>

          {/* CTAs */}
          <div className="mt-16 flex flex-col gap-6 sm:flex-row animate-reveal [animation-delay:600ms]">
            <Button asChild size="lg" className="group">
              <Link href="/register" className="flex items-center">
                Join the Movement <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                Explore Club
              </Link>
            </Button>
          </div>
        </div>

        {/* Marquee Effect (Premium) */}
        <div className="absolute bottom-0 w-full border-t border-border bg-background/50 backdrop-blur-sm py-6 overflow-hidden">
          <Marquee className="[--gap:4rem]" repeat={5}>
            <span className="text-sm font-black tracking-[0.4em] text-foreground/30 mx-8 uppercase">• INNOVATION • LEADERSHIP • EXCELLENCE • COMMUNITY • DISCOVERY •</span>
          </Marquee>
        </div>
      </section>

      {/* Bento Grid Section - Stack 2 */}
      <section className="stack-section z-[20] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Mega Item Cell (Span 2) */}
            <div className="md:col-span-2 bg-background border-2 border-border p-8 md:p-10 relative overflow-hidden group min-h-[350px] flex flex-col justify-end transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))]">
              <div className="absolute top-6 left-6 z-10">
                <Badge variant="default" className="rounded-none uppercase tracking-widest text-[10px] font-black px-3 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">Featured</Badge>
              </div>
              {megaItem ? (
                <div className="relative z-10 max-w-xl pr-6">
                  <div className="h-[2px] w-8 bg-primary transition-all duration-500 ease-out group-hover:w-full mb-6" />
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 group-hover:text-primary transition-colors duration-300">
                    {megaItem.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 line-clamp-3 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {megaItem.type === 'event' ? (megaItem as EventItem).description : (megaItem as any).excerpt}
                  </p>
                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    <Link href={megaItem.type === 'event' ? `/events` : `/blog/${(megaItem as any).slug}`} className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-foreground hover:text-primary transition-all duration-300">
                      Full Story <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="text-muted-foreground/30 text-sm font-mono select-none group-hover:text-primary/50 transition-colors">↗</span>
                  </div>
                </div>
              ) : (
                <div className="relative z-10 flex flex-col justify-end h-full">
                  <Terminal className="h-32 w-32 text-foreground mb-6 opacity-10 group-hover:text-primary group-hover:opacity-20 transition-all duration-500" />
                  <h2 className="text-5xl font-black tracking-tighter mb-4 group-hover:text-primary transition-colors">DDU ICT Events</h2>
                  <p className="text-xl text-muted-foreground mb-8">Discover what we are building and hosting today.</p>
                  <div className="pt-6 border-t border-border flex items-center justify-between">
                    <Link href="/events" className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-foreground hover:text-primary transition-all duration-300">
                      View All Events <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <span className="text-muted-foreground/30 text-sm font-mono select-none group-hover:text-primary/50 transition-colors">↗</span>
                  </div>
                </div>
              )}
              {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 w-full h-0 opacity-0 group-hover:h-1 group-hover:opacity-100 bg-primary transition-all duration-300 ease-out" />
            </div>

            {/* Stats Cell */}
            <div className="bg-background border-2 border-border p-8 flex flex-col justify-center space-y-8 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-primary hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))] group relative overflow-hidden">
               <div className="absolute top-6 right-6 z-10">
                <Badge variant="default" className="rounded-none uppercase tracking-widest text-[10px] font-black px-3 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">Stats</Badge>
              </div>
              <div className="h-[2px] w-8 bg-primary transition-all duration-500 ease-out group-hover:w-full absolute top-[80px] left-10" />

              <div className="space-y-3 z-10 mt-8">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors">Members</span>
                <div className="text-5xl font-black tracking-tighter group-hover:text-primary transition-colors">{siteSettings?.memberCount || "500+"}</div>
              </div>
              <div className="h-[1px] bg-border w-full opacity-50 z-10" />
              <div className="space-y-3 z-10">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors">Events</span>
                <div className="text-5xl font-black tracking-tighter group-hover:text-primary transition-colors">{siteSettings?.eventCount || "20+"}</div>
              </div>
              <div className="h-[1px] bg-border w-full opacity-50 z-10" />
              <div className="space-y-3 z-10">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors">Projects</span>
                <div className="text-5xl font-black tracking-tighter group-hover:text-primary transition-colors">{siteSettings?.projectCount || "15"}</div>
              </div>
               {/* Bottom border accent */}
              <div className="absolute bottom-0 left-0 w-full h-0 opacity-0 group-hover:h-1 group-hover:opacity-100 bg-primary transition-all duration-300 ease-out" />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section - Stack 3 */}
      <section className="stack-section z-[30] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-16 px-2">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter sm:text-7xl">Upcoming</h2>
              <p className="text-xl text-muted-foreground mt-4 tracking-wide font-medium font-sans">Don&apos;t miss out on the action.</p>
            </div>
            <Button asChild variant="outline" className="hidden sm:flex border-2">
              <Link href="/events" className="group">
                View All <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {upcomingEvents.map((event, i) => (
              <div key={event.id} className="transition-all duration-500 hover:-translate-y-2">
                <EventCard event={event} />
              </div>
            ))}
          </div>

          <Button asChild variant="outline" className="w-full mt-12 sm:hidden rounded-none border-2 h-14">
            <Link href="/events">
              View All Events
            </Link>
          </Button>
        </div>
      </section>

      {/* Community Section - Stack 4 */}
      <section className="stack-section z-[40] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-4 text-center mb-20">
          <h2 className="text-5xl font-black uppercase tracking-tighter sm:text-7xl mb-6">Community</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed font-sans">
            Hear from the students, developers, and leaders who make our community thrive.
          </p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials && testimonials.length > 0 ? (
            testimonials.map((t: any) => (
              <TestimonialCard key={t.id} quote={t.quote} author={t.author} role={t.role} />
            ))
          ) : (
            <>
              <TestimonialCard
                quote="The DDU ICT Club changed my life. I went from knowing nothing to building full-stack apps."
                author="Abebe K."
                role="Software Engineering"
              />
              <TestimonialCard
                quote="A place where innovation meets passion. The mentorship here is unmatched."
                author="Sara M."
                role="Club Vice President"
              />
              <TestimonialCard
                quote="The hackathons are intense but incredibly rewarding. Best community on campus!"
                author="Dawit T."
                role="3rd Year CS"
              />
            </>
          )}
        </div>
      </section>
    </main>
  );
}
