import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { client } from "@/sanity/lib/client";
import { BlogPost } from "@/lib/types";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const slugs: { slug: string }[] = await client.fetch(`*[_type == "post"]{ "slug": slug.current }`);
    return slugs.map((s) => ({ slug: s.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post: BlogPost | null = await client.fetch(`*[_type == "post" && slug.current == $slug][0] {
        "slug": slug.current,
        title,
        excerpt,
        "content": body,
        "date": publishedAt,
        "category": categories[0]->title,
        readTime,
        "heroImage": mainImage.asset->url
    }`, { slug });

    if (!post) {
        notFound();
    }

    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground container mx-auto px-4 py-12 md:py-24">
            <div className="w-full max-w-3xl mx-auto mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-foreground line-clamp-1">{post.title}</span>
            </div>

            <div className="max-w-3xl mx-auto w-full">
                <article className="space-y-8">
                    {/* Header */}
                    <header className="space-y-6 border-b-4 border-primary pb-12">
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="rounded-none border-border uppercase text-xs tracking-wider">
                                {post.category}
                            </Badge>
                            <span className="text-sm text-muted-foreground">•</span>
                            <span className="text-sm text-muted-foreground">{post.readTime}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground font-medium uppercase tracking-wider">
                            <span className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" /> {post.date}
                            </span>
                            <span className="flex items-center gap-2">
                                <User className="h-4 w-4" /> DDU ICT Club
                            </span>
                        </div>
                    </header>

                    {/* Content (Assuming markdown content is rendered or simple text for now) */}
                    <div className="prose prose-invert max-w-none text-lg leading-relaxed">
                        <p className="text-xl text-foreground font-medium mb-8 border-l-4 border-primary pl-4">
                            {post.excerpt}
                        </p>
                        {/* Mocking rich text content */}
                        <div className="space-y-6 text-muted-foreground">
                            <p>
                                {post.content}
                            </p>
                            <p>
                                Here we would render the actual markdown content. Since this is a demo using JSON data,
                                we are displaying this placeholder text. Imagine rich paragraphs, code blocks, and images here.
                            </p>
                            <div className="my-8 border-[3px] border-border p-6 bg-background">
                                <h4 className="text-foreground font-black uppercase mb-2">Key Takeaway</h4>
                                <p>Detailed technical content or event recapitulation goes here.</p>
                            </div>
                        </div>
                    </div>

                    {/* Share / Footer */}
                    <div className="border-t border-border pt-12 mt-12">
                        <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
                        {/* Logic to show related posts would go here */}
                        <p className="text-muted-foreground italic">No related posts found.</p>
                    </div>
                </article>
            </div>
        </main>
    );
}
