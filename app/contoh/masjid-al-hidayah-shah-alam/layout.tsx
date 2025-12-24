"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";
import { MoonStar, MapPin, Phone, Mail, Menu, X, Heart, ChevronRight, ArrowLeft } from "lucide-react";

export default function DemoLayout({ children }: { children: ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-green-100 selection:text-green-900">

            {/* Shared Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
                {/* Top Announcement/Return Bar */}
                <div className="bg-slate-900 py-2.5 px-4 text-center relative z-[60]">
                    <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
                        <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest hidden xs:inline">Mosq.io Demo Site</span>
                        <div className="h-4 w-px bg-slate-800 hidden xs:block"></div>
                        <Link href="/" className="flex items-center gap-2 text-xs font-bold text-white hover:text-green-400 transition-colors group">
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            Kembali ke Laman Utama Mosq.io
                        </Link>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
                    <Link href="/contoh/masjid-al-hidayah-shah-alam" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-600/20 group-hover:shadow-green-600/30 transition-all">
                            <MoonStar size={20} fill="currentColor" />
                        </div>
                        <span className="text-xl font-bold font-heading text-gray-900 group-hover:text-green-700 transition-colors tracking-tight">Masjid Shah Alam</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 justify-center bg-gray-50/50 px-8 py-2.5 rounded-full border border-gray-100/50 backdrop-blur-sm">
                        <NavLink href="/contoh/masjid-al-hidayah-shah-alam">Utama</NavLink>
                        <NavLink href="/contoh/masjid-al-hidayah-shah-alam/tentang">Tentang</NavLink>
                        <NavLink href="/contoh/masjid-al-hidayah-shah-alam/pendidikan">Pendidikan</NavLink>
                        <NavLink href="/contoh/masjid-al-hidayah-shah-alam/aktiviti">Aktiviti</NavLink>
                        <NavLink href="/contoh/masjid-al-hidayah-shah-alam/hubungi">Hubungi</NavLink>
                    </nav>

                    <div className="flex items-center gap-2 sm:gap-4">
                        <Link href="/contoh/masjid-al-hidayah-shah-alam/derma" className="hidden sm:block bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20 active:scale-95 text-center">
                            Derma Tabung
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMenu}
                            className="p-2.5 rounded-xl bg-gray-50 text-gray-600 hover:text-gray-900 border border-gray-100 md:hidden transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 top-[73px] z-40 bg-white md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                    <nav className="p-6 space-y-4">
                        <div className="grid grid-cols-1 gap-2">
                            <MobileNavLink href="/contoh/masjid-al-hidayah-shah-alam" onClick={toggleMenu}>Utama</MobileNavLink>
                            <MobileNavLink href="/contoh/masjid-al-hidayah-shah-alam/tentang" onClick={toggleMenu}>Tentang Kami</MobileNavLink>
                            <MobileNavLink href="/contoh/masjid-al-hidayah-shah-alam/pendidikan" onClick={toggleMenu}>Pendidikan</MobileNavLink>
                            <MobileNavLink href="/contoh/masjid-al-hidayah-shah-alam/aktiviti" onClick={toggleMenu}>Aktiviti</MobileNavLink>
                            <MobileNavLink href="/contoh/masjid-al-hidayah-shah-alam/hubungi" onClick={toggleMenu}>Hubungi</MobileNavLink>
                        </div>
                        <div className="pt-4 border-t border-gray-100">
                            <Link
                                href="/contoh/masjid-al-hidayah-shah-alam/derma"
                                onClick={toggleMenu}
                                className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-600/20"
                            >
                                <Heart size={20} fill="white" />
                                Derma Sekarang
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>

            <main className="pt-32 sm:pt-36 min-h-screen">
                {children}
            </main>

            {/* Shared Footer */}
            <footer className="bg-[#050505] text-white pt-24 pb-12 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                        <div className="col-span-1 md:col-span-2 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white">
                                    <MoonStar size={20} fill="currentColor" />
                                </div>
                                <span className="text-2xl font-bold font-heading tracking-tight">Masjid Shah Alam</span>
                            </div>
                            <p className="text-gray-400 leading-relaxed max-w-sm text-lg">
                                Membangun ummah melalui kesatuan hati dan penyibaran ilmu yang bermanfaat.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold mb-8 text-white uppercase tracking-widest">Pautan</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li><Link href="/contoh/masjid-al-hidayah-shah-alam" className="hover:text-white transition-colors">Utama</Link></li>
                                <li><Link href="/contoh/masjid-al-hidayah-shah-alam/tentang" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                                <li><Link href="/contoh/masjid-al-hidayah-shah-alam/pendidikan" className="hover:text-white transition-colors">Pendidikan</Link></li>
                                <li><Link href="/contoh/masjid-al-hidayah-shah-alam/derma" className="hover:text-white transition-colors">Derma Tabung</Link></li>
                                <li><Link href="/contoh/masjid-al-hidayah-shah-alam/hubungi" className="hover:text-white transition-colors">Hubungi</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-bold mb-8 text-white uppercase tracking-widest">Info</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="text-white/20"><MapPin size={18} /></span>
                                    <span>Shah Alam, Selangor</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-white/20"><Phone size={18} /></span>
                                    <span>+60 3-5510 1234</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-white/20"><Mail size={18} /></span>
                                    <span>hello@mosq.io</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 text-sm">
                            Copyright {new Date().getFullYear()} Masjid Shah Alam. All rights reserved. Powered by Mosq.io
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function NavLink({ href, children }: { href: string, children: ReactNode }) {
    return (
        <Link href={href} className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-white px-4 py-1.5 rounded-full transition-all">
            {children}
        </Link>
    )
}

function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: ReactNode }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-lg font-semibold text-gray-900 hover:text-green-600 px-4 py-3 rounded-xl transition-all hover:bg-gray-50 flex items-center justify-between group"
        >
            {children}
            <ChevronRight size={20} className="text-gray-300 group-hover:text-green-600 transition-all" />
        </Link>
    )
}
