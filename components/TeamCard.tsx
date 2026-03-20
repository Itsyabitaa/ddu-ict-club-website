"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import { TeamMember } from "@/lib/types";

interface TeamCardProps {
    member: TeamMember;
    index?: number;
}

export function TeamCard({ member, index = 0 }: TeamCardProps) {
    const initial = member.name.charAt(0).toUpperCase();

    const socials = [
        { href: member.socials?.github, Icon: Github, label: "GitHub" },
        { href: member.socials?.linkedin, Icon: Linkedin, label: "LinkedIn" },
        { href: member.socials?.twitter, Icon: Twitter, label: "Twitter" },
    ].filter((s) => !!s.href);

    return (
        <article className="
            group relative flex flex-col h-full
            bg-background border border-border
            overflow-hidden
            transition-all duration-500 ease-out
            hover:-translate-y-2
            hover:border-primary
            hover:shadow-[8px_8px_0px_0px_hsl(var(--primary))]
        ">

            {/* ── Avatar area ────────────────────────────────── */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">

                {/* diagonal stripe texture (theme colors only) */}
                <div
                    className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(45deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 12px)",
                    }}
                />

                {/* ghost watermark letter */}
                <span className="
                    absolute inset-0 flex items-end justify-end
                    pr-4 pb-2
                    text-[9rem] font-black leading-none select-none
                    text-foreground/5 group-hover:text-foreground/10
                    transition-colors duration-500
                ">
                    {initial}
                </span>

                {/* avatar circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="
                        relative
                        w-40 h-40
                        border-2 border-border
                        group-hover:border-primary
                        bg-background
                        flex items-center justify-center
                        transition-all duration-500
                        group-hover:scale-110
                        group-hover:shadow-[4px_4px_0_hsl(var(--primary))]
                    ">
                        {member.image ? (
                            <Image 
                                src={member.image} 
                                alt={`Profile picture of ${member.name}`}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <span className="text-4xl font-black tracking-tight text-foreground select-none group-hover:text-primary transition-colors duration-300">
                                {initial}
                            </span>
                        )}

                        {/* corner tick mark */}
                        <span className="
                            absolute -top-2 -right-2 w-4 h-4
                            bg-primary
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-300 delay-100
                        "/>
                    </div>
                </div>

                {/* slide-up role badge */}
                <div className="
                    absolute bottom-0 left-0 right-0
                    px-5 py-2.5
                    bg-primary text-primary-foreground
                    translate-y-full group-hover:translate-y-0
                    transition-transform duration-300 ease-out
                    flex items-center justify-between
                ">
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em]">
                        {member.role}
                    </span>
                    <span className="text-[10px] font-mono opacity-60">
                        #{String(index + 1).padStart(2, "0")}
                    </span>
                </div>
            </div>

            {/* ── Body ───────────────────────────────────────── */}
            <div className="flex flex-col flex-1 p-6 gap-0">

                {/* accent bar that grows on hover */}
                <div className="h-[2px] w-8 bg-primary mb-5 group-hover:w-full transition-all duration-500 ease-out" />

                {/* name */}
                <h3 className="text-xl font-black uppercase tracking-tight leading-tight mb-1 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                </h3>

                {/* role (always visible, smaller) */}
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-4">
                    {member.role}
                </p>

                {/* bio */}
                {member.bio && (
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1 group-hover:text-foreground/70 transition-colors duration-300">
                        {member.bio}
                    </p>
                )}

                {/* ── Socials ───────────────────────────────── */}
                {socials.length > 0 && (
                    <div className="flex items-center gap-0 mt-5 border-t border-border pt-4">
                        {socials.map(({ href, Icon, label }) => (
                            <Link
                                key={label}
                                href={href!}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="
                                    w-9 h-9 flex items-center justify-center
                                    text-muted-foreground
                                    border border-transparent
                                    hover:border-primary hover:text-primary
                                    hover:bg-primary/5
                                    transition-all duration-200
                                    mr-1
                                "
                            >
                                <Icon className="h-4 w-4" />
                            </Link>
                        ))}

                        {/* push a subtle arrow to the far right */}
                        <span className="ml-auto text-muted-foreground/30 text-xs font-mono select-none group-hover:text-primary/50 transition-colors">
                            ↗
                        </span>
                    </div>
                )}
            </div>

            {/* ── Bottom border accent ───────────────────────── */}
            <div className="h-0 group-hover:h-1 bg-primary transition-all duration-300 ease-out" />
        </article>
    );
}
