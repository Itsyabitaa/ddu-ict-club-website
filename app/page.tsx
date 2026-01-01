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
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      {/* Hero Section - Brutalist & Big */}
      <section className="relative flex min-h-[0vh] flex-col justify-center border-b border-border">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] "></div>

        <div className="container relative mx-auto px-4 pt-8 pb-16 md:pb-32">
          {/* Badge */}
          <div className="mb-8 inline-flex animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="rounded-full border border-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-background">
              DDU ICT Club
            </span>
          </div>

          {/* Huge Typography */}
          <h1 className="max-w-5xl text-6xl font-black uppercase tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 leading-[0.9]">
            We Build <br />
            <span className="text-primary">The Future.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            The premier hub for innovators, hackers, and creators at Dire Dawa University.
            We turn coffee into code and ideas into reality.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button asChild size="lg" className="h-14 rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary text-lg font-bold px-8">
              <Link href="/register">
                Join the Movement <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 rounded-none border-2 px-8 text-lg font-bold">
              <Link href="/about">
                Explore Club
              </Link>
            </Button>
          </div>
        </div>

 
        {/* Marquee Effect */}
        <div className="absolute bottom-0 w-full border-t border-border bg-background py-4 overflow-hidden">
          <Marquee className="[--gap:2rem]" repeat={5}>
            <span className="text-sm font-bold tracking-widest text-muted-foreground opacity-50 mx-4">• INNOVATE • BUILD • DEPLOY • DISRUPT •</span>
          </Marquee>
        </div>
      </section>

      {/* Bento Grid Section - Stats & About */}
      <section className="border-b border-border bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-0 bg-border border border-border">
            {/* Mega Item Cell (Span 2) */}
            <div className="md:col-span-2   bg-background p-8 md:p-12 relative overflow-hidden group min-h-[400px] flex flex-col justify-end">
              <div className="absolute top-6 left-6 z-10">
                <Badge variant="outline" className="rounded-full bg-background uppercase tracking-widest border-primary">Featured</Badge>
              </div>
              {megaItem ? (
                <div className="relative z-10 max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 group-hover:text-primary transition-colors duration-300">
                    {megaItem.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 line-clamp-2">
                    {megaItem.type === 'event' ? (megaItem as EventItem).description : (megaItem as any).excerpt}
                  </p>
                  <Button asChild variant="link" className="p-0 text-foreground text-lg group-hover:translate-x-2 transition-transform h-auto">
                    <Link href={megaItem.type === 'event' ? `/events/${(megaItem as EventItem).id}` : `/blog/${(megaItem as any).slug}`}>
                      Read Full Story <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="relative z-10 flex flex-col justify-end h-full">
                  <Terminal className="h-24 w-24 text-muted mb-4 opacity-20" />
                  <h2 className="text-4xl font-bold tracking-tighter mb-2">DDU ICT Club</h2>
                  <p className="text-muted-foreground">Shaping the tech landscape of tomorrow.</p>
                </div>
              )}
            </div>

            {/* Stats Cell */}
            <div className="bg-background p-8 flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Members</span>
                <div className="text-5xl font-black tracking-tighter">500+</div>
              </div>
              <div className="h-px bg-border w-full" />
              <div className="space-y-2">
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Events</span>
                <div className="text-5xl font-black tracking-tighter">20+</div>
              </div>
              <div className="h-px bg-border w-full" />
              <div className="space-y-2">
                <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Projects</span>
                <div className="text-5xl font-black tracking-tighter">15</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming</h2>
              <p className="text-muted-foreground mt-2">Don't miss out on the action.</p>
            </div>
            <Button asChild variant="ghost" className="hidden sm:flex">
              <Link href="/events" className="group">
                View All Events <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, i) => (
              <div key={event.id} className={`animate-in fade-in slide-in-from-bottom-8 duration-700 delay-${i * 100}`}>
                <EventCard event={event} />
              </div>
            ))}
          </div>

          <Button asChild variant="outline" className="w-full mt-8 sm:hidden rounded-none border-2">
            <Link href="/events">
              View All Events
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Marquee / Grid */}
      <section className="py-24 border-t border-border bg-dot-pattern">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4">Community Voices</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the students, developers, and leaders who make our community thrive.
          </p>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            quote="The DDU ICT Club changed my life. I went from knowing nothing to building full-stack apps."
            author="Abebe K."
            role="Software Engineering Student"
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
