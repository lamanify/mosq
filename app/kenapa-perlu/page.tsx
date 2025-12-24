import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";

export const metadata: Metadata = {
    title: "Kenapa Perlu Website Masjid | MOSQ",
    description:
        "5 sebab utama mengapa masjid memerlukan laman web rasmi. Tingkatkan pengurusan, kutipan derma, dan hebahan maklumat.",
    alternates: {
        canonical: "/kenapa-perlu",
    },
};

export default function KenapaPerluPage() {
    return (
        <div className="bg-black min-h-screen">
            <Header />
            <main>
                <PageBanner
                    tag="MANFAAT DIGITAL"
                    title="Mengapa Perlu Website?"
                    description="Transformasi pengurusan masjid ke arah lebih efisien, telus, dan mesra jemaah."
                />

                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            {/* Feature 1 */}
                            <div className="reveal-on-load stagger-1 glass-card p-10 rounded-2xl">
                                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6 border border-gold/20">
                                    <svg
                                        className="w-7 h-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.43.816 1.035.816 1.73 0 .695-.32 1.3-.816 1.73m0-3.46a24.347 24.347 0 010 3.46"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Pusat Informasi Setempat
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-sans mb-0">
                                    Jemaah tidak perlu lagi tertanya-tanya tentang waktu solat,
                                    kuliah, atau program terkini. Segala maklumat boleh diakses di
                                    hujung jari, bila-bila masa.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="reveal-on-load stagger-2 glass-card p-10 rounded-2xl">
                                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6 border border-gold/20">
                                    <svg
                                        className="w-7 h-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Kemudahan Infaq & Derma
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-sans mb-0">
                                    Paparkan akaun bank masjid atau QR Pay untuk memudahkan orang
                                    ramai menyumbang secara terus tanpa ragu-ragu tentang
                                    kesahihan nombor akaun.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="reveal-on-load stagger-3 glass-card p-10 rounded-2xl">
                                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6 border border-gold/20">
                                    <svg
                                        className="w-7 h-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Kredibiliti & Imej Profesional
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-sans mb-0">
                                    Tingkatkan keyakinan orang awam terhadap pengurusan masjid.
                                    Masjid dengan laman web rasmi dilihat lebih telus dan cekap.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="reveal-on-load stagger-4 glass-card p-10 rounded-2xl">
                                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6 border border-gold/20">
                                    <svg
                                        className="w-7 h-7"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 5.472m0 0a9.09 9.09 0 00-3.279 3.298m.015.018a3 3 0 004.282 4.282"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Tarik Minat Golongan Muda
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-sans mb-0">
                                    Generasi muda lebih selesa mencari maklumat secara dalam talian.
                                    Dekati mereka melalui medium yang mereka guna setiap hari.
                                </p>
                            </div>
                        </div>

                        {/* Who Behind MOSQ */}
                        <div className="reveal-on-load stagger-1 mt-32 max-w-2xl mx-auto border-t border-white/5 pt-16">
                            <h2 className="text-2xl font-bold text-white mb-8 text-center">
                                Siapa Di Sebalik MOSQ?
                            </h2>
                            <div className="space-y-6 text-gray-400 font-sans leading-relaxed text-center italic opacity-80">
                                <p>
                                    MOSQ dibangunkan oleh pasukan profesional web yang juga mengendalikan Lamanify, sebuah agensi reka bentuk web dalam sektor kesihatan.
                                </p>
                                <p>
                                    Sebagai sebahagian daripada tanggungjawab sosial, MOSQ diwujudkan untuk membantu masjid mempunyai kehadiran digital yang profesional tanpa kos.
                                </p>
                            </div>
                        </div>

                        <div className="mt-24 text-center reveal-on-load stagger-2">
                            <Link
                                href="/daftar"
                                className="inline-flex items-center justify-center rounded-xl bg-gradient-gold text-black px-10 py-5 text-lg font-bold transition-all shadow-[0_0_30px_rgba(201,162,77,0.4)] hover:scale-105"
                            >
                                Dapat Website Masjid Percuma
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
