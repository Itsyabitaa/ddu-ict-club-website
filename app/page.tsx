import Link from "next/link";
import { ArrowRight , Terminal } from "lucide-react";
import Marquee from "@/components/Marquee";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EventCard } from "@/components/EventCard";
 
import { TestimonialCard } from "@/components/TestimonialCard";
import eventsData from "@/data/events.json";
import { EventItem } from "@/lib/types";
import { getMegaItem } from "@/lib/mega";

export default async function Home() {
  const megaItem = await getMegaItem();
  const upcomingEvents = (eventsData as EventItem[])
    .filter((e) => e.status === "upcoming" || e.status === "ongoing")
    .slice(0, 3);

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-border border-2 border-border glow-sm transition-all hover:glow-md glass-premium">
            {/* Mega Item Cell (Span 2) */}
            <div className="md:col-span-2 bg-background/10 p-10 md:p-16 relative overflow-hidden group min-h-[450px] flex flex-col justify-end border-r-2 border-border">
              <div className="absolute top-8 left-8 z-10">
                <Badge variant="outline" className="rounded-none px-4 py-1 text-xs font-black uppercase tracking-widest border-2 border-foreground bg-foreground text-background">Featured</Badge>
              </div>
              {megaItem ? (
                <div className="relative z-10 max-w-xl">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 group-hover:translate-x-2 transition-transform duration-500">
                    {megaItem.title}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 line-clamp-2 leading-relaxed">
                    {megaItem.type === 'event' ? (megaItem as EventItem).description : (megaItem as any).excerpt}
                  </p>
                  <Button asChild variant="link" className="p-0 text-foreground text-xl group-hover:translate-x-4 transition-transform h-auto font-black uppercase">
                    <Link href={megaItem.type === 'event' ? `/events/${(megaItem as EventItem).id}` : `/blog/${(megaItem as any).slug}`}>
                      Full Story <ArrowRight className="ml-3 h-6 w-6" />
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="relative z-10 flex flex-col justify-end h-full">
                  <Terminal className="h-32 w-32 text-foreground mb-6 opacity-10" />
                  <h2 className="text-5xl font-black tracking-tighter mb-4">DDU ICT Club</h2>
                  <p className="text-xl text-muted-foreground">Shaping the tech landscape of tomorrow.</p>
                </div>
              )}
            </div>

            {/* Stats Cell */}
            <div className="bg-background/10 p-10 flex flex-col justify-center space-y-12">
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Members</span>
                <div className="text-6xl font-black tracking-tighter">500+</div>
              </div>
              <div className="h-[2px] bg-border w-full opacity-50" />
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Events</span>
                <div className="text-6xl font-black tracking-tighter">20+</div>
              </div>
              <div className="h-[2px] bg-border w-full opacity-50" />
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground">Projects</span>
                <div className="text-6xl font-black tracking-tighter">15</div>
              </div>
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
        </div>
      </section>
    </main>
  );
}
