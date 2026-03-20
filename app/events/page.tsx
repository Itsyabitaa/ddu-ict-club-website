import { EventCard } from "@/components/EventCard";
import { StatBlock } from "@/components/StatBlock";
import { client } from "@/sanity/lib/client";
import { EventItem } from "@/lib/types";
import { History, PlayCircle, CalendarClock } from "lucide-react";

export default async function EventsPage() {
    const events: EventItem[] = await client.fetch(`*[_type == "event"] | order(_createdAt desc) {
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

    // Calculate stats and pre-filter events
    const activeEvents = events.filter(e => e.status !== "completed");
    const pastEvents = events.filter(e => e.status === "completed");

    const { passedCount, ongoingCount, upcomingCount } = events.reduce(
        (acc, e) => {
            if (e.status === "completed") acc.passedCount += 1;
            if (e.status === "ongoing") acc.ongoingCount += 1;
            if (e.status === "upcoming") acc.upcomingCount += 1;
            return acc;
        },
        { passedCount: 0, ongoingCount: 0, upcomingCount: 0 }
    );

    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground">
            {/* Hero / Intro */}
            <section className="container mx-auto px-4 py-24 md:py-32 relative overflow-hidden">
                <div className="max-w-4xl space-y-12 relative z-10">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-primary font-bold tracking-widest uppercase text-xs">
                            <span className="h-px w-10 bg-primary" />
                            JOIN THE JOURNEY
                        </div>
                        <h1 className="text-6xl font-black tracking-tighter sm:text-7xl md:text-8xl leading-none uppercase">
                            <span className="block italic text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground))] opacity-50">LATEST</span>
                            <span className="block flex flex-wrap gap-x-4">
                                <span className="bg-primary text-primary-foreground px-4 py-1 -rotate-1 shadow-[6px_6px_0px_0px_hsl(var(--foreground))]">OUR</span>
                                <span>EVENTS</span>
                            </span>
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                        Explore our upcoming workshops, tech talks, and hackathons. Stay updated with the <span className="text-foreground border-b-2 border-primary">latest happenings</span> in the tech community.
                    </p>

                    {/* Stats Dashboard */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-16">
                        {/* Ongoing */}
                        <div className="group relative p-6 border border-border bg-background transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))]">
                            <div className="mb-4 w-10 h-10 bg-muted group-hover:bg-primary flex items-center justify-center transition-colors duration-500">
                                <PlayCircle className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                            </div>
                            <StatBlock value={ongoingCount.toString()} label="Ongoing Now" />
                        </div>

                        {/* Upcoming */}
                        <div className="group relative p-6 border border-border bg-background transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))]">
                            <div className="mb-4 w-10 h-10 bg-muted group-hover:bg-primary flex items-center justify-center transition-colors duration-500">
                                <CalendarClock className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                            </div>
                            <StatBlock value={upcomingCount.toString()} label="Upcoming" />
                        </div>

                        {/* Completed */}
                        <div className="group relative p-6 border border-border bg-background transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))]">
                            <div className="mb-4 w-10 h-10 bg-muted group-hover:bg-primary flex items-center justify-center transition-colors duration-500">
                                <History className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
                            </div>
                            <StatBlock value={passedCount.toString()} label="Past Events" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming & Ongoing Section */}
            <section className="border-t border-primary py-24">
                <div className="container mx-auto px-4">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 uppercase font-black">Upcoming & Ongoing</h2>
                        <div className="h-1 w-20 bg-primary mb-6" />
                        <p className="text-lg text-muted-foreground">
                            Don't miss out on these current and future learning opportunities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {activeEvents.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        {activeEvents.length === 0 && (
                            <div className="col-span-full py-12 text-center border-2 border-dashed border-border">
                                <p className="text-muted-foreground font-medium italic">No upcoming events at the moment. Check back later!</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Past Events Section */}
            <section className="border-t border-muted py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 uppercase font-black opacity-70">Past Events</h2>
                        <div className="h-1 w-20 bg-muted mb-6" />
                        <p className="text-lg text-muted-foreground">
                            Take a look back at our successful past workshops and events.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-80 hover:opacity-100 transition-opacity duration-500">
                        {pastEvents.map(event => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        {pastEvents.length === 0 && (
                            <div className="col-span-full text-center">
                                <p className="text-muted-foreground">No passed events found.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

