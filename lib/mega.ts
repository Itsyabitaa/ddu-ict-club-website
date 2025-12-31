import events from "@/data/events.json";
import blogs from "@/data/blog.json";
import { EventItem, BlogPost } from "@/lib/types";

export type MegaItem = (EventItem | BlogPost) & { type: 'event' | 'blog' };

export async function getMegaItem(): Promise<MegaItem | null> {
    // Check events first
    const megaEvent = (events as EventItem[]).find((e) => e.isMega);
    if (megaEvent) return { ...megaEvent, type: 'event' };

    // Check blogs second
    const megaBlog = (blogs as BlogPost[]).find((b) => b.isMega);
    if (megaBlog) return { ...megaBlog, type: 'blog' };

    return null;
}
