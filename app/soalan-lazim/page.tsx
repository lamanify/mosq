import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Soalan Lazim (FAQ) | MOSQ",
    description:
        "Jawapan kepada soalan lazim mengenai perkhidmatan bina laman web masjid percuma oleh MOSQ.",
};

export default function SoalanLazimPage() {
    const faqs = [
        {
            question: "Adakah perkhidmatan ini benar-benar percuma?",
            answer:
                "Ya, 100% percuma. Tiada bayaran pendaftaran, tiada yuran bulanan, dan tiada kos tersembunyi. Ini adalah inisiatif wakaf digital kami.",
        },
        {
            question: "Siapakah yang menguruskan laman web ini?",
            answer:
                "Pihak MOSQ akan menyediakan laman web tersebut. Selepas siap, pihak masjid boleh meminta kemaskini maklumat (seperti waktu solat atau aktiviti) dengan menghubungi kami. Kami sedang membangunkan sistem untuk AJK masjid mengemaskini sendiri pada masa akan datang.",
        },
        {
            question: "Berapa lama masa yang diambil untuk siap?",
            answer:
                "Biasanya proses mengambil masa 3 hingga 7 hari bekerja selepas kami menerima maklumat lengkap daripada pihak masjid.",
        },
        {
            question: "Adakah saya perlu beli domain atau hosting?",
            answer:
                "Tidak perlu. Kami akan hoskan laman web anda di sub-domain mosq.io (contoh: mosq.io/masjid-anda). Hosting juga ditanggung sepenuhnya oleh kami.",
        },
        {
            question: "Bolehkan saya guna domain sendiri (contoh.com)?",
            answer:
                "Buat masa ini, semua laman web di bawah platform MOSQ menggunakan alamat mosq.io untuk memastikan ia kekal percuma dan mudah diurus. Namun, anda boleh 'forward' domain anda ke alamat MOSQ jika mahu.",
        },
        {
            question: "Adakah data masjid selamat?",
            answer:
                "Ya, kami mengambil berat tentang keselamatan data. Kami menggunakan teknologi terkini dan 'best practices' untuk melindungi maklumat masjid anda.",
        },
    ];

    return (
        <div className="bg-black min-h-screen">
            <Header />
            <main>
                <PageBanner
                    tag="BANTUAN"
                    title="Soalan Lazim"
                    description="Jawapan kepada persoalan umum mengenai perkhidmatan percuma MOSQ."
                />

                {/* FAQ List */}
                <section className="py-24">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`reveal-on-load stagger-${(index % 3) + 1} glass-card rounded-2xl p-8 border border-white/5 hover:border-gold/30 transition-all`}
                                >
                                    <h3 className="text-xl font-bold text-white mb-3">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-0 font-sans">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Who Behind MOSQ */}
                        <div className="reveal-on-load stagger-3 mt-32 max-w-2xl mx-auto border-t border-white/5 pt-16">
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

                        <div className="reveal-on-load stagger-1 mt-24 text-center">
                            <p className="text-gray-400 mb-6 font-sans">
                                Ada soalan lain? Hubungi pasukan sokongan kami.
                            </p>
                            <a
                                href="mailto:salam@mosq.io"
                                className="text-gold font-bold hover:underline transition-colors"
                            >
                                salam@mosq.io
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
