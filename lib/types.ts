export type EventStatus = "upcoming" | "ongoing" | "completed";

export type EventItem = {
    id: string;
    title: string;
    description: string;
    dateLabel: string;       // e.g., "December 19, 2025" or "Every Friday"
    timeLabel?: string;      // e.g., "6:00 PM (12:00 LT)"
    status: EventStatus;
    recurrence?: "weekly" | "biweekly" | null;
    isMega?: boolean;        // only ONE event across all data can be true at a time
    heroImage?: string;      // used if isMega
};

export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    content: string;         // markdown or html
    date: string;            // ISO
    category: string;
    readTime?: string;
    isMega?: boolean;        // mega can also come from blog (only one overall)
    heroImage?: string;
};

export type RegistrationItem = {
    id: string;
    title: string;
    location: string;
    deadline?: string;
    isOpen: boolean;
};

export type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;      // local or CDN path
    bio?: string;
    socials?: {
        github?: string;
        linkedin?: string;
        telegram?: string;
        twitter?: string;
    };
};

export type Testimonial = {
    id: string;
    quote: string;
    author: string;
    role: string;
};