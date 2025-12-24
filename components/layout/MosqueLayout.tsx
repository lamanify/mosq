import Link from "next/link";
import { MosqueData } from "@/lib/types";

interface MosqueLayoutProps {
    mosque: MosqueData;
    children: React.ReactNode;
}

const mosqueNavLinks = [
    { href: "", label: "Laman Utama" },
    { href: "/tentang", label: "Tentang" },
    { href: "/jadual-solat", label: "Jadual Solat" },
    { href: "/aktiviti", label: "Aktiviti" },
    { href: "/hubungi", label: "Hubungi" },
];

export default function MosqueLayout({ mosque, children }: MosqueLayoutProps) {
    const basePath = `/${mosque.slug}`;

    return (
        <div className="bg-white text-gray-900 min-h-screen font-sans selection:bg-gold selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <nav
                    className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
                    aria-label="Navigasi masjid"
                >
                    <div className="flex h-16 items-center justify-between">
                        {/* Mosque Name */}
                        <Link
                            href={basePath}
                            className="flex items-center gap-2 font-bold text-lg"
                        >
                            <span className="text-gold">MOSQ</span>
                            <span className="text-gray-300">|</span>
                            <span className="text-gray-900 truncate max-w-[200px] sm:max-w-none">
                                {mosque.namaMasjid}
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex md:items-center md:gap-6">
                            {mosqueNavLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={`${basePath}${link.href}`}
                                    className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                            aria-label="Buka menu navigasi"
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
            </header>

            {/* Main Content */}
            <main>{children}</main>

            {/* Footer */}
            <footer className="bg-gray-50 border-t border-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mosque Info */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg text-gray-900">
                                {mosque.namaMasjid}
                            </h3>
                            <p className="text-sm text-gray-600">{mosque.alamatPenuh}</p>
                            <p className="text-sm text-gray-600">
                                {mosque.bandar}, {mosque.negeri}
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-semibold text-sm text-gray-900 mb-4">
                                Pautan Pantas
                            </h3>
                            <ul className="space-y-3">
                                {mosqueNavLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={`${basePath}${link.href}`}
                                            className="text-sm text-gray-600 hover:text-black transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="font-semibold text-sm text-gray-900 mb-4">
                                Hubungi Kami
                            </h3>
                            <div className="space-y-3 text-sm text-gray-600">
                                <p>
                                    <a
                                        href={`tel:${mosque.telefon}`}
                                        className="hover:text-black"
                                    >
                                        {mosque.telefon}
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href={`mailto:${mosque.emel}`}
                                        className="hover:text-black"
                                    >
                                        {mosque.emel}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Powered by MOSQ */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <p className="text-center text-sm text-gray-500">
                            Laman web ini disediakan oleh{" "}
                            <Link href="/" className="text-gold font-medium hover:underline">
                                MOSQ
                            </Link>{" "}
                            - Platform Laman Web Masjid Percuma
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
