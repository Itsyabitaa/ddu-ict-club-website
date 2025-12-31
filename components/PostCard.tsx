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
        <Card className="flex flex-col h-full rounded-none border-primary   transition-colors">
            <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="rounded-none border-primary uppercase text-xs tracking-wider">
                        {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {post.date}
                    </span>
                </div>
                <CardTitle className="text-xl font-bold leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4 decoration-2  ">
                        {post.title}
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <CardDescription className="line-clamp-3 text-muted-foreground">
                    {post.excerpt}
                </CardDescription>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t border-white/10 pt-4">
                {post.readTime && (
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                )}
                <Button asChild variant="link" className="p-0 text-primary     h-auto">
                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider">
                        Read Article <ArrowRight className="h-3 w-3" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
