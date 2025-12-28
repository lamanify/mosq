import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LinkButton } from "@/components/ui/Button";
import { PageBanner } from "@/components/ui/PageBanner";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Contoh Website Masjid | MOSQ",
    description:
        "Lihat galeri dan contoh laman web masjid yang telah dibina menggunakan platform MOSQ.",
};

export default function ContohPage() {
    return (
        <div className="bg-white min-h-screen">
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
                                <div className="absolute -inset-4 bg-gradient-to-r from-gold/10 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="relative bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:-translate-y-2">
                                    {/* Snapshot of the demo */}
                                    <div className="aspect-[16/10] bg-zinc-50 relative flex items-center justify-center overflow-hidden">
                                        <Image
                                            src="https://res.cloudinary.com/debi0yfq9/image/upload/v1766905723/Screenshot_7_a7eutg.webp"
                                            alt="Paparan Demo Masjid Al-Hidayah"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                            priority
                                        />

                                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                                            <LinkButton
                                                href="https://masjid-shah-alam.mosq.io/"
                                                className="bg-gradient-gold text-black hover:opacity-90 font-bold border-none shadow-xl"
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
                                    <h2 className="text-3xl md:text-4xl font-bold text-grey-900 mt-2 mb-6 tracking-tight">Lengkap & Profesional</h2>
                                    <p className="text-grey-600 text-lg leading-relaxed font-sans">
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
                                                <h4 className="text-grey-900 font-bold">{item.title}</h4>
                                                <p className="text-sm text-grey-600 font-sans">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 reveal-on-load stagger-5">
                                    <LinkButton
                                        href="https://masjid-shah-alam.mosq.io/"
                                        className="bg-gradient-gold text-black font-bold hover:opacity-90 border-none transition-all"
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
