import { EventCard } from "@/components/EventCard";
import { StatBlock } from "@/components/StatBlock";
import eventsData from "@/data/events.json";
import { EventItem } from "@/lib/types";

export default function EventsPage() {
    const events = eventsData as EventItem[];

    // Calculate stats
    const passedCount = events.filter((e) => e.status === "completed").length;
    const ongoingCount = events.filter((e) => e.status === "ongoing").length;
    const upcomingCount = events.filter((e) => e.status === "upcoming").length;

    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground">
            <section className="container mx-auto px-4 py-12 md:py-24">
                
                <h1 className="text-4xl font-extrabold tracking-tighter   mb-8  sm:text-5xl md:text-6xl uppercase">
                    Events
                </h1>
                <div className="h-1 w-20 bg-primary mb-8" />

                {/* Dashboard Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border mb-16 bg-background rounded-none">
                    <div className="border-b md:border-b-0 md:border-r border-border p-4">
                        <StatBlock value={passedCount.toString()} label="Passed Events" />
                    </div>
                    <div className="border-b md:border-b-0 md:border-r border-border p-4">
                        <StatBlock value={ongoingCount.toString()} label="Ongoing Events" />
                    </div>
                    <div className="p-4">
                        <StatBlock value={upcomingCount.toString()} label="Upcoming Events" />
                    </div>
                </div>

                {/* Events List */}
                <div className="space-y-16">
                    {/* Upcoming & Ongoing */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold tracking-tight border-l-4 border-white pl-4">Upcoming & Ongoing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {events
                                .filter(e => e.status !== "completed")
                                .map(event => (
                                    <EventCard key={event.id} event={event} />
                                ))}
                            {events.filter(e => e.status !== "completed").length === 0 && (
                                <p className="text-muted-foreground">No upcoming events at the moment.</p>
                            )}
                        </div>
                    </div>

                    {/* Past Events */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold tracking-tight border-l-4 border-white pl-4 opacity-70">Past Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-80 hover:opacity-100 transition-opacity">
                            {events
                                .filter(e => e.status === "completed")
                                .map(event => (
                                    <EventCard key={event.id} event={event} />
                                ))}
                            {events.filter(e => e.status === "completed").length === 0 && (
                                <p className="text-muted-foreground">No passed events found.</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
