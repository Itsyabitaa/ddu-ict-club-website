import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PostCard } from "@/components/PostCard";
import blogData from "@/data/blog.json";
import { BlogPost } from "@/lib/types";

export default function BlogPage() {
    const posts = blogData as BlogPost[];
    // Assume first post is featured (or use logic)
    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);

    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground">
            <section className="container mx-auto px-4 py-12 md:py-24">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl uppercase mb-4">Blog</h1>
                        <div className="h-1 w-20 bg-primary mb-6" />

                    </div>
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search articles..." className="pl-10 rounded-none border-border bg-background text-foreground focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-ring" />
                    </div>
                </div>

                {/* Featured Post */}
                {featuredPost && (
                    <div className="mb-16 border-[3px] border-border p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-background">
                        <div className="space-y-6">
                            <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground border-b border-primary pb-1 inline-block">Featured Story</span>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                                <Link href={`/blog/${featuredPost.slug}`} className="hover:underline underline-offset-8 decoration-2">
                                    {featuredPost.title}
                                </Link>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
                                <span>{featuredPost.date}</span>
                                <span>•</span>
                                <span>{featuredPost.readTime}</span>
                                <span>•</span>
                                <span className="uppercase">{featuredPost.category}</span>
                            </div>
                        </div>
                        <div className="relative aspect-video w-full border-[3px] border-border bg-muted/20 flex items-center justify-center">
                            {/* Image Placeholder */}
                            <span className="text-muted-foreground text-sm uppercase tracking-widest">Featured Image</span>
                        </div>
                    </div>
                )}

                {/* Categories (Static for now) */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {["All", "Tutorials", "Events", "Career", "Tech Talks"].map((cat) => (
                        <Button key={cat} variant={cat === "All" ? "default" : "outline"} className="rounded-none border-border text-xs uppercase tracking-wider h-8">
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Post Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {otherPosts.map((post) => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                    {/* Duplicate featured post if we don't have enough data to fill grid for demo */}
                    {otherPosts.length === 0 && posts.length > 0 && (
                        posts.map(p => <PostCard key={`${p.slug}-dup`} post={p} />)
                    )}
                </div>
            </section>
        </main>
    );
}
