import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background py-10">
            <div className="container mx-auto flex flex-col items-center gap-6 px-4 md:flex-row md:justify-between">
                <div className="flex flex-col items-center gap-2 md:items-start">
                    <Link href="/" className="text-lg font-bold">
                        DDU ICT Club
                    </Link>
                    <p className="text-center text-sm text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} DDU ICT Club. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-4">
                    <Link href="https://twitter.com" target="_blank" rel="noreferrer">
                        <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://github.com" target="_blank" rel="noreferrer">
                        <Github className="h-5 w-5 hover:text-primary transition-colors" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
