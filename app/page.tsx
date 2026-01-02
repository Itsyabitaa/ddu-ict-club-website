import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Terminal, Code, Users, Trophy, GraduationCap } from "lucide-react";
import Marquee from "@/components/Marquee";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EventCard } from "@/components/EventCard";

import { TestimonialSlider } from "@/components/TestimonialSlider";
import eventsData from "@/data/events.json";
import testimonialsData from "@/data/testimonials.json";
import { EventItem, Testimonial } from "@/lib/types";
import { getMegaItem } from "@/lib/mega";

export default async function Home() {
  const megaItem = await getMegaItem();
  const upcomingEvents = (eventsData as EventItem[])
    .filter((e) => e.status === "upcoming" || e.status === "ongoing")
    .slice(0, 3);
  const testimonials = testimonialsData as Testimonial[];

  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      {/* Hero Section - Brutalist & Big */}
      <section className="relative flex min-h-[80vh] flex-col justify-center border-b border-border">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] "></div>

        <div className="container relative mx-auto px-4 pt-20 pb-16 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="mb-8 inline-flex animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="rounded-full border border-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-background">
                  DDU ICT Club
                </span>
              </div>

              {/* Huge Typography */}
              <h1 className="text-5xl font-black uppercase tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 leading-[0.9]">
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

            {/* Right Side - Mega Event/Blog or Logo */}
            <div className="hidden lg:flex justify-center items-center animate-in fade-in slide-in-from-right-8 duration-700 delay-400">
              {megaItem ? (
                // Mega Event/Blog Card
                <div className="relative w-full max-w-md">
                  <div className="group relative bg-background border-2 border-border hover:border-primary p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    
                    {/* Badge */}
                    <div className="relative mb-4">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                        {megaItem.type === 'event' ? '🎉 Mega Event' : '📝 Featured Post'}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="relative space-y-4">
                      <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                        {megaItem.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed line-clamp-3">
                        {megaItem.type === 'event' 
                          ? (megaItem as any).description 
                          : (megaItem as any).excerpt}
                      </p>
                      
                      {megaItem.type === 'event' && (megaItem as any).dateLabel && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>📅</span>
                          <span>{(megaItem as any).dateLabel}</span>
                        </div>
                      )}
                      
                      <Button asChild className="w-full mt-4 rounded-full border-2 border-primary hover:bg-primary hover:text-primary-foreground font-bold">
                        <Link href={megaItem.type === 'event' ? `/events/${(megaItem as any).id}` : `/blog/${(megaItem as any).slug}`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                // Default Logo
                <div className="relative w-full max-w-md h-96">
                  <Image
                    src="/assets/logo/light-logo.png"
                    alt="DDU ICT Club Logo"
                    fill
                    className="object-contain dark:invert"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </div>


        {/* Marquee Effect */}
        <div className="absolute bottom-0 w-full border-t border-border bg-background py-3 overflow-hidden">
          <Marquee className="[--gap:2rem]" repeat={5}>
            <span className="text-sm font-bold tracking-widest text-muted-foreground opacity-50 mx-4">• INNOVATE • BUILD • DEPLOY • DISRUPT •</span>
          </Marquee>
        </div>
      </section>

      {/* Stats Banner Section */}
      <section className="bg-background text-foreground py-16 border-b border-border relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="group relative bg-background border-2 border-border hover:border-primary p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative space-y-2 text-center">
                <div className="text-4xl md:text-5xl font-black tracking-tighter text-primary group-hover:scale-110 transition-transform duration-300 inline-block">20+</div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-muted-foreground">Active Members</div>
              </div>
            </div>

            <div className="group relative bg-background border-2 border-border hover:border-primary p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative space-y-2 text-center">
                <div className="text-4xl md:text-5xl font-black tracking-tighter text-primary group-hover:scale-110 transition-transform duration-300 inline-block">20+</div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-muted-foreground">Mentors</div>
              </div>
            </div>

            <div className="group relative bg-background border-2 border-border hover:border-primary p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative space-y-2 text-center">
                <div className="text-4xl md:text-5xl font-black tracking-tighter text-primary group-hover:scale-110 transition-transform duration-300 inline-block">120+</div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-muted-foreground">Web Dev Students</div>
              </div>
            </div>

            <div className="group relative bg-background border-2 border-border hover:border-primary p-6 md:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative space-y-2 text-center">
                <div className="text-4xl md:text-5xl font-black tracking-tighter text-primary group-hover:scale-110 transition-transform duration-300 inline-block">160+</div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-muted-foreground">Total Community</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About DDU ICT Club Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              About DDU ICT Club
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A vibrant community of technology enthusiasts
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Who We Are */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold tracking-tight">Who We Are</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                DDU ICT Club is a dynamic community of students passionate about Information and Communication Technology. We foster innovation, learning, and collaboration among tech enthusiasts at DDU.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to provide a platform where students can learn, grow, and excel in the field of ICT through workshops, hackathons, coding competitions, and collaborative projects.
              </p>
              <Button asChild size="lg" className="rounded-none border-2 border-primary bg-background text-foreground hover:bg-primary hover:text-primary-foreground mt-4">
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Right: Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Coding Workshops */}
              <div className="group relative bg-background border-2 border-border hover:border-primary p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold">Coding Workshops</h4>
                  <p className="text-sm text-muted-foreground">
                    Regular hands-on sessions on various programming languages and frameworks.
                  </p>
                </div>
              </div>

              {/* Community Events */}
              <div className="group relative bg-background border-2 border-border hover:border-primary p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold">Community Events</h4>
                  <p className="text-sm text-muted-foreground">
                    Networking opportunities and collaborative projects with fellow members.
                  </p>
                </div>
              </div>

              {/* Competitions */}
              <div className="group relative bg-background border-2 border-border hover:border-primary p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold">Competitions</h4>
                  <p className="text-sm text-muted-foreground">
                    Participate in hackathons and coding challenges to test your skills.
                  </p>
                </div>
              </div>

              {/* Learning Resources */}
              <div className="group relative bg-background border-2 border-border hover:border-primary p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold">Learning Resources</h4>
                  <p className="text-sm text-muted-foreground">
                    Access to curated learning materials and mentorship programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Upcoming Events
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground">
              Join us for exciting tech events and workshops
            </p>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
            {upcomingEvents.map((event, i) => (
              <div key={event.id} className="group relative bg-background border-2 border-border hover:border-primary p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="space-y-4">
                  {/* Date Badge */}
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {event.dateLabel}
                  </div>
                  
                  {/* Event Title */}
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  {/* Event Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                  
                  {/* Bottom Section */}
                  <div className="flex items-center justify-between pt-4">
                    {/* Time/Recurrence Badge */}
                    {(event.timeLabel || event.recurrence) && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-background border border-border rounded-full text-xs font-medium">
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                        {event.timeLabel || (event.recurrence === 'weekly' ? 'Weekly' : 'Bi-weekly')}
                      </div>
                    )}
                    
                    {/* Register Button */}
                    <Button asChild size="sm" className="rounded-full bg-background hover:bg-primary text-foreground hover:text-primary-foreground border-2 border-border hover:border-primary font-bold px-6">
                      <Link href={`/events/${event.id}`}>
                        {event.status === 'ongoing' ? 'Join' : 'Register'}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Events Button */}
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-border hover:border-primary px-8 font-bold">
              <Link href="/events">
                View All Events
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 border-t border-border bg-background">
        <div className="container relative z-10 mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Community Voices
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the students, developers, and leaders who make our community thrive.
          </p>
        </div>

        {/* Single Testimonial Slider */}
        <div className="container mx-auto px-4 pb-12">
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>
    </main>
  );
}
