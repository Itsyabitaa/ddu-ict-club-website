import { TeamCard } from "@/components/TeamCard";
import teamData from "@/data/team.json";
import { TeamMember } from "@/lib/types";

export default function AboutPage() {
    const team = teamData as TeamMember[];

    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground">
            {/* Hero / Intro */}
            <section className="container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-4xl space-y-8">
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
                        ABOUT DDU ICT CLUB
                    </h1>
                    <div className="h-1 w-20 bg-primary" />
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        The DDU ICT Club is a premier student organization at Dire Dawa University dedicated to fostering a culture of innovation, coding, and collaboration. We believe in the power of technology to transform lives and communities.
                    </p>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-12">
                        <div className="border border-primary p-8">
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-muted-foreground">
                                To empower students with the technical skills, mentorship, and resources needed to become world-class technology leaders and innovators.
                            </p>
                        </div>
                        <div className="border border-primary p-8">
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-muted-foreground">
                                A future where every student at Dire Dawa University has the opportunity to realize their full potential through technology and entrepreneurship.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Meet Our Team */}
            <section className="border-t border-primary py-24">
                <div className="container mx-auto px-4">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Meet Our Team</h2>
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
