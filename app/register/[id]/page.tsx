"use client";

import Link from "next/link";
import {  useRouter } from "next/navigation";
import { use, useState } from "react";
import {   CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import registrationsData from "@/data/registrations.json";
import { RegistrationItem } from "@/lib/types";
import { Textarea } from "@/components/ui/textarea";

interface RegistrationFormPageProps {
    params: Promise<{
        id: string;
    }>;
}

 

export default function RegistrationFormPage({ params }: RegistrationFormPageProps) {
    const { id } = use(params);  

    const [submitted, setSubmitted] = useState(false);
    const router = useRouter();

    const item = (registrationsData as RegistrationItem[]).find((r) => r.id === id);

    if (!item || !item.isOpen) {
        return (
            <div className="container mx-auto px-4 py-24 text-center">
                <h1 className="text-2xl font-bold mb-4">Registration Not Found or Closed</h1>
                <Button asChild variant="outline"><Link href="/register">Back to Registrations</Link></Button>
            </div>
        );
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock submit logic
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground container mx-auto px-4">
                <Card className="max-w-md w-full border-[3px] border-border bg-background text-center p-8">
                    <div className="flex justify-center mb-6">
                        <CheckCircle className="h-16 w-16 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-bold mb-4">You're Registered!</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground mb-8">
                        Thanks for signing up for <strong>{item.title}</strong>. We'll be in touch soon.
                    </CardDescription>
                    <Button onClick={() => router.push('/')} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-none">
                        Return to Home
                    </Button>
                </Card>
            </main>
        );
    }

    return (
        <main className="flex min-h-screen flex-col bg-background text-foreground container mx-auto px-4 py-12 md:py-24">
            <div className="w-full max-w-2xl mx-auto mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link href="/register" className="hover:text-primary transition-colors">Register</Link>
                <span>/</span>
                <span className="text-foreground line-clamp-1">{item.title}</span>
            </div>

            <div className="max-w-2xl mx-auto w-full">
                <Card className="rounded-none border-[3px] border-border bg-background">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">Register for {item.title}</CardTitle>
                        <CardDescription>
                            Complete the form below to secure your spot.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Full Name
                                </label>
                                <Input id="name" required placeholder="Abebe Bikila" className="rounded-none border-input bg-background" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium leading-none">
                                        Email Address
                                    </label>
                                    <Input id="email" type="email" required placeholder="abebe@example.com" className="rounded-none border-input bg-background" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium leading-none">
                                        Phone Number
                                    </label>
                                    <Input id="phone" type="tel" required placeholder="0911..." className="rounded-none border-input bg-background" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="dept" className="text-sm font-medium leading-none">
                                    Department / Year
                                </label>
                                <Input id="dept" required placeholder="Software Engineering - 3rd Year" className="rounded-none border-input bg-background" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none">
                                    Optional Message
                                </label>
                                {/* Input as textarea mock */}
                                <Textarea id="message" placeholder="Any questions?" className="rounded-none border-input bg-background  " />
                            </div>

                            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-none border-2 border-primary">
                                Submit Registration
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
