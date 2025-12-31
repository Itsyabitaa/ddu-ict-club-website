import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
     
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import registrationsData from "@/data/registrations.json";
import { RegistrationItem } from "@/lib/types";

export default function RegisterPage() {
    const registrations = registrationsData as RegistrationItem[];
    const activeRegistrations = registrations.filter((r) => r.isOpen);

    if (activeRegistrations.length === 0) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground container mx-auto px-4">
                <div className="text-center max-w-md space-y-6">
                    <h1 className="text-3xl font-bold tracking-tighter">No Open Registrations</h1>
                    <p className="text-muted-foreground">
                        There are currently no events or programs accepting registrations.
                        Please check back later or verify our Events page.
                    </p>
                    <Button asChild className="rounded-none border-2 border-white bg-white text-black    ">
                        <Link href="/">Return Home</Link>
                    </Button>
                </div>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground container mx-auto px-4 py-12 md:py-24">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl uppercase mb-4">Register</h1>
            <div className="h-1 w-20 bg-primary mb-12" />

            <div className="grid gap-6">
                {activeRegistrations.map((item) => (
                    <Card key={item.id} className="rounded-none border-[3px] border-border transition-all duration-300  hover:shadow-[4px_4px_0px_0px_hsl(var(--primary))]">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold group-hover:text-black">{item.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2 mt-2 group-hover:text-black">
                                <MapPin className="h-4 w-4" /> {item.location}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-border p-6 mt-4">
                            <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground group-hover:text-black">
                                Deadline: <span className="text-foreground group-hover:text-black ml-1">{item.deadline || "TBA"}</span>
                            </span>
                            <Button asChild className="group rounded-none w-full sm:w-auto font-bold uppercase tracking-wider border-2 border-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1">
                                <Link href={`/register/${item.id}`}>
                                    Register Now <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    );
}
