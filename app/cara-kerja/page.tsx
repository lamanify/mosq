import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LinkButton } from "@/components/ui/Button";
import { PageBanner } from "@/components/ui/PageBanner";

export const metadata: Metadata = {
    title: "Cara Kerja | MOSQ",
    description:
        "Ketahui bagaimana MOSQ menyediakan laman web masjid percuma. Tiga langkah mudah: isi borang, data diproses, dan website masjid siap.",
    keywords: ["cara buat website masjid", "proses pendaftaran masjid online"],
};

const steps = [
    {
        number: "01",
        title: "Isi Borang Pendaftaran",
        description:
            "Lengkapkan borang pendaftaran dengan maklumat asas masjid anda. Maklumat yang diperlukan termasuk:",
        details: [
            "Nama rasmi masjid",
            "Alamat lengkap dan lokasi",
            "Nombor telefon dan emel untuk dihubungi",
            "Nama imam atau ahli jawatankuasa",
            "Sejarah ringkas masjid",
            "Waktu solat dan aktiviti mingguan",
            "Pautan Google Maps",
        ],
    },
    {
        number: "02",
        title: "Data Disemak & Diproses",
        description:
            "Setelah borang diterima, pasukan MOSQ akan menyemak maklumat dan menyediakan laman web:",
        details: [
            "Pengesahan maklumat yang diberikan",
            "Penyediaan kandungan dan struktur halaman",
            "Pengoptimuman untuk enjin carian (SEO)",
            "Ujian paparan pada pelbagai peranti",
        ],
    },
    {
        number: "03",
        title: "Website Masjid Aktif",
        description:
            "Laman web masjid anda kini aktif dan boleh diakses oleh semua orang:",
        details: [
            "Pautan unik untuk masjid anda",
            "Mudah dikongsi di media sosial",
            "Boleh ditemui melalui Google",
            "Maklumat terkini untuk jemaah",
        ],
    },
];

export default function CaraKerjaPage() {
    return (
        <div className="bg-white min-h-screen">
            <Header />
            <main>
                <PageBanner
                    tag="PROSES PANTAS"
                    title="3 Langkah Mudah"
                    description="Dari pendaftaran hingga laman web siap, kami permudah segalanya untuk AJK Masjid."
                />

                {/* Steps */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="space-y-16">
                            {steps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className={`reveal-on-load stagger-${index + 1} flex flex-col lg:flex-row gap-8 lg:gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                        }`}
                                >
                                    <div className="lg:w-1/2">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold to-yellow-600">
                                                {step.number}
                                            </span>
                                            <h2 className="text-2xl font-bold text-grey-900">
                                                {step.title}
                                            </h2>
                                        </div>
                                        <p className="text-grey-600 mb-6 text-lg leading-relaxed font-sans">{step.description}</p>
                                        <div className="glass-card p-6 rounded-xl border border-zinc-200">
                                            <ul className="space-y-3">
                                                {step.details.map((detail) => (
                                                    <li
                                                        key={detail}
                                                        className="flex items-start gap-3 text-grey-600 font-sans"
                                                    >
                                                        <svg
                                                            className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={2}
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M4.5 12.75l6 6 9-13.5"
                                                            />
                                                        </svg>
                                                        {detail}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 flex items-center justify-center">
                                        <div className="w-full max-w-md h-64 glass-panel rounded-2xl flex items-center justify-center border border-zinc-200 shadow-lg shadow-gold/5 bg-zinc-50">
                                            <span className="text-8xl font-black text-grey-900/5 tracking-tighter">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Important Notes */}
                <section className="bg-zinc-50 border-y border-zinc-200 py-16 sm:py-20 backdrop-blur-md">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-grey-900 mb-8 text-center">
                            Perkara Penting
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Tiada CMS atau Panel Admin", desc: "MOSQ tidak menyediakan sistem pengurusan kandungan (CMS). Semua kemas kini perlu dilakukan melalui permohonan kepada pasukan kami." },
                                { title: "Kemas Kini Maklumat", desc: "Untuk mengemas kini maklumat masjid, sila hubungi kami melalui emel dengan menyatakan perubahan yang diperlukan." },
                                { title: "Tempoh Penyediaan", desc: "Proses penyediaan laman web mengambil masa 3-7 hari bekerja bergantung kepada kelengkapan maklumat yang diberikan." },
                                { title: "Data & Privasi", desc: "Maklumat yang dikongsi hanya digunakan untuk menyediakan laman web masjid. Kami tidak berkongsi data dengan pihak ketiga." }
                            ].map((item, i) => (
                                <div key={i} className={`reveal-on-load stagger-${i + 1} glass-card rounded-xl p-6 border border-zinc-200 hover:border-gold/30 transition-all font-sans`}>
                                    <h3 className="font-bold text-grey-900 mb-2 text-lg">
                                        {item.title}
                                    </h3>
                                    <p className="text-grey-600 text-sm leading-relaxed mb-0">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-grey-900 mb-6">
                            Sedia Untuk Bermula?
                        </h2>
                        <p className="text-xl text-grey-600 max-w-xl mx-auto mb-10">
                            Daftarkan masjid anda sekarang dan bantu jemaah mencari maklumat
                            dengan mudah.
                        </p>
                        <div className="inline-block relative group reveal-on-load stagger-3">
                            <div className="absolute -inset-1 bg-gradient-to-r from-gold to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <LinkButton href="https://apps.mosq.io" size="lg" className="relative bg-gradient-gold text-black font-bold px-8 py-4 text-lg border-none shadow-[0_0_30px_rgba(201,162,77,0.4)]">
                                Dapat Website Masjid Percuma
                            </LinkButton>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
