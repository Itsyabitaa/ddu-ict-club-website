import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EventItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface EventCardProps {
    event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
    const isCompleted = event.status === 'completed';

    return (
        <article
            className={cn(
                "group relative flex flex-col h-full bg-background border-2 border-border overflow-hidden transition-all duration-500 ease-out",
                isCompleted
                    ? "opacity-70 grayscale hover:opacity-100 hover:grayscale-0"
                    : "hover:-translate-y-2 hover:border-primary hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))]"
            )}
        >
            {/* ── Status & Badge area ────────────────────────────────── */}
            <div className="relative p-6 pb-0 flex justify-between items-start">
                <Badge
                    variant={isCompleted ? "secondary" : "default"}
                    className="rounded-none uppercase tracking-widest text-[10px] font-black px-3 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]"
                >
                    {isCompleted ? "Completed" : event.status}
                </Badge>

                {event.recurrence && (
                    <span className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground bg-muted px-2 py-1">
                        {event.recurrence}
                    </span>
                )}
            </div>

            {/* ── Body ───────────────────────────────────────── */}
            <div className="flex flex-col flex-1 p-6 gap-4">
                {/* accent bar that grows on hover */}
                <div className={cn("h-[2px] w-8 bg-primary transition-all duration-500 ease-out", !isCompleted && "group-hover:w-full")} />

                <div className="space-y-2">
                    <h3 className="text-2xl font-black uppercase tracking-tight leading-none group-hover:text-primary transition-colors duration-300">
                        {event.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="flex items-center gap-1.5 border-b border-transparent group-hover:border-primary/30 transition-all">
                            <Calendar className="h-3 w-3 text-primary" /> {event.dateLabel}
                        </span>
                        {event.timeLabel && (
                            <span className="flex items-center gap-1.5 border-b border-transparent group-hover:border-primary/30 transition-all">
                                <Clock className="h-3 w-3 text-primary" /> {event.timeLabel}
                            </span>
                        )}
                    </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1 group-hover:text-foreground/80 transition-colors duration-300">
                    {event.description}
                </p>

                {/* ── Action ───────────────────────────────── */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                    <Link
                        href={`/events/${event.id}`}
                        className={cn(
                            "inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all duration-300",
                            isCompleted ? "text-muted-foreground cursor-default" : "text-foreground hover:text-primary"
                        )}
                    >
                        {isCompleted ? "View Archive" : "Details & Register"}
                        {!isCompleted && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                    </Link>

                    {/* push a subtle location if available or just a decorative arrow */}
                    <span className="text-muted-foreground/30 text-xs font-mono select-none group-hover:text-primary/50 transition-colors">
                        ↗
                    </span>
                </div>
            </div>

            {/* ── Bottom border accent ───────────────────────── */}
            <div className="h-0 opacity-0 group-hover:h-1 group-hover:opacity-100 bg-primary transition-all duration-300 ease-out" />
        </article>
    );
}
