import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PostCard } from "@/components/PostCard";
import blogData from "@/data/blog.json";
import { BlogPost } from "@/lib/types";

export default function BlogPage() {
    const posts = blogData as BlogPost[];
    // Assume first post is featured (or use logic)
    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);

    return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {/* Persistent Animated Background */}
        <div className="fixed inset-0 z-0 bg-lake opacity-50"></div>
        <div className="fixed inset-0 z-0 bg-noise"></div>

        {/* Hero Section - Stack 1 */}
        <section className="stack-section z-[10] flex flex-col items-center justify-center text-center">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            
            {/* The "ICT Orb" - Centered Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-foreground/5 rounded-full blur-[120px] animate-pulse-glow"></div>

            <div className="container relative z-10 mx-auto px-4">
                <div className="mb-6 inline-flex animate-reveal">
                    <span className="border-2 border-foreground px-6 py-2 text-sm font-black uppercase tracking-[0.2em]">
                        DDU ICT Club
                    </span>
                </div>
                <h1 className="text-7xl font-black uppercase tracking-tighter sm:text-8xl md:text-9xl lg:text-[12rem] leading-none animate-reveal [animation-delay:200ms]">
                    BL<span className="text-outline text-transparent" style={{ WebkitTextStroke: '2px hsl(var(--foreground))' }}>OG</span>
                </h1>
                <p className="mt-8 max-w-xl mx-auto text-lg md:text-xl text-muted-foreground animate-reveal [animation-delay:400ms] leading-relaxed">
                    Insights, tutorials, and stories from the heart of the DDU ICT community.
                </p>
            </div>
        </section>

        {/* Sticky Filter Bar - Transition Layer */}
        <div className="sticky top-20 z-[100] w-full glass border-b border-border/10 backdrop-blur-xl animate-reveal [animation-delay:600ms]">
            {/* Reading Progress Bar (Special Feature) */}
            <div className="absolute bottom-0 left-0 h-1 bg-foreground transition-all duration-300 ease-out z-[101]" style={{ width: '0%', animation: 'scroll-progress linear fixed' }}></div>
            
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {["All", "Tutorials", "Events", "Career", "Tech Talks"].map((cat) => (
                        <Button key={cat} variant={cat === "All" ? "default" : "outline"} className="group relative overflow-hidden rounded-none border-2 border-border text-xs font-black uppercase tracking-widest h-10 px-6 transition-all hover:border-foreground hover:glow-sm active:scale-95">
                            <span className="relative z-10">{cat}</span>
                            <div className="absolute inset-0 bg-foreground/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </Button>
                    ))}
                </div>
                <div className="relative w-full md:w-80 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-foreground transition-colors" />
                    <Input placeholder="Search articles..." className="pl-12 h-12 rounded-none border-2 border-border bg-background/50 text-foreground focus-visible:ring-0 focus-visible:border-foreground transition-all placeholder:uppercase placeholder:text-[10px] placeholder:tracking-widest placeholder:font-black" />
                </div>
            </div>
        </div>

        {/* Featured Post - Stack 2 */}
        {featuredPost && (
            <section className="stack-section z-[20] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 bg-border border-4 border-border glass-premium card-glow-premium">
                        <div className="relative aspect-video lg:aspect-auto w-full border-r-4 border-border bg-muted/20 overflow-hidden group">
                           <Image 
                                src={featuredPost.heroImage || "/assets/blog/featured-abstract.png"} 
                                alt={`Featured image for post: ${featuredPost.title}`} 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 lg:p-12">
                                <Badge className="w-fit mb-4 rounded-none bg-foreground text-background font-black uppercase tracking-widest px-4 py-1">{featuredPost.category}</Badge>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight uppercase line-clamp-2 group-hover:translate-x-2 transition-transform">
                                    {featuredPost.title}
                                </h2>
                           </div>
                        </div>
                        <div className="p-8 lg:p-16 flex flex-col justify-center space-y-8 bg-background/50">
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground border-b-2 border-border pb-2 w-fit">Featured Story</span>
                            <p className="text-xl text-muted-foreground leading-relaxed font-sans font-medium line-clamp-3">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                                <span>{featuredPost.date}</span>
                                <span className="w-1 h-1 rounded-full bg-border" />
                                <span>{featuredPost.readTime}</span>
                            </div>
                            <Button asChild size="lg" className="w-fit">
                                <Link href={`/blog/${featuredPost.slug}`} className="flex items-center">
                                    Read Full Story <ArrowRight className="ml-3 h-6 w-6" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        )}

        {/* Regular Posts Grid - Stack 3 */}
        <section className="stack-section z-[30] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] bg-background/95 justify-start pt-32">
            <div className="container mx-auto px-4 pb-32 overflow-y-auto max-h-[85vh] custom-scrollbar">
                <div className="mb-12 border-b-2 border-border pb-4 flex items-center justify-between">
                    <h2 className="text-4xl font-black uppercase tracking-tighter">Latest Stories</h2>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{otherPosts.length * 2} Articles</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {otherPosts.map((post) => (
                        <div key={post.slug} className="transition-all duration-500 hover:-translate-y-2">
                            <PostCard post={post} />
                        </div>
                    ))}
                    {/* Visual duplication for better stacking effect demo (without featured post) */}
                    {otherPosts.map((post) => (
                        <div key={`${post.slug}-dup`} className="transition-all duration-500 hover:-translate-y-2">
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>

                {/* Newsletter / CTA - The "Ending" content to avoid emptiness */}
                <form className="mt-32 p-12 border-4 border-foreground bg-foreground text-background flex flex-col md:flex-row items-center justify-between gap-12 group transition-all duration-500 hover:glow-md">
                    <div className="max-w-xl">
                        <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">Stay in the loop</h3>
                        <p className="text-lg font-medium opacity-80">Get the latest tutorials, event news, and tech insights delivered straight to your inbox.</p>
                    </div>
                    <div className="flex w-full md:w-auto gap-4">
                        <label htmlFor="newsletter-email" className="sr-only">Your Email</label>
                        <Input id="newsletter-email" name="email" type="email" placeholder="YOUR EMAIL" className="rounded-none border-2 border-background bg-transparent text-background placeholder:text-background/50 h-14 min-w-[300px]" />
                        <Button type="submit" variant="outline" size="lg" className="rounded-none border-2 border-background bg-background text-foreground hover:bg-transparent hover:text-background h-14 px-10 font-black uppercase transition-all">
                            Join Now
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    </main>
    );
}
