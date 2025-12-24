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
        title: `Tentang ${mosque.namaMasjid} | Sejarah & Visi`,
        description: `Ketahui sejarah penubuhan ${mosque.namaMasjid} di ${mosque.bandar}, ${mosque.negeri}. Visi, misi, dan peranan masjid dalam komuniti.`,
    };
}

export default async function TentangPage({ params }: Props) {
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
                            Tentang {mosque.namaMasjid}
                        </h1>
                        <p className="mt-2 text-lg text-gray-600">
                            {mosque.bandar}, {mosque.negeri}
                        </p>
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Sejarah Masjid
                        </h2>
                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                {mosque.sejarahMasjid}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            {mosque.visiMisi && (
                <section className="py-16 sm:py-20 bg-gray-50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Visi & Misi
                            </h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                                    {mosque.visiMisi}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Role in Community */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Peranan Dalam Komuniti
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white border border-gray-100 rounded-xl p-6">
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    Pusat Ibadat
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Menyediakan kemudahan solat fardu lima waktu dan solat Jumaat
                                    untuk jemaah setempat.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-xl p-6">
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    Pusat Pendidikan
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Menganjurkan kelas agama, kuliah, dan program pembelajaran
                                    untuk semua peringkat umur.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-xl p-6">
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    Pusat Kebajikan
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Membantu agihan zakat, sedekah, dan bantuan kepada mereka yang
                                    memerlukan.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-xl p-6">
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    Pusat Komuniti
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Menjadi tempat berkumpul dan mengukuhkan silaturrahim dalam
                                    kalangan masyarakat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                            Pentadbiran
                        </h2>
                        <div className="bg-white border border-gray-100 rounded-xl p-6">
                            <p className="text-sm text-gray-500">Imam / Ahli Jawatankuasa</p>
                            <p className="mt-1 text-lg font-semibold text-gray-900">
                                {mosque.namaImamAtauAJK}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </MosqueLayout>
    );
}
