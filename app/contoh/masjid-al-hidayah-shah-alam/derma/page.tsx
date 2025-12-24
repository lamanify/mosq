import Image from "next/image";

export default function DermaPage() {
    return (
        <div className="bg-white pb-20">
            <section className="pt-32 pb-16 px-4 bg-gray-50 border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">Infaq & Sedekah</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-heading text-slate-900 mb-6">Tabung Masjid</h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-light">
                        Sumbangan anda adalah pelaburan akhirat yang tidak terputus.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* QR Code Section */}
                <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Imbas Untuk Menderma</h3>
                    <div className="relative w-full max-w-sm h-[480px] mx-auto mb-8 bg-gray-50 rounded-2xl overflow-hidden border-4 border-white shadow-inner">
                        <Image
                            src="https://res.cloudinary.com/lamanify/image/upload/v1766567395/Gemini_Generated_Image_2g9ffw2g9ffw2g9f_nr22kd.webp"
                            alt="Donation QR Code"
                            fill
                            className="object-contain p-6"
                        />
                    </div>
                    <p className="text-gray-500 text-sm mb-8">
                        Sesuai untuk semua aplikasi e-Wallet (MAE, Touch 'n Go, GrabPay, Boost, dll.)
                    </p>
                    <div className="flex justify-center gap-4">
                        <div className="px-4 py-2 bg-slate-50 rounded-lg text-xs font-bold text-gray-400 uppercase tracking-tighter">DuitNow QR</div>
                    </div>
                </div>

                {/* Bank Details Section */}
                <div className="space-y-8">
                    <div className="bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <h3 className="text-3xl font-bold mb-8 relative z-10">Pindahan Bank</h3>

                        <div className="space-y-6 relative z-10">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <p className="text-xs text-yellow-500 font-bold uppercase tracking-widest mb-2">Maybank (Malayan Banking Berhad)</p>
                                <p className="text-3xl md:text-4xl font-mono font-bold tracking-wider mb-2">5621 0678 4432</p>
                                <p className="text-sm text-gray-400">Nama Akaun: <span className="text-white font-medium">TABUNG MASJID SHAH ALAM</span></p>
                            </div>

                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <p className="text-xs text-green-500 font-bold uppercase tracking-widest mb-2">Pilihan Lain (Pembangunan)</p>
                                <p className="text-2xl font-mono font-bold tracking-wider mb-2">1202 9010 3345 61</p>
                                <p className="text-sm text-gray-400">Bank Islam (BIMB)</p>
                            </div>
                        </div>

                        <div className="mt-10 pt-10 border-t border-white/10 relative z-10">
                            <p className="text-gray-400 text-sm leading-relaxed italic">
                                "Apabila mati seorang manusia, terputuslah amalannya kecuali tiga perkara: sedekah jariyah, ilmu yang bermanfaat, dan anak yang soleh yang mendoakannya." (Hadis Riwayat Muslim)
                            </p>
                        </div>
                    </div>

                    {/* Upload Proof */}
                    <div className="bg-green-50 p-8 rounded-3xl border border-green-100 flex items-center justify-between">
                        <div>
                            <h4 className="text-lg font-bold text-green-900">Sudah menderma?</h4>
                            <p className="text-green-700 text-sm">Hantar resit sumbangan untuk rekod kami.</p>
                        </div>
                        <button className="px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20">
                            Hantar Resit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
