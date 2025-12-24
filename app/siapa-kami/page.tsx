import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LinkButton } from "@/components/ui/Button";

export default function SiapaKamiPage() {
    return (
        <div className="bg-black min-h-screen">
            <Header />
            <main className="pt-32 pb-20">

                {/* Helper function for dividers */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-px w-full bg-white/10 my-20" />
                </div>

                {/* Hero Section */}
                <section className="relative px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
                    <h1 className="reveal-on-load stagger-1 font-display font-bold text-5xl md:text-7xl leading-[1.15] tracking-[0.01em] text-white mb-8">
                        Siapa Kami
                    </h1>
                    <p className="reveal-on-load stagger-2 font-sans text-xl text-gray-400 leading-relaxed">
                        MOSQ ialah sebuah inisiatif digital percuma yang dibangunkan untuk membantu masjid-masjid di Malaysia mempunyai kehadiran dalam talian yang profesional, mudah, dan mesra komuniti.
                    </p>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-px w-full bg-white/10 my-20" />
                </div>

                {/* Siapa Di Sebalik MOSQ */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="reveal-on-load stagger-1">
                            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                                Siapa Di Sebalik MOSQ?
                            </h2>
                        </div>
                        <div className="reveal-on-load stagger-2 space-y-6">
                            <p className="font-sans text-gray-400 text-lg leading-relaxed">
                                MOSQ bukan sekadar projek biasa. Ia adalah sumbangan khidmat masyarakat oleh pasukan profesional reka bentuk web dari <span className="text-white font-semibold">Lamanify.com</span>.
                            </p>
                            <p className="font-sans text-gray-400 text-lg leading-relaxed">
                                Kami percaya setiap masjid berhak mendapat laman web yang mudah diurus, dapat dilihat oleh komuniti, dan membantu menyampaikan maklumat penting seperti waktu solat, aktiviti harian, dan berita masjid — tanpa sebarang kos.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-px w-full bg-white/10 my-20" />
                </div>

                {/* Visi & Misi */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Visi */}
                        <div className="glass-card p-10 rounded-2xl reveal-on-load stagger-1">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6 border border-gold/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                            <h3 className="font-display font-bold text-2xl text-white mb-4">Visi Kami</h3>
                            <p className="font-sans text-gray-400 leading-relaxed">
                                Menjadikan kehadiran digital masjid mudah, profesional, dan percuma untuk semua masjid — sama ada di bandar atau desa.
                            </p>
                        </div>

                        {/* Misi */}
                        <div className="glass-card p-10 rounded-2xl reveal-on-load stagger-2">
                            <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6 border border-gold/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                                </svg>
                            </div>
                            <h3 className="font-display font-bold text-2xl text-white mb-4">Misi Kami</h3>
                            <ul className="space-y-3 font-sans text-gray-400">
                                <li className="flex items-start gap-3">
                                    <span className="text-gold mt-1.5">•</span>
                                    <span>Mempunyai laman web rasmi yang informatif</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold mt-1.5">•</span>
                                    <span>Memperkenalkan maklumat jadual solat dengan baik</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold mt-1.5">•</span>
                                    <span>Berkongsi aktiviti dan kuliah komuniti</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold mt-1.5">•</span>
                                    <span>Dihubungi dengan mudah oleh jemaah dan keluarga</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-px w-full bg-white/10 my-20" />
                </div>

                {/* Kenapa Ini Penting */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
                    <h2 className="reveal-on-load stagger-1 font-display font-bold text-3xl md:text-4xl text-white mb-8">
                        Kenapa Ini Penting
                    </h2>
                    <div className="reveal-on-load stagger-2 glass-panel p-8 md:p-12 rounded-2xl border border-white/10">
                        <p className="font-sans text-gray-400 text-lg md:text-xl leading-relaxed">
                            Dalam dunia yang semakin digital, maklumat masjid kadang sukar dicari. <span className="text-white">MOSQ diwujudkan</span> supaya masjid dapat dihubungi, dicari, dan diakses dengan mudah oleh semua — tak kira ahli jemaah atau masyarakat sekitar.
                        </p>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-px w-full bg-white/10 my-20" />
                </div>

                {/* Siapa Lamanify */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="reveal-on-load stagger-1 order-2 md:order-1">
                            <p className="font-sans text-gray-400 text-lg leading-relaxed mb-6">
                                <span className="text-white font-semibold">Lamanify.com</span> ialah sebuah agensi reka bentuk web yang berpengalaman dalam membantu organisasi terus berkembang secara digital — termasuk dalam sektor bukan keuntungan dan komuniti.
                            </p>
                            <p className="font-sans text-gray-400 text-lg leading-relaxed mb-8">
                                MOSQ dibangunkan oleh pasukan yang sama, tetapi ia berdiri sebagai inisiatif percuma dan bukan produk komersial.
                            </p>
                            <LinkButton
                                href="https://www.lamanify.com"
                                variant="gold"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold px-8 py-3 rounded-xl shadow-[0_0_20px_rgba(201,162,77,0.2)] hover:scale-105 transition-all"
                            >
                                Layari Lamanify.com
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </LinkButton>
                        </div>
                        <div className="reveal-on-load stagger-2 order-1 md:order-2">
                            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                                Siapa Lamanify
                            </h2>
                            <div className="w-24 h-1 bg-gold rounded-full" />
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="h-px w-full bg-white/10 my-20" />
                </div>

                {/* Apa Yang Kami Percayai */}
                <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center mb-20">
                    <h2 className="reveal-on-load stagger-1 font-display font-bold text-3xl md:text-4xl text-white mb-12">
                        Apa Yang Kami Percayai
                    </h2>
                    <div className="grid gap-6">
                        <div className="reveal-on-load stagger-2 glass-card p-6 rounded-xl border border-white/5 flex items-center gap-4 text-left">
                            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <p className="font-sans text-white text-lg">Setiap masjid layak dilihat dan dihubungi dalam talian</p>
                        </div>

                        <div className="reveal-on-load stagger-3 glass-card p-6 rounded-xl border border-white/5 flex items-center gap-4 text-left">
                            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <p className="font-sans text-white text-lg">Teknologi harus memudahkan, bukan menyusahkan</p>
                        </div>

                        <div className="reveal-on-load stagger-4 glass-card p-6 rounded-xl border border-white/5 flex items-center gap-4 text-left">
                            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>
                            <p className="font-sans text-white text-lg">Sumbangan digital adalah sebahagian daripada khidmat kepada ummah</p>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
