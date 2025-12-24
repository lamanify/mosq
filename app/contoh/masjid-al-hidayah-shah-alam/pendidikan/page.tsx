import Image from "next/image";

export default function PendidikanPage() {
    return (
        <div className="bg-white pb-20">
            <section className="pt-32 pb-16 px-4 bg-gray-50 border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">Pendidikan</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-heading text-slate-900 mb-6">Kelas & Pengajian</h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-light">
                        Melahirkan generasi celik Al-Quran dan faham agama.
                    </p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* KAFA Card */}
                <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all">
                    <div className="relative h-64 bg-gray-200">
                        <Image
                            src="https://res.cloudinary.com/lamanify/image/upload/v1766566912/Gemini_Generated_Image_241o6e241o6e241o_ek3etg.webp"
                            alt="KAFA Class"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-slate-900 uppercase">
                            Untuk Kanak-kanak
                        </div>
                    </div>
                    <div className="p-10">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Kelas KAFA Integrasi</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Kurikulum lengkap merangkumi Tauhid, Ibadah, Sirah, Akhlak, Arab dan Jawi. Sesuai untuk pelajar berumur 7-12 tahun.
                        </p>
                        <div className="space-y-3 mb-8">
                            <div className="flex justify-between items-center text-sm border-b border-dashed border-gray-200 pb-2">
                                <span className="text-gray-500">Jadual</span>
                                <span className="font-medium text-slate-900">Isnin - Jumaat (2:30 PM - 5:30 PM)</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-b border-dashed border-gray-200 pb-2">
                                <span className="text-gray-500">Yuran Bulanan</span>
                                <span className="font-medium text-slate-900">RM 50.00</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-b border-dashed border-gray-200 pb-2">
                                <span className="text-gray-500">Pendaftaran</span>
                                <span className="font-medium text-green-600">Dibuka (Januari - Februari)</span>
                            </div>
                        </div>
                        <button className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors">
                            Daftar Anak
                        </button>
                    </div>
                </div>

                {/* Adult Class Card */}
                <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all">
                    <div className="relative h-64 bg-gray-200">
                        <Image
                            src="https://res.cloudinary.com/lamanify/image/upload/v1766566910/Gemini_Generated_Image_w8m4smw8m4smw8m4_kr8ms0.webp"
                            alt="Adult Class"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-white uppercase">
                            Dewasa / Umum
                        </div>
                    </div>
                    <div className="p-10">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Kelas Tajwid Dewasa</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Bimbingan membetulkan bacaan Al-Quran dari asas sehingga mahir bertarannum. Terbuka kepada lelaki dan wanita.
                        </p>
                        <div className="space-y-3 mb-8">
                            <div className="flex justify-between items-center text-sm border-b border-dashed border-gray-200 pb-2">
                                <span className="text-gray-500">Jadual</span>
                                <span className="font-medium text-slate-900">Sabtu & Ahad (Selepas Subuh)</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-b border-dashed border-gray-200 pb-2">
                                <span className="text-gray-500">Yuran</span>
                                <span className="font-medium text-slate-900">Ikhlas Hati / Sumbangan</span>
                            </div>
                        </div>
                        <button className="w-full py-4 rounded-xl bg-white border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-50 transition-colors">
                            Hubungi Ustaz
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
