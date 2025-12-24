import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FormInput, TextArea } from "@/components/ui/FormInput";
import { Button } from "@/components/ui/Button";
import { NEGERI_MALAYSIA } from "@/lib/types";
import { PageBanner } from "@/components/ui/PageBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Daftar Masjid | MOSQ",
    description:
        "Daftarkan masjid anda sekarang untuk mendapatkan laman web rasmi secara percuma. Inisiatif digital untuk pengimarahan masjid.",
};

export default function DaftarPage() {
    return (
        <div className="bg-black min-h-screen">
            <Header />
            <main>
                <PageBanner
                    tag="MULAKAN PERJALANAN"
                    title="Daftar Masjid"
                    description="Isi borang di bawah untuk memohon pembinaan laman web masjid anda secara percuma."
                />

                <section className="py-24">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                        <div className="reveal-on-load stagger-1 glass-card rounded-2xl p-8 md:p-12 border border-white/10">
                            <form className="space-y-8">
                                {/* Masjid Details */}
                                <div className="reveal-on-load stagger-2">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold text-sm border border-gold/20">
                                            1
                                        </span>
                                        Maklumat Masjid
                                    </h3>
                                    <div className="grid grid-cols-1 gap-6">
                                        <FormInput
                                            id="namaMasjid"
                                            label="Nama Penuh Masjid"
                                            placeholder="Contoh: Masjid Al-Hidayah"
                                            required
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-gray-300 font-sans">
                                                    Negeri
                                                </label>
                                                <select className="font-sans w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all">
                                                    <option value="">Pilih Negeri</option>
                                                    {NEGERI_MALAYSIA.map((negeri) => (
                                                        <option key={negeri} value={negeri}>
                                                            {negeri}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <FormInput
                                                id="bandar"
                                                label="Bandar / Daerah"
                                                placeholder="Contoh: Shah Alam"
                                                required
                                            />
                                        </div>
                                        <TextArea
                                            id="alamat"
                                            label="Alamat Penuh"
                                            placeholder="Alamat lengkap masjid..."
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="h-px bg-white/10" />

                                {/* Contact Person */}
                                <div className="reveal-on-load stagger-3">
                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold text-sm border border-gold/20">
                                            2
                                        </span>
                                        Maklumat Pemohon (AJK)
                                    </h3>
                                    <div className="grid grid-cols-1 gap-6">
                                        <FormInput
                                            id="namaPemohon"
                                            label="Nama Penuh"
                                            placeholder="Nama anda"
                                            required
                                        />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FormInput
                                                id="jawatan"
                                                label="Jawatan dalam AJK"
                                                placeholder="Contoh: Setiausaha"
                                                required
                                            />
                                            <FormInput
                                                id="telefon"
                                                label="No. Telefon (WhatsApp)"
                                                type="tel"
                                                placeholder="012-3456789"
                                                required
                                            />
                                        </div>
                                        <FormInput
                                            id="emel"
                                            label="Emel Rasmi (Jika ada)"
                                            type="email"
                                            placeholder="masjid@contoh.com"
                                        />
                                    </div>
                                </div>

                                <div className="h-px bg-white/10" />

                                <div className="reveal-on-load stagger-4 bg-gold/5 border border-gold/10 rounded-xl p-6">
                                    <h4 className="font-bold text-gold mb-2">Penting:</h4>
                                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1 font-sans">
                                        <li>Perkhidmatan ini adalah 100% percuma.</li>
                                        <li>Kami tidak menyediakan akses 'login' (CMS) buat masa ini.</li>
                                        <li>Sebarang kemaskini maklumat perlu dimaklumkan kepada pihak admin MOSQ.</li>
                                    </ul>
                                </div>

                                <div className="pt-4 reveal-on-load stagger-5">
                                    <Button type="submit" size="lg" className="w-full bg-gradient-gold text-black hover:opacity-90 font-bold py-4 text-lg border-none shadow-[0_0_30px_rgba(201,162,77,0.4)] transition-all">
                                        Hantar Permohonan
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
