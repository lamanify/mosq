import Link from "next/link";
import Image from "next/image";
import { Heart, Truck } from "lucide-react";
import PrayerTimeDisplay from "@/components/PrayerTimeDisplay";

async function getPrayerTimes() {
    try {
        const res = await fetch('https://www.e-solat.gov.my/index.php?r=esolatApi/TakwimSolat&period=today&zone=SGR01', { next: { revalidate: 3600 } });
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
    } catch (error) {
        console.error(error);
        return null; // Fallback or handle error
    }
}

export default async function MasjidAlHidayahPage() {
    const prayerData = await getPrayerTimes();
    const today = prayerData?.prayerTime?.[0];
    const serverDate = prayerData?.serverTime ? new Date(prayerData.serverTime) : new Date();

    // Format Hijri Date (Simple approximation or use raw if valid string, API returns YYYY-MM-DD)
    // We'll just display the Gregorian date nicely for now + Hijri raw

    // Mapping API keys to Display names
    const prayerMapping = today ? [
        { name: 'Subuh', time: today.fajr.slice(0, 5) },
        { name: 'Syuruk', time: today.syuruk.slice(0, 5) },
        { name: 'Zuhur', time: today.dhuhr.slice(0, 5) },
        { name: 'Asar', time: today.asr.slice(0, 5) },
        { name: 'Maghrib', time: today.maghrib.slice(0, 5) },
        { name: 'Isyak', time: today.isha.slice(0, 5) },
    ] : [
        { name: 'Subuh', time: '05:58' },
        { name: 'Syuruk', time: '07:15' },
        { name: 'Zuhur', time: '13:15' },
        { name: 'Asar', time: '16:35' },
        { name: 'Maghrib', time: '19:22' },
        { name: 'Isyak', time: '20:35' },
    ];

    const gregorianDate = today ? `${today.day}, ${today.date}` : 'Hari Ini';
    const hijriDate = today ? `Hijri: ${today.hijri}` : '';

    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
                <div className="absolute inset-0 z-0">
                    {/* High-quality Mosque Architecture Background */}
                    <Image
                        src="https://res.cloudinary.com/lamanify/image/upload/v1766565856/Gemini_Generated_Image_tyhulstyhulstyhu_fcr6xt.webp"
                        alt="Mosque Architecture Background"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-green-50 border border-green-100 text-green-800 text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
                        Selamat Datang Ke
                    </span>
                    <h1 className="text-6xl md:text-8xl font-bold font-heading text-slate-900 mb-8 tracking-tight leading-none animate-fade-in-up delay-100">
                        Masjid <br />
                        <span className="text-gray-400 italic font-serif font-normal">Shah Alam</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up delay-200">
                        Pusat penyatuan ummah dan pembangunan insaniah berteraskan Al-Quran dan As-Sunnah.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                        <Link href="/contoh/masjid-al-hidayah-shah-alam/tentang" className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-2xl shadow-slate-900/20">
                            Kenali Kami
                        </Link>
                        <Link href="/contoh/masjid-al-hidayah-shah-alam/aktiviti" className="bg-white text-slate-900 border border-gray-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors">
                            Jadual Aktiviti
                        </Link>
                    </div>
                </div>
            </section>

            {/* PRAYER TIMES - Floating Card Style */}
            <section className="relative -mt-24 z-20 px-4">
                <PrayerTimeDisplay
                    prayerMapping={prayerMapping}
                    hijriDate={hijriDate}
                    gregorianDate={gregorianDate}
                />
            </section>

            {/* FEATURED SERVICES - BENTO GRID STYLE */}
            <section className="py-32 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Khidmat Untuk Komuniti</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Kami menyediakan pelbagai fasiliti dan perkhidmatan untuk kemudahan jemaah dan penduduk setempat.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                        {/* Large Card */}
                        <div className="md:col-span-2 group relative rounded-3xl overflow-hidden bg-gray-100 min-h-[300px]">
                            <Image
                                src="https://images.unsplash.com/photo-1542816417-0983c9c9ad53?q=80&w=2670&auto=format&fit=crop" // Quran reading class
                                alt="Education"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Pendidikan Al-Quran</h3>
                                <p className="text-gray-300 max-w-md">Kelas pengajian percuma untuk semua peringkat umur setiap hujung minggu.</p>
                            </div>
                        </div>

                        {/* Right Column Stack */}
                        <div className="flex flex-col gap-6">
                            <div className="flex-1 bg-green-50 rounded-3xl p-8 flex flex-col justify-center border border-green-100 hover:border-green-300 transition-colors group cursor-pointer relative overflow-hidden">
                                <div className="absolute right-0 top-0 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
                                <span className="text-pink-500 mb-4 block"><Heart size={48} /></span>
                                <h3 className="text-xl font-bold text-green-900 mb-2">Urusan Nikah</h3>
                                <p className="text-green-700/80 text-sm">Dewan nikah yang selesa dan pakej lengkap.</p>
                            </div>
                            <div className="flex-1 bg-slate-50 rounded-3xl p-8 flex flex-col justify-center border border-slate-100 hover:border-slate-300 transition-colors group cursor-pointer">
                                <span className="text-slate-600 mb-4 block"><Truck size={48} /></span>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Van Jenazah</h3>
                                <p className="text-slate-500 text-sm">Perkhidmatan 24 jam untuk kariah setempat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DONATION CTA - Modern */}
            <section className="py-24 bg-[#0A0A0A] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-green-500 font-bold tracking-widest uppercase text-sm mb-4 block">Infaq Jariyah</span>
                    <h2 className="text-5xl md:text-6xl font-bold font-heading mb-8">
                        Saham Akhirat Anda <br /> Bermula Di Sini
                    </h2>
                    <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
                        Sumbangan anda memastikan legasi ilmu dan kebajikan masjid ini terus berjalan.
                    </p>

                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-2 rounded-full inline-flex flex-col sm:flex-row gap-2 max-w-full">
                        <Link href="/contoh/masjid-al-hidayah-shah-alam/derma" className="px-8 py-4 rounded-full bg-green-600 text-white text-lg font-bold hover:bg-green-500 transition-colors shadow-[0_0_20px_rgba(22,163,74,0.4)]">
                            Sumbang Sekarang
                        </Link>
                        <Link href="/contoh/masjid-al-hidayah-shah-alam/derma" className="px-8 py-4 rounded-full bg-transparent hover:bg-white/5 text-white text-lg font-bold transition-colors">
                            Lihat No. Akaun
                        </Link>
                    </div>

                    <p className="mt-8 text-sm text-gray-500 text-center mx-auto">
                        Melalui gerbang pembayaran selamat FPX. Resit pelepasan cukai disediakan.
                    </p>
                </div>
            </section>
        </div>
    );
}
