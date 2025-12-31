interface StatBlockProps {
    value: string;
    label: string;
}

export function StatBlock({ value, label }: StatBlockProps) {
    return (
        <div className="flex flex-col items-center justify-center p-4 text-center">
            <span className="text-4xl font-bold tracking-tighter md:text-5xl">{value}</span>
            <span className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {label}
            </span>
        </div>
    );
}
