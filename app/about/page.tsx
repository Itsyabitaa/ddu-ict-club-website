import { TeamCard } from "@/components/TeamCard";
import teamData from "@/data/team.json";
import { TeamMember } from "@/lib/types";
import { Rocket, Target } from "lucide-react";

export default function AboutPage() {
    const team = teamData as TeamMember[];

    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground">
            {/* Hero / Intro */}
            <section className="container mx-auto px-4 py-24 md:py-32 relative overflow-hidden">
                <div className="max-w-4xl space-y-12 relative z-10">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-primary font-bold tracking-widest uppercase text-xs">
                            <span className="h-px w-10 bg-primary" />
                            Empowering Innovation
                        </div>
                        <h1 className="text-6xl font-black tracking-tighter sm:text-7xl md:text-8xl leading-none uppercase">
                            <span className="block italic text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground))] opacity-50">ABOUT</span>
                            <span className="block flex flex-wrap gap-x-4">
                                <span className="bg-primary text-primary-foreground px-4 py-1 -rotate-1 shadow-[6px_6px_0px_0px_hsl(var(--foreground))]">DDU ICT</span>
                                <span>CLUB</span>
                            </span>
                        </h1>
                    </div>

                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                        A premier student organization at Dire Dawa University dedicated to fostering a <span className="text-foreground border-b-2 border-primary">culture of innovation</span>, coding, and collaboration.
                    </p>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mt-16">
                        {/* Mission Card */}
                        <div className="group relative p-8 border border-border bg-background transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))]">
                            <div className="mb-6 w-12 h-12 bg-muted group-hover:bg-primary flex items-center justify-center transition-colors duration-500">
                                <Target className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">Our Mission</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To empower students with technical skills and mentorship to become <span className="text-foreground font-bold italic">world-class technology leaders</span> and innovators.
                            </p>
                            <span className="absolute top-4 right-6 opacity-5 text-7xl font-black select-none group-hover:opacity-10 transition-opacity">01</span>
                        </div>

                        {/* Vision Card */}
                        <div className="group relative p-8 border border-border bg-background transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))]">
                            <div className="mb-6 w-12 h-12 bg-muted group-hover:bg-primary flex items-center justify-center transition-colors duration-500">
                                <Rocket className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">Our Vision</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                A future where every student has the opportunity to <span className="text-foreground font-bold italic">realize their full potential</span> through technology and entrepreneurship.
                            </p>
                            <span className="absolute top-4 right-6 opacity-5 text-7xl font-black select-none group-hover:opacity-10 transition-opacity">02</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Team */}
            <section className="border-t border-primary py-24">
                <div className="container mx-auto px-4">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4 uppercase font-black">Meet Our Team</h2>
                        <p className="text-lg text-muted-foreground">
                            A dedicated group of leaders and innovators driving the club forward.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {team.map((member, i) => (
                            <TeamCard key={member.id} member={member} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
