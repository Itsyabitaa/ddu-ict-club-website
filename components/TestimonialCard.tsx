import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialProps) {
    return (
        <Card className="h-full rounded-none border-black dark:border-white  bg-white dark:bg-black text-white">
            <CardContent className="pt-6 relative">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-black/20 dark:text-white/20 rotate-180" />
                <p className="relative z-10 pl-6 text-lg italic leading-relaxed  text-black dark:text-muted-foreground">
                    &quot;{quote}&quot;
                </p>
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t border-white/10 pt-4">
                <span className="font-bold text-primary">{author}</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">{role}</span>
            </CardFooter>
        </Card>
    );
}
