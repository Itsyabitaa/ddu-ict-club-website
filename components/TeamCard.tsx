import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { TeamMember } from "@/lib/types";

interface TeamCardProps {
    member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
    return (
        <Card className="group h-full rounded-none border-border bg-background transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))]">
            <CardHeader className="p-0">
                <div className="relative aspect-square w-full overflow-hidden border-b border-border group-hover:border-primary transition-colors">
                    {/* Placeholder / Image Logic */}
                    <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                        <span className="text-6xl font-black uppercase select-none opacity-50 group-hover:opacity-100 transition-opacity">
                            {member.name.charAt(0)}
                        </span>
                    </div>
                    {/* If we had real images, they would go here with mix-blend-mode effects */}
                </div>
            </CardHeader>
            <CardContent className="space-y-2 p-6">
                <CardTitle className="text-2xl font-bold leading-none uppercase tracking-tight group-hover:text-primary transition-colors">
                    {member.name}
                </CardTitle>
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                    {member.role}
                </p>
                {member.bio && (
                    <CardDescription className="line-clamp-3 text-muted-foreground group-hover:text-foreground/80 transition-colors pt-2">
                        {member.bio}
                    </CardDescription>
                )}
            </CardContent>
            <CardFooter className="gap-4 p-6 pt-0">
                {member.socials?.github && (
                    <Link href={member.socials.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                )}
                {member.socials?.linkedin && (
                    <Link href={member.socials.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                )}
                {member.socials?.twitter && (
                    <Link href={member.socials.twitter} target="_blank" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                )}
            </CardFooter>
        </Card>
    );
}
