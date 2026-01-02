import { cn } from "@/lib/utils";

interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children?: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
}

export default function Marquee({
    className,
    reverse,
    pauseOnHover = false,
    children,
    repeat = 4,
    ...props
}: MarqueeProps) {
    return (
        <div
            {...props}
            className={cn(
                "group flex overflow-hidden p-2 [--gap:1rem]",
                className
            )}
        >
            {Array(2)
                .fill(0)
                .map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            "flex shrink-0 justify-around [gap:var(--gap)]",
                            reverse ? "animate-marquee-reverse" : "animate-marquee",
                            pauseOnHover && "group-hover:[animation-play-state:paused]"
                        )}
                    >
                        {Array(repeat)
                            .fill(0)
                            .map((_, j) => (
                                <div key={j} className="flex items-center">
                                    {children}
                                </div>
                            ))}
                    </div>
                ))}
        </div>
    );
}
