"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const navLinks = [
    { href: "/cara-kerja", label: "Cara Dapatkan" },
    { href: "/kenapa-perlu", label: "Kenapa" },
    { href: "/siapa-kami", label: "Siapa Kami" },
    { href: "/contoh", label: "Contoh" },
    { href: "/soalan-lazim", label: "Soalan Lazim" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMobileMenuOpen(false);
            }
        };

        if (mobileMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [mobileMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    return (
        <div className="fixed top-0 w-full z-50 flex justify-center pt-6 px-4" ref={menuRef}>
            <nav
                className={`
          transition-all duration-300 ease-in-out
          flex items-center justify-between
          w-full max-w-5xl
          rounded-2xl
          px-6 py-3
          ${scrolled || mobileMenuOpen ? "bg-black/80 shadow-lg shadow-gold/5 backdrop-blur-xl border border-white/10" : "bg-transparent border border-transparent"}
        `}
                aria-label="Navigasi utama"
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center transition-opacity hover:opacity-80"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <Image
                        src="https://res.cloudinary.com/lamanify/image/upload/v1766550438/Mosq_fqtghd.webp"
                        alt="MOSQ Logo"
                        width={120}
                        height={40}
                        className="h-[72px] w-auto object-contain"
                        priority
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

                {/* CTA Button & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/daftar"
                        className="inline-flex items-center justify-center rounded-lg bg-gold hover:bg-gold/90 text-black border border-transparent px-6 py-2 text-sm font-bold transition-all shadow-lg shadow-gold/20"
                    >
                        Dapat Website Masjid Percuma
                    </Link>

                    {/* Mobile menu toggle button */}
                    <button
                        type="button"
                        className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
                    >
                        <svg
                            className="h-6 w-6 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            <div
                id="mobile-menu"
                className={`
                    md:hidden
                    fixed left-0 right-0
                    top-[88px]
                    mx-4
                    rounded-2xl
                    bg-black/95 backdrop-blur-xl
                    border border-white/10
                    shadow-2xl shadow-black/50
                    transition-all duration-300 ease-in-out
                    transform-gpu
                    ${mobileMenuOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-4 pointer-events-none"
                    }
                `}
                aria-hidden={!mobileMenuOpen}
            >
                <div className="flex flex-col p-6 gap-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`
                                    block py-3 px-4 rounded-xl text-base font-medium 
                                    transition-all duration-200
                                    ${isActive
                                        ? "bg-white/10 text-white"
                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                    }
                                `}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        );
                    })}

                    {/* Divider */}
                    <div className="h-px bg-white/10 my-2" />

                    {/* Mobile CTA */}
                    <Link
                        href="/daftar"
                        className="block py-3 px-4 rounded-xl text-base font-bold text-center bg-gradient-to-r from-gold/20 to-gold/10 text-gold border border-gold/20 hover:bg-gold/30 transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Dapat Website Masjid Percuma
                    </Link>
                </div>
            </div>

            {/* Backdrop overlay */}
            <div
                className={`
                    md:hidden
                    fixed inset-0 -z-10
                    bg-black/60 backdrop-blur-sm
                    transition-opacity duration-300
                    ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
                `}
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
            />
        </div>
    );
}
