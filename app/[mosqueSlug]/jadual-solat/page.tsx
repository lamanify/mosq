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
        title: `Jadual Solat ${mosque.namaMasjid} | Waktu Solat`,
        description: `Waktu solat fardu lima waktu di ${mosque.namaMasjid}, ${mosque.bandar}. Subuh, Zohor, Asar, Maghrib, dan Isyak.`,
        keywords: [
            `waktu solat ${mosque.bandar.toLowerCase()}`,
            `jadual solat ${mosque.namaMasjid.toLowerCase()}`,
            "waktu solat hari ini",
        ],
    };
}

export default async function JadualSolatPage({ params }: Props) {
    const { mosqueSlug } = await params;
    const mosque = getMosqueBySlug(mosqueSlug);

    if (!mosque) {
        notFound();
    }

    const prayerTimes = [
        {
            name: "Subuh",
            time: mosque.waktuSolat.subuh,
            description: "Waktu azan Subuh",
        },
        {
            name: "Zohor",
            time: mosque.waktuSolat.zohor,
            description: "Waktu azan Zohor",
        },
        {
            name: "Asar",
            time: mosque.waktuSolat.asar,
            description: "Waktu azan Asar",
        },
        {
            name: "Maghrib",
            time: mosque.waktuSolat.maghrib,
            description: "Waktu azan Maghrib",
        },
        {
            name: "Isyak",
            time: mosque.waktuSolat.isyak,
            description: "Waktu azan Isyak",
        },
    ];

    return (
        <MosqueLayout mosque={mosque}>
            {/* Header */}
            <section className="bg-gray-50 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold text-gray-900">Jadual Solat</h1>
                        <p className="mt-2 text-lg text-gray-600">
                            {mosque.namaMasjid}, {mosque.bandar}
                        </p>
                    </div>
                </div>
            </section>

            {/* Prayer Times Table */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto">
                        {/* Table */}
                        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                                            Waktu Solat
                                        </th>
                                        <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                                            Masa
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {prayerTimes.map((prayer) => (
                                        <tr key={prayer.name}>
                                            <td className="px-6 py-4">
                                                <div>
                                                    <p className="font-medium text-gray-900">
                                                        {prayer.name}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {prayer.description}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <span className="text-lg font-semibold text-gold">
                                                    {prayer.time}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Note */}
                        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
                            <h3 className="font-semibold text-amber-800 mb-2">Perhatian</h3>
                            <ul className="text-sm text-amber-700 space-y-2">
                                <li>
                                    • Waktu solat di atas adalah waktu solat berjamaah di masjid
                                    ini.
                                </li>
                                <li>
                                    • Waktu mungkin berbeza sedikit mengikut musim dan keadaan
                                    setempat.
                                </li>
                                <li>
                                    • Dinasihatkan untuk hadir lebih awal untuk mendapatkan saf
                                    hadapan.
                                </li>
                            </ul>
                        </div>

                        {/* Friday Prayer */}
                        <div className="mt-8 bg-white border border-gray-100 rounded-xl p-6">
                            <h3 className="font-semibold text-gray-900 mb-4">Solat Jumaat</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <p className="text-sm text-gray-500">Khutbah</p>
                                    <p className="mt-1 font-medium text-gray-900">
                                        12:45 PM
                                    </p>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <p className="text-sm text-gray-500">Solat</p>
                                    <p className="mt-1 font-medium text-gray-900">
                                        1:15 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MosqueLayout>
    );
}
