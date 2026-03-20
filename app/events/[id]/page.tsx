import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { client } from "@/sanity/lib/client";
import { EventItem } from "@/lib/types";

interface EventPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    const events: { id: string }[] = await client.fetch(`*[_type == "event"]{ "id": _id }`);
    return events.map((e) => ({ id: e.id }));
}

export default async function EventPage({ params }: EventPageProps) {
    const { id } = await params;
    const event: EventItem | null = await client.fetch(`*[_type == "event" && _id == $id][0] {
        "id": _id,
        title,
        description,
        dateLabel,
        timeLabel,
        status,
        recurrence,
        isMega,
        "heroImage": heroImage.asset->url
    }`, { id });

    if (!event) {
        notFound();
    }

    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground container mx-auto px-4 py-12 md:py-24">
            <div className="w-full max-w-3xl mx-auto mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link href="/events" className="hover:text-primary transition-colors">Events</Link>
                <span>/</span>
                <span className="text-foreground line-clamp-1">{event.title}</span>
            </div>

            <div className="max-w-3xl mx-auto w-full space-y-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Badge variant="outline" className="text-sm py-1 px-4 rounded-none border-border uppercase tracking-widest font-bold">
                            {event.status}
                        </Badge>
                        {event.recurrence && (
                            <Badge variant="outline" className="text-sm py-1 px-4 rounded-none border-border uppercase tracking-widest text-muted-foreground">
                                {event.recurrence}
                            </Badge>
                        )}
                    </div>
                    <h1 className="text-4xl font-extrabold uppercase tracking-tighter sm:text-5xl md:text-6xl leading-[0.9]">
                        {event.title}
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-border py-8">
                    <div className="flex items-start gap-4">
                        <Calendar className="h-6 w-6 shrink-0 mt-1 text-primary" />
                        <div>
                            <h3 className="font-bold uppercase tracking-wider text-sm text-muted-foreground">Date</h3>
                            <p className="text-lg font-bold">{event.dateLabel}</p>
                        </div>
                    </div>
                    {event.timeLabel && (
                        <div className="flex items-start gap-4">
                            <Clock className="h-6 w-6 shrink-0 mt-1 text-primary" />
                            <div>
                                <h3 className="font-bold uppercase tracking-wider text-sm text-muted-foreground">Time</h3>
                                <p className="text-lg font-bold">{event.timeLabel}</p>
                            </div>
                        </div>
                    )}
                </div>

                <div className="prose prose-invert max-w-none">
                    <h3 className="text-2xl font-black uppercase mb-4">About this Event</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground border-l-4 border-primary pl-4">
                        {event.description}
                    </p>
                    {/* Extended content would go here if available in data model */}
                </div>

                <div className="pt-8">
                    <Button size="lg" className="w-full md:w-auto rounded-none border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider" disabled={event.status === 'completed'}>
                        {event.status === 'completed' ? 'Event Ended' : 'Register Now (Coming Soon)'}
                    </Button>
                </div>
            </div>
        </main>
    );
}
