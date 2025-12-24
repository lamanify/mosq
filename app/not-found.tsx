import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LinkButton } from "@/components/ui/Button";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow flex items-center">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 lg:pt-48 lg:pb-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                        {/* Left Side: Content */}
                        <div className="text-left order-2 lg:order-1">
                            <div className="reveal-on-load stagger-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold text-sm font-medium mb-8 backdrop-blur-sm">
                                <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
                                Error 404
                            </div>

                            <h1 className="reveal-on-load stagger-2 text-5xl sm:text-6xl font-bold tracking-tight text-white mb-8">
                                Halaman Tidak <span className="text-gradient-gold">Dijumpai</span>
                            </h1>

                            <p className="reveal-on-load stagger-3 max-w-lg text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed font-sans">
                                Maaf, kami tidak dapat menemui halaman yang anda cari. Ia mungkin telah dipindahkan atau tidak lagi wujud.
                            </p>

                            <div className="reveal-on-load stagger-4 flex flex-col sm:flex-row items-center gap-4">
                                <LinkButton
                                    href="/"
                                    className="w-full sm:w-auto bg-gradient-gold text-black hover:opacity-90 border-none font-bold px-8 py-4 text-lg rounded-xl shadow-[0_0_30px_rgba(201,162,77,0.4)] transition-all hover:scale-105"
                                >
                                    Kembali ke Laman Utama
                                </LinkButton>
                                <LinkButton
                                    href="/contoh"
                                    variant="secondary"
                                    className="w-full sm:w-auto bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20 px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
                                >
                                    Lihat Contoh Laman Web
                                </LinkButton>
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="reveal-on-load stagger-3 order-1 lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative w-full aspect-square max-w-md lg:max-w-none">
                                {/* Decorative glow background */}
                                <div className="absolute -inset-4 bg-gold/20 blur-[60px] rounded-full opacity-30 animate-pulse" />

                                <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                    <Image
                                        src="https://res.cloudinary.com/lamanify/image/upload/v1766566572/Gemini_Generated_Image_5k5nk5k5nk5k5nk5_cw7k9a.webp"
                                        alt="Not Found Illustration"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Subtle overlay for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
