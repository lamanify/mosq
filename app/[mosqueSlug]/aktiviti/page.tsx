import { Metadata } from "next";
import { notFound } from "next/navigation";
import MosqueLayout from "@/components/layout/MosqueLayout";
import { getMosqueBySlug, getAllMosqueSlugs } from "@/lib/mosques";

interface Props {
    params: Promise<{ mosqueSlug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllMosqueSlugs();
    return slugs.map((slug) => ({ mosqueSlug: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { mosqueSlug } = await params;
    const mosque = getMosqueBySlug(mosqueSlug);

    if (!mosque) {
        return { title: "Masjid Tidak Ditemui | MOSQ" };
    }

    return {
        title: `Aktiviti ${mosque.namaMasjid} | Program & Kuliah`,
        description: `Senarai aktiviti dan program mingguan di ${mosque.namaMasjid}, ${mosque.bandar}. Kuliah, kelas agama, dan majlis.`,
        keywords: [
            `aktiviti masjid ${mosque.bandar.toLowerCase()}`,
            "kuliah masjid",
            "kelas agama",
        ],
    };
}

export default async function AktivitiPage({ params }: Props) {
    const { mosqueSlug } = await params;
    const mosque = getMosqueBySlug(mosqueSlug);

    if (!mosque) {
        notFound();
    }

    return (
        <MosqueLayout mosque={mosque}>
            {/* Header */}
            <section className="bg-gray-50 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold text-gray-900">
                            Aktiviti Masjid
                        </h1>
                        <p className="mt-2 text-lg text-gray-600">
                            {mosque.namaMasjid}, {mosque.bandar}
                        </p>
                        <p className="mt-4 text-gray-600">
                            Senarai program dan aktiviti yang dianjurkan di masjid ini.
                            Jemaah dijemput untuk menyertai aktiviti-aktiviti berikut.
                        </p>
                    </div>
                </div>
            </section>

            {/* Activities List */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            Program Mingguan
                        </h2>
                        <div className="space-y-4">
                            {mosque.senaraiAktiviti.map((aktiviti, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-100 rounded-xl p-6"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-gold">
                                            <svg
                                                className="w-6 h-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                                />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900">
                                                {aktiviti.nama}
                                            </h3>
                                            <div className="mt-2 flex flex-wrap gap-3">
                                                <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                                        />
                                                    </svg>
                                                    {aktiviti.hari}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                    {aktiviti.masa}
                                                </span>
                                            </div>
                                            {aktiviti.keterangan && (
                                                <p className="mt-3 text-sm text-gray-600">
                                                    {aktiviti.keterangan}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Note */}
            <section className="py-12 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="bg-white border border-gray-100 rounded-xl p-6">
                            <h3 className="font-semibold text-gray-900 mb-2">Maklumat</h3>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>
                                    • Semua aktiviti terbuka kepada jemaah dan orang awam.
                                </li>
                                <li>
                                    • Jadual aktiviti mungkin berubah mengikut keadaan. Sila
                                    hubungi pihak masjid untuk pengesahan.
                                </li>
                                <li>
                                    • Untuk sebarang pertanyaan, sila hubungi pihak masjid.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </MosqueLayout>
    );
}
