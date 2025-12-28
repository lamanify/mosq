import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";
import { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
    title: "Soalan Lazim (FAQ) | MOSQ",
    description:
        "Jawapan kepada soalan lazim mengenai perkhidmatan bina laman web masjid percuma oleh MOSQ.",
};

export default function SoalanLazimPage() {

    return (
        <div className="bg-white min-h-screen">
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
                            <FAQAccordion
                                items={[
                                    {
                                        question: "Adakah perkhidmatan ini benar-benar percuma?",
                                        answer: "Ya, 100% percuma. Tiada bayaran pendaftaran, tiada yuran bulanan, dan tiada kos tersembunyi. Ini adalah inisiatif wakaf digital kami.",
                                    },
                                    {
                                        question: "Adakah ia percuma selamanya?",
                                        answer: "Ya, perkhidmatan ini kekal percuma selagi Lamanify.com mampu menampung kos operasi untuk menyokong inisiatif ini.",
                                    },
                                    {
                                        question: "Bolehkah saya dapat akses untuk edit sendiri?",
                                        answer: "Buat masa ini, tidak. Ini adalah binaan 'one-time'. Sebarang perubahan di masa hadapan perlu melalui pasukan Lamanify bagi memastikan kualiti rekabentuk terjaga.",
                                    },
                                    {
                                        question: "Mengapa percuma?",
                                        answer: "Ini adalah sebahagian daripada projek CSR (Tanggungjawab Sosial Korporat) kami. Kami ingin menyumbang kepakaran teknikal kami kembali kepada komuniti Islam.",
                                    },
                                    {
                                        question: "Siapakah Lamanify?",
                                        answer: "Lamanify adalah agensi reka bentuk web yang pakar dalam sektor kesihatan di Malaysia. Kami telah membina laman web untuk lebih 100+ klinik dan pusat perubatan.",
                                    },
                                    {
                                        question: "Bagaimana cara dapatkan?",
                                        answer: (
                                            <>
                                                Anda boleh mendaftar minat dengan mengisi borang di halaman{" "}
                                                <Link href="https://app.mosq.io/" className="text-gold hover:underline">
                                                    https://app.mosq.io/
                                                </Link>
                                                . Kami akan menghubungi anda untuk langkah seterusnya.
                                            </>
                                        ),
                                    },
                                ]}
                            />
                        </div>

                        {/* Who Behind MOSQ */}
                        <div className="reveal-on-load stagger-3 mt-32 max-w-2xl mx-auto border-t border-zinc-200 pt-16">
                            <h2 className="text-2xl font-bold text-grey-900 mb-8 text-center">
                                Siapa Di Sebalik MOSQ?
                            </h2>
                            <div className="space-y-6 text-grey-600 font-sans leading-relaxed text-center italic opacity-80">
                                <p>
                                    MOSQ dibangunkan oleh pasukan profesional web yang juga mengendalikan Lamanify, sebuah agensi reka bentuk web dalam sektor kesihatan.
                                </p>
                                <p>
                                    Sebagai sebahagian daripada tanggungjawab sosial, MOSQ diwujudkan untuk membantu masjid mempunyai kehadiran digital yang profesional tanpa kos.
                                </p>
                            </div>
                        </div>

                        <div className="reveal-on-load stagger-1 mt-24 text-center">
                            <p className="text-grey-600 mb-6 font-sans">
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: [
                                {
                                    "@type": "Question",
                                    name: "Adakah perkhidmatan ini benar-benar percuma?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Ya, 100% percuma. Tiada bayaran pendaftaran, tiada yuran bulanan, dan tiada kos tersembunyi. Ini adalah inisiatif wakaf digital kami.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Adakah ia percuma selamanya?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Ya, perkhidmatan ini kekal percuma selagi Lamanify.com mampu menampung kos operasi untuk menyokong inisiatif ini.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Bolehkah saya dapat akses untuk edit sendiri?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Buat masa ini, tidak. Ini adalah binaan 'one-time'. Sebarang perubahan di masa hadapan perlu melalui pasukan Lamanify bagi memastikan kualiti rekabentuk terjaga.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Mengapa percuma?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Ini adalah sebahagian daripada projek CSR (Tanggungjawab Sosial Korporat) kami. Kami ingin menyumbang kepakaran teknikal kami kembali kepada komuniti Islam.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Siapakah Lamanify?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Lamanify adalah agensi reka bentuk web yang pakar dalam sektor kesihatan di Malaysia. Kami telah membina laman web untuk lebih 100+ klinik dan pusat perubatan.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    name: "Bagaimana cara dapatkan?",
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: "Anda boleh mendaftar minat dengan mengisi borang di halaman https://app.mosq.io/. Kami akan menghubungi anda untuk langkah seterusnya.",
                                    },
                                },
                            ],
                        }),
                    }}
                />
            </main>
            <Footer />
        </div>
    );
}
