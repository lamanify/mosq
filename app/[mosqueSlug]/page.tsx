import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import MosqueLayout from "@/components/layout/MosqueLayout";
import { InfoCard } from "@/components/ui/Card";
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

    const title = `${mosque.namaMasjid} di ${mosque.bandar} | Maklumat & Jadual Solat`;
    const description = `${mosque.namaMasjid} - ${mosque.alamatPenuh}, ${mosque.bandar}, ${mosque.negeri}. Dapatkan maklumat waktu solat, aktiviti, dan cara menghubungi masjid.`;

    return {
        title,
        description,
        alternates: {
            canonical: `/${mosque.slug}`,
        },
        openGraph: {
            title,
            description,
            type: 'website',
            locale: 'ms_MY',
            siteName: 'MOSQ',
            images: [
                {
                    url: '/og-image.jpg', // Using default unless mosque specific image exists
                    width: 1200,
                    height: 630,
                    alt: mosque.namaMasjid,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/og-image.jpg'],
        },
        keywords: [
            mosque.namaMasjid.toLowerCase(),
            `masjid ${mosque.bandar.toLowerCase()}`,
            `masjid ${mosque.negeri.toLowerCase()}`,
            "waktu solat",
            "jadual solat",
            "aktiviti masjid",
            "sumbangan masjid"
        ],
    };
}

export default async function MosqueHomePage({ params }: Props) {
    const { mosqueSlug } = await params;
    const mosque = getMosqueBySlug(mosqueSlug);

    if (!mosque) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'PlaceOfWorship', // More specific than Organization for Mosques
        name: mosque.namaMasjid,
        address: {
            '@type': 'PostalAddress',
            streetAddress: mosque.alamatPenuh,
            addressLocality: mosque.bandar,
            addressRegion: mosque.negeri,
            addressCountry: 'MY'
        },
        telephone: mosque.telefon,
        email: mosque.emel,
        url: `https://mosq.io/${mosque.slug}`,
        geo: {
            '@type': 'GeoCoordinates',
            // Note: coordinates would be better if available, but omitting if not
        },
        description: mosque.pengenalan,
        founder: {
            '@type': 'Person',
            name: mosque.namaImamAtauAJK
        },
    };

    return (
        <MosqueLayout mosque={mosque}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <section className="bg-gray-50 py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold text-gray-900">
                            {mosque.namaMasjid}
                        </h1>
                        <p className="mt-2 text-lg text-gray-600">
                            {mosque.bandar}, {mosque.negeri}
                        </p>
                        <p className="mt-6 text-gray-600">{mosque.pengenalan}</p>
                    </div>
                </div>
            </section>

            {/* Quick Info Cards */}
            <section className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <InfoCard
                            label="Alamat"
                            value={`${mosque.alamatPenuh}, ${mosque.bandar}`}
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                    />
                                </svg>
                            }
                        />
                        <InfoCard
                            label="Telefon"
                            value={mosque.telefon}
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                    />
                                </svg>
                            }
                        />
                        <InfoCard
                            label="Emel"
                            value={mosque.emel}
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                            }
                        />
                        <InfoCard
                            label="Imam / AJK"
                            value={mosque.namaImamAtauAJK}
                            icon={
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                    />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* Prayer Times */}
            <section className="py-12 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Waktu Solat</h2>
                        <Link
                            href={`/${mosque.slug}/jadual-solat`}
                            className="text-sm text-gold font-medium hover:underline"
                        >
                            Lihat penuh →
                        </Link>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        <div className="bg-white rounded-xl p-4 text-center">
                            <p className="text-sm text-gray-500">Subuh</p>
                            <p className="mt-1 text-lg font-semibold text-gray-900">
                                {mosque.waktuSolat.subuh}
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-4 text-center">
                            <p className="text-sm text-gray-500">Zohor</p>
                            <p className="mt-1 text-lg font-semibold text-gray-900">
                                {mosque.waktuSolat.zohor}
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-4 text-center">
                            <p className="text-sm text-gray-500">Asar</p>
                            <p className="mt-1 text-lg font-semibold text-gray-900">
                                {mosque.waktuSolat.asar}
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-4 text-center">
                            <p className="text-sm text-gray-500">Maghrib</p>
                            <p className="mt-1 text-lg font-semibold text-gray-900">
                                {mosque.waktuSolat.maghrib}
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-4 text-center">
                            <p className="text-sm text-gray-500">Isyak</p>
                            <p className="mt-1 text-lg font-semibold text-gray-900">
                                {mosque.waktuSolat.isyak}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Activities Preview */}
            <section className="py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Aktiviti</h2>
                        <Link
                            href={`/${mosque.slug}/aktiviti`}
                            className="text-sm text-gold font-medium hover:underline"
                        >
                            Lihat semua →
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {mosque.senaraiAktiviti.slice(0, 3).map((aktiviti, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-100 rounded-xl p-5"
                            >
                                <h3 className="font-semibold text-gray-900">{aktiviti.nama}</h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    {aktiviti.hari} • {aktiviti.masa}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MosqueLayout>
    );
}
