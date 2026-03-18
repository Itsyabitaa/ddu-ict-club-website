import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialProps) {
    return (
        <Card className="h-full rounded-none border-2 border-white/10 glass-premium card-glow-premium transition-all duration-700 hover:glow-md">
            <CardContent className="pt-10 relative">
                <Quote className="absolute top-4 left-4 h-10 w-10 text-foreground/10 rotate-180" />
                <p className="relative z-10 pl-4 text-xl font-medium leading-relaxed text-foreground italic">
                    &quot;{quote}&quot;
                </p>
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t-2 border-border pt-6 pb-8">
                <span className="font-black text-foreground uppercase tracking-wider">{author}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] mt-1">{role}</span>
            </CardFooter>
        </Card>
    );
}
