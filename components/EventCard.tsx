import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { EventItem } from "@/lib/types";

interface EventCardProps {
    event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
    const isCompleted = event.status === 'completed';

    return (
        <Card className={`group h-full rounded-none border-2 border-white/10 glass-premium card-glow-premium transition-all duration-700 hover:border-foreground/50 hover:glow-md ${isCompleted ? 'opacity-70 grayscale' : ''}`}>
            <CardHeader>
                <div className="flex justify-between items-start mb-2">
                    <Badge variant={isCompleted ? "secondary" : "default"} className="rounded-none uppercase tracking-wider text-xs font-bold px-3 py-1">
                        {event.status}
                    </Badge>
                    {event.recurrence && (
                        <Badge variant="outline" className="rounded-none uppercase text-[10px] tracking-widest border-muted-foreground text-muted-foreground">
                            {event.recurrence}
                        </Badge>
                    )}
                </div>
                <CardTitle className="text-2xl font-black leading-tight group-hover:text-primary transition-colors">
                    {event.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-4 text-xs font-medium uppercase tracking-wider mt-1 text-muted-foreground group-hover:text-foreground transition-colors">
                    <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {event.dateLabel}
                    </span>
                    {event.timeLabel && (
                        <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {event.timeLabel}
                        </span>
                    )}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground line-clamp-3 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {event.description}
                </p>
            </CardContent>
            <CardFooter>
                <Button asChild className={`w-full rounded-none font-bold tracking-wider transition-all duration-300 ${isCompleted ? '' : 'group-hover:bg-primary group-hover:text-primary-foreground'}`} variant={isCompleted ? "outline" : "default"} disabled={isCompleted}>
                    <Link href={`/events/${event.id}`}>
                        {isCompleted ? "Event Ended" : "Details & Register"}
                        {!isCompleted && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
