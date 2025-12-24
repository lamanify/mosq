import Link from "next/link";

const footerLinks = {
    platform: [
        { href: "/cara-kerja", label: "Cara Dapatkan" },
        { href: "/kenapa-perlu", label: "Manfaat" },
        { href: "/siapa-kami", label: "Siapa Kami" },
        { href: "/contoh", label: "Demo" },
    ],
    support: [
        { href: "/soalan-lazim", label: "Soalan Lazim" },
        { href: "/daftar", label: "Daftar Masjid" },
        { href: "/daftar", label: "Hubungi Kami" },
    ]
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/5 pt-20 pb-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-2 space-y-6">
                        <Link href="/" className="inline-block transition-opacity hover:opacity-80">
                            <img
                                src="https://res.cloudinary.com/lamanify/image/upload/v1766550438/Mosq_fqtghd.webp"
                                alt="MOSQ Logo"
                                className="h-[72px] w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                            Platform laman web masjid percuma yang direka untuk memudahkan pengurusan maklumat masjid secara digital, profesional, dan selamat.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders could go here */}
                        </div>
                    </div>

                    {/* Links Group 1 */}
                    <div>
                        <h3 className="font-bold text-white mb-6 font-heading">Platform</h3>
                        <ul className="space-y-4">
                            {footerLinks.platform.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-500 hover:text-gold transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Group 2 */}
                    <div>
                        <h3 className="font-bold text-white mb-6 font-heading">Bantuan</h3>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-500 hover:text-gold transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2 text-center md:text-left">
                        <p className="text-sm text-gray-500">
                            &copy; {currentYear} <span className="text-gray-400 font-bold">MOSQ</span>. Hak cipta terpelihara.
                        </p>
                        <p className="text-xs text-gray-600 max-w-xl font-sans leading-relaxed">
                            MOSQ ialah inisiatif digital percuma untuk masjid. Dibangunkan dan disokong oleh{" "}
                            <a
                                href="https://lamanify.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-gold transition-colors"
                            >
                                Lamanify
                            </a>{" "}
                            sebagai sumbangan khidmat masyarakat.
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] text-gray-700 uppercase tracking-[0.2em] font-bold">Inisiatif Kebajikan</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
