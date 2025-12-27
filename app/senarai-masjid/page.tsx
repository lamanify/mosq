import Link from 'next/link';
import { getPublishedMosques } from '@/lib/mosques';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Senarai Masjid | MOSQ',
    description: 'Direktori masjid-masjid yang menggunakan platform MOSQ.',
};

export const revalidate = 900; // 15 minutes

export default async function SenaraiMasjidPage() {
    const mosques = await getPublishedMosques();

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8 text-center text-grey-900">Senarai Masjid</h1>

            <div className="grid gap-6 md:grid-cols-2">
                {mosques.length === 0 ? (
                    <p className="text-center col-span-2 text-grey-600">Tiada masjid yang tersenarai buat masa ini.</p>
                ) : (
                    mosques.map((mosque) => (
                        <Link
                            key={mosque.slug}
                            href={`https://${mosque.slug}.mosq.io`}
                            className="block p-6 bg-zinc-50 border border-zinc-200 rounded-lg hover:border-gold/50 transition-colors"
                        >
                            <h2 className="text-xl font-semibold text-grey-900 mb-2">{mosque.name}</h2>
                            <p className="text-sm text-grey-600">https://{mosque.slug}.mosq.io</p>
                        </Link>
                    ))
                )}
            </div>

            <div className="mt-12 text-center">
                <Link href="/" className="text-gold hover:underline">
                    Kembali ke Halaman Utama
                </Link>
            </div>
        </div>
    );
}
