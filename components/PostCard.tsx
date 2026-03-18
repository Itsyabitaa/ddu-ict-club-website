import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/lib/types";

interface PostCardProps {
    post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <Card className="flex flex-col h-[480px] rounded-none border-2 border-white/10 glass-premium card-glow-premium transition-all duration-700 hover:border-foreground/50 hover:glow-md group">
            <CardHeader className="relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                    <Clock className="h-10 w-10 text-foreground" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="rounded-none border-2 border-foreground bg-foreground text-background font-black uppercase text-[10px] tracking-[0.2em] px-3 py-1">
                        {post.category}
                    </Badge>
                </div>
                <CardTitle className="text-2xl font-black leading-tight tracking-tighter uppercase group-hover:translate-x-2 transition-transform duration-500">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pt-4">
                <CardDescription className="line-clamp-4 text-muted-foreground font-medium leading-relaxed font-sans text-base">
                    {post.excerpt}
                </CardDescription>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t-2 border-border/10 pt-6">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <span className="flex items-center gap-2 px-2 py-1 border border-border">
                         {post.date}
                    </span>
                    {post.readTime && (
                        <span className="flex items-center gap-2">
                             {post.readTime}
                        </span>
                    )}
                </div>
                <Button asChild variant="link" className="p-0 text-foreground h-auto font-black uppercase tracking-widest text-[10px] group-hover:translate-x-2 transition-transform">
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                        Read <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
