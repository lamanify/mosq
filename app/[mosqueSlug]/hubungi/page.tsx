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
        title: `Hubungi ${mosque.namaMasjid} | Alamat & Lokasi`,
        description: `Maklumat hubungan ${mosque.namaMasjid} di ${mosque.bandar}. Alamat, nombor telefon, emel, dan lokasi peta.`,
        keywords: [
            `alamat ${mosque.namaMasjid.toLowerCase()}`,
            `lokasi masjid ${mosque.bandar.toLowerCase()}`,
            "hubungi masjid",
        ],
    };
}

export default async function HubungiPage({ params }: Props) {
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
                        <h1 className="text-4xl font-bold text-gray-900">Hubungi Kami</h1>
                        <p className="mt-2 text-lg text-gray-600">
                            {mosque.namaMasjid}, {mosque.bandar}
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Details */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">
                                Maklumat Hubungan
                            </h2>
                            <div className="space-y-6">
                                {/* Address */}
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
                                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Alamat</h3>
                                        <p className="mt-1 text-gray-600">{mosque.alamatPenuh}</p>
                                        <p className="text-gray-600">
                                            {mosque.bandar}, {mosque.negeri}
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
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
                                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Telefon</h3>
                                        <a
                                            href={`tel:${mosque.telefon.replace(/\s+/g, "")}`}
                                            className="mt-1 text-gold hover:underline"
                                        >
                                            {mosque.telefon}
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
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
                                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Emel</h3>
                                        <a
                                            href={`mailto:${mosque.emel}`}
                                            className="mt-1 text-gold hover:underline"
                                        >
                                            {mosque.emel}
                                        </a>
                                    </div>
                                </div>

                                {/* Person in charge */}
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
                                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">
                                            Imam / Ahli Jawatankuasa
                                        </h3>
                                        <p className="mt-1 text-gray-600">{mosque.namaImamAtauAJK}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Google Maps Link */}
                            <div className="mt-8">
                                <a
                                    href={mosque.googleMapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-gold font-medium hover:underline"
                                >
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
                                            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                        />
                                    </svg>
                                    Buka di Google Maps
                                </a>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Lokasi</h2>
                            <div className="bg-gray-100 rounded-xl overflow-hidden aspect-square">
                                {mosque.googleMapsEmbed ? (
                                    <iframe
                                        src={mosque.googleMapsEmbed}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`Peta lokasi ${mosque.namaMasjid}`}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <svg
                                                className="w-16 h-16 text-gray-300 mx-auto"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1}
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
                                            <p className="mt-2 text-sm text-gray-500">
                                                Peta tidak tersedia
                                            </p>
                                            <a
                                                href={mosque.googleMapsLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-2 inline-block text-sm text-gold hover:underline"
                                            >
                                                Lihat di Google Maps
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MosqueLayout>
    );
}
