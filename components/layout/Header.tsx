"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
    { href: "/cara-kerja", label: "Cara Kerja" },
    { href: "/kenapa-perlu", label: "Kenapa Perlu" },
    { href: "/contoh", label: "Contoh" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4">
            <nav
                className={`
          transition-all duration-300 ease-in-out
          flex items-center justify-between
          w-full max-w-5xl
          rounded-2xl
          px-6 py-3
          ${scrolled ? "bg-black/80 shadow-lg shadow-gold/5 backdrop-blur-xl border border-white/10" : "bg-transparent border border-transparent"}
        `}
                aria-label="Navigasi utama"
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center transition-opacity hover:opacity-80"
                >
                    <img
                        src="https://res.cloudinary.com/lamanify/image/upload/v1766550438/Mosq_fqtghd.webp"
                        alt="MOSQ Logo"
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-gold ${isActive ? "text-white" : "text-gray-400"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/soalan-lazim"
                        className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                        Soalan Lazim
                    </Link>
                    <Link
                        href="/daftar"
                        className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/5 px-4 py-2 text-sm font-bold transition-all"
                    >
                        Daftar
                    </Link>

                    {/* Mobile menu button placeholder (simplified) */}
                    <button
                        type="button"
                        className="md:hidden p-2 text-gray-400 hover:text-white"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}
