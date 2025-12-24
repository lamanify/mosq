import { MapPin, Phone, Mail } from "lucide-react";

export default function HubungiPage() {
    return (
        <div className="bg-white pb-20">
            <section className="pt-32 pb-16 px-4 bg-gray-50 border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">Hubungi Kami</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-heading text-slate-900 mb-6">Lokasi & Pertanyaan</h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-light">
                        Pejabat kami sedia membantu anda.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info & Map */}
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Maklumat Pejabat</h3>
                        <div className="space-y-4 text-gray-600">
                            <p className="flex items-start gap-3">
                                <span className="text-green-600"><MapPin size={24} /></span>
                                <span>
                                    Persiaran Masjid, Seksyen 5,<br />
                                    40000 Shah Alam, Selangor Darul Ehsan.
                                </span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-green-600"><Phone size={24} /></span>
                                <span>+60 3-5510 1234</span>
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="text-green-600"><Mail size={24} /></span>
                                <span>admin@masjidshahalam.com</span>
                            </p>
                        </div>
                    </div>

                    {/* Banking Details */}
                    <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-white">
                        <h3 className="text-2xl font-bold mb-6">Sumbangan Online</h3>
                        <div className="p-4 bg-white/10 rounded-xl mb-4 border border-white/5">
                            <p className="text-sm text-yellow-500 uppercase tracking-widest mb-1 font-bold">Maybank</p>
                            <p className="text-2xl font-mono font-bold tracking-wider">5621 0678 4432</p>
                            <p className="text-sm text-gray-400 mt-1">TABUNG MASJID SHAH ALAM</p>
                        </div>
                        <button className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-colors">
                            Muat Naik Resit
                        </button>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Borang Pertanyaan</h3>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nama Penuh</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all bg-gray-50" placeholder="Ahmad Bin Abdullah" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Emel / No. Telefon</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all bg-gray-50" placeholder="012-3456789" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Perkara</label>
                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all bg-gray-50">
                                <option>Pertanyaan Umum</option>
                                <option>Aduan</option>
                                <option>Tempahan Dewan</option>
                                <option>Urusan Jenazah</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Mesej</label>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all bg-gray-50" placeholder="Tulis mesej anda di sini..."></textarea>
                        </div>
                        <button type="button" className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors shadow-lg shadow-slate-900/20">
                            Hantar Mesej
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
