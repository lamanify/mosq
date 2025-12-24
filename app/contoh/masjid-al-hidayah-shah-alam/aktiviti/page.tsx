import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export default function AktivitiPage() {
    return (
        <div className="bg-white pb-20">
            <section className="pt-32 pb-16 px-4 bg-gray-50 border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4 block">Takwim Masjid</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-heading text-slate-900 mb-6">Aktiviti & Kuliah</h1>
                    <p className="text-xl text-slate-500 leading-relaxed font-light">
                        Sertai majlis ilmu dan program kemasyarakatan yang kami anjurkan.
                    </p>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-4 mt-12">
                {/* Upcoming Events List */}
                <div className="space-y-6">
                    {[
                        { date: '25', month: 'OCT', title: 'Kuliah Maghrib Perdana', speaker: 'Ustaz Azhar Idrus', time: 'Selepas Maghrib', tag: 'Kuliah' },
                        { date: '28', month: 'OCT', title: 'Gotong Royong Perdana', speaker: 'Anjuran AJK Masjid', time: '08:00 Pagi', tag: 'Gotong-Royong' },
                        { date: '01', month: 'NOV', title: 'Kursus Pengurusan Jenazah', speaker: 'Ustaz Don Daniyal', time: '09:00 Pagi - 4:00 Petang', tag: 'Kursus' },
                    ].map((event, i) => (
                        <div key={i} className="group flex flex-col md:flex-row items-center bg-white border border-gray-100 rounded-3xl p-6 hover:shadow-xl transition-all hover:border-green-100 cursor-pointer">
                            <div className="flex-shrink-0 w-24 h-24 bg-green-50 rounded-2xl flex flex-col items-center justify-center text-green-800 border border-green-100 group-hover:bg-green-600 group-hover:text-white transition-colors">
                                <span className="text-3xl font-bold leading-none">{event.date}</span>
                                <span className="text-xs font-bold uppercase tracking-widest mt-1">{event.month}</span>
                            </div>

                            <div className="flex-1 md:ml-8 mt-6 md:mt-0 text-center md:text-left w-full">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 md:mb-0 w-fit mx-auto md:mx-0">{event.tag}</span>
                                    <span className="text-sm text-gray-400 font-medium flex items-center justify-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        {event.time}
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:text-green-700 transition-colors">{event.title}</h3>
                                <p className="text-gray-500">Oleh: {event.speaker}</p>
                            </div>

                            <div className="mt-6 md:mt-0 md:ml-8">
                                <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-green-600 group-hover:border-green-600 group-hover:text-white transition-all">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 mb-20">
                    <p className="text-gray-500">Ingin tahu lebih lanjut tentang program akan datang?</p>
                    <LinkButton href="/contoh/masjid-al-hidayah-shah-alam/hubungi" className="mt-4 inline-block font-semibold text-green-600 hover:text-green-700 border-none bg-transparent">
                        Hubungi Pejabat Masjid <ArrowRight className="inline-block ml-1" size={16} />
                    </LinkButton>
                </div>
            </div>
        </div>
    );
}
