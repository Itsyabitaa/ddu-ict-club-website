import { EventItem, BlogPost } from "@/lib/types";
import { client } from "@/sanity/lib/client";

export type MegaItem = (EventItem | BlogPost) & { type: 'event' | 'blog' };

export async function getMegaItem(): Promise<MegaItem | null> {
    // Check events first
    const megaEvent = await client.fetch<EventItem | null>(`*[_type == "event" && isMega == true][0] {
      "id": _id, title, description, dateLabel, timeLabel, status, recurrence, isMega, "heroImage": heroImage.asset->url
    }`);
    if (megaEvent) return { ...megaEvent, type: 'event' };

    // Check blogs second
    const megaBlog = await client.fetch<BlogPost | null>(`*[_type == "post" && isMega == true][0] {
        "slug": slug.current, title, excerpt, "content": body, "date": publishedAt, "category": categories[0]->title, readTime, isMega, "heroImage": mainImage.asset->url
    }`);
    if (megaBlog) return { ...megaBlog, type: 'blog' };

    return null;
}
