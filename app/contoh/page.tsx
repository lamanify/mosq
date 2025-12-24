import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LinkButton } from "@/components/ui/Button";
import { PageBanner } from "@/components/ui/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contoh Website Masjid | MOSQ",
    description:
        "Lihat galeri dan contoh laman web masjid yang telah dibina menggunakan platform MOSQ.",
};

export default function ContohPage() {
    return (
        <div className="bg-black min-h-screen">
            <Header />
            <main>
                <PageBanner
                    tag="DEMO & TEMPLATE"
                    title="Contoh Website Masjid"
                    description="Lihat sendiri bagaimana rupa dan fungsi website yang akan kami bina untuk masjid anda."
                />

                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Preview Image / Mockup */}
                            <div className="relative group reveal-on-load stagger-1">
                                <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-orange-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                                <div className="relative bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    {/* Placeholder for screenshot */}
                                    <div className="aspect-[16/10] bg-gray-800 relative flex items-center justify-center group overflow-hidden">
                                        {/* Replace with actual image later */}
                                        <div className="text-center p-8">
                                            <span className="text-gray-500 block mb-2 font-mono text-sm tracking-widest uppercase">Paparan Demo</span>
                                            <h3 className="text-2xl font-bold text-white">Masjid Al-Hidayah</h3>
                                        </div>

                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                                            <LinkButton
                                                href="/masjid-al-hidayah-shah-alam"
                                                className="bg-gradient-gold text-black hover:opacity-90 font-bold border-none"
                                            >
                                                Lawati Demo
                                            </LinkButton>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="reveal-on-load stagger-2">
                                <div className="mb-8">
                                    <span className="text-gold font-bold tracking-widest text-sm uppercase font-mono">Ciri-ciri Utama</span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6 tracking-tight">Lengkap & Profesional</h2>
                                    <p className="text-gray-400 text-lg leading-relaxed font-sans">
                                        Setiap laman web masjid dilengkapi dengan halaman-halaman penting yang tersusun rapi dan mudah dilayari oleh jemaah.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { title: "Laman Utama", desc: "Ringkasan maklumat penting dan waktu solat." },
                                        { title: "Jadual Solat", desc: "Paparan waktu solat harian yang jelas." },
                                        { title: "Aktiviti", desc: "Senarai kuliah dan program masjid." },
                                        { title: "Hubungi", desc: "Peta lokasi dan cara hubungi AJK." },
                                    ].map((item, i) => (
                                        <div key={i} className={`reveal-on-load stagger-${i + 2} flex gap-4`}>
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mt-1">
                                                <svg className="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold">{item.title}</h4>
                                                <p className="text-sm text-gray-400 font-sans">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 reveal-on-load stagger-5">
                                    <LinkButton
                                        href="/masjid-al-hidayah-shah-alam"
                                        className="bg-white/10 text-white hover:bg-white/20 border-white/5 transition-all"
                                    >
                                        Lihat Demo Penuh &rarr;
                                    </LinkButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
