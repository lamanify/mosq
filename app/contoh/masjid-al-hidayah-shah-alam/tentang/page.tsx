import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function TentangPage() {
    return (
        <div className="bg-white pb-20">
            {/* Page Header */}
            <section className="pt-32 pb-16 px-4 bg-gray-50 border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">Tentang Kami</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-heading text-slate-900 mb-6">Info Masjid</h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-light">
                        Sejarah, visi, dan misi kami dalam membentuk kariah yang bertaqwa.
                    </p>
                </div>
            </section>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                {/* History Card */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-slate-900">Sejarah Penubuhan</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Masjid Shah Alam mula dibina pada tahun 1995 hasil sumbangan orang ramai dan kerajaan negeri. Ia dirasmikan pada tahun 1998 dan mampu memuatkan sehingga 2,500 jemaah pada satu-satu masa.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Senibina masjid ini menggabungkan elemen tradisional Melayu dan gaya Islam moden, melambangkan kemajuan umat Islam di bandaraya ini.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="https://res.cloudinary.com/lamanify/image/upload/v1766566572/Gemini_Generated_Image_5k5nk5k5nk5k5nk5_cw7k9a.webp"
                                alt="History"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Vision Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <div className="bg-green-50 p-10 rounded-3xl border border-green-100">
                        <div className="w-12 h-12 bg-green-100 text-green-700 rounded-xl flex items-center justify-center text-2xl mb-6 font-bold">V</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Visi</h3>
                        <p className="text-gray-600 text-lg">Menjadi pusat kecemerlangan ummah yang unggul di Selangor menjelang 2030.</p>
                    </div>
                    <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                        <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center text-2xl mb-6 font-bold">M</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Misi</h3>
                        <ul className="space-y-3 text-gray-600 text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1"><CheckCircle2 size={20} /></span> Memperkasa aktiviti keilmuan
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1"><CheckCircle2 size={20} /></span> Menyantuni asnaf dan fakir
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-500 mt-1"><CheckCircle2 size={20} /></span> Mengimarahkan masjid dengan ukhuwah
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Organizational Chart */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-12">Jawatankuasa Masjid</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'Ust. Abdullah', role: 'Nazir Masjid', img: 'https://res.cloudinary.com/lamanify/image/upload/v1766566901/Image_fx_70_jljpwm.webp' },
                            { name: 'Hj. Ismail', role: 'Timbalan Nazir', img: 'https://res.cloudinary.com/lamanify/image/upload/v1766566901/Image_fx_69_q2bcif.webp' },
                            { name: 'En. Razak', role: 'Setiausaha', img: 'https://res.cloudinary.com/lamanify/image/upload/v1766566901/Image_fx_71_oc2f5h.webp' },
                            { name: 'En. Kamal', role: 'Bendahari', img: 'https://res.cloudinary.com/lamanify/image/upload/v1766566900/Image_fx_72_ys29pn.webp' },
                        ].map((member, i) => (
                            <div key={i} className="group">
                                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform"
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                                <p className="text-green-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
