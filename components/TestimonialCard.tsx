import { Card } from "@/components/ui/card";

interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialProps) {
    // Generate initials from author name
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <Card className="group relative p-6 rounded-2xl border border-border hover:border-primary bg-background transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            {/* Quote text */}
            <p className="text-sm md:text-base leading-relaxed text-foreground/90 mb-6">
                &quot;{quote}&quot;
            </p>
            
            {/* Author info */}
            <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    {/* Avatar with initials */}
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-primary">{getInitials(author)}</span>
                    </div>
                    
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm text-foreground">{author}</span>
                        <span className="text-xs text-muted-foreground">{role}</span>
                    </div>
                </div>
                
                {/* X/Twitter icon */}
                <svg 
                    className="h-5 w-5 text-muted-foreground/50 group-hover:text-muted-foreground transition-colors flex-shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
            </div>
        </Card>
    );
}
