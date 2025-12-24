"use client";

import { useState, FormEvent } from "react";
import { FormInput, TextArea } from "@/components/ui/FormInput";
import { Button } from "@/components/ui/Button";
import { NEGERI_MALAYSIA } from "@/lib/types";

export default function DaftarForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const [formData, setFormData] = useState({
        namaMasjid: "",
        negeri: "",
        bandar: "",
        alamat: "",
        namaPemohon: "",
        jawatan: "",
        telefon: "",
        emel: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        // Handle select element which doesn't have an id attribute in the same way as inputs in the original code
        // In the original code, select didn't have an id, but here we can give it one or handle 'negeri' specifically
        if (e.target.tagName === 'SELECT') {
            setFormData((prev) => ({ ...prev, negeri: value }));
        } else {
            setFormData((prev) => ({ ...prev, [id]: value }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    submittedAt: new Date().toISOString(),
                    ...formData
                }),
            });

            if (!response.ok) {
                throw new Error("Gagal menghantar permohonan");
            }

            setSubmitStatus("success");
            setFormData({
                namaMasjid: "",
                negeri: "",
                bandar: "",
                alamat: "",
                namaPemohon: "",
                jawatan: "",
                telefon: "",
                emel: "",
            });
        } catch (error: any) {
            console.error("Submission error:", typeof error);
            setSubmitStatus("error");

            // For fetch, we need to check the response object if it wasn't caught by 'response.ok' check
            // But here the error is caught after throw new Error
            setErrorMessage("Maaf, terdapat masalah semasa menghantar permohonan. Sila pastikan webhook n8n anda telah diaktifkan.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === "success") {
        return (
            <div className="reveal-on-load stagger-1 glass-card rounded-2xl p-8 md:p-12 border border-white/10 text-center">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Permohonan Berjaya!</h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Terima kasih kerana mendaftar. Pihak kami akan menghubungi anda melalui WhatsApp untuk langkah seterusnya.
                </p>
                <Button
                    onClick={() => setSubmitStatus("idle")}
                    variant="secondary"
                    className="bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20 px-8 py-3 rounded-xl backdrop-blur-sm"
                >
                    Kembali
                </Button>
            </div>
        );
    }

    return (
        <div className="reveal-on-load stagger-1 glass-card rounded-2xl p-8 md:p-12 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-8">
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
                            value={formData.namaMasjid}
                            onChange={handleChange}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 font-sans">
                                    Negeri
                                </label>
                                <select
                                    value={formData.negeri}
                                    onChange={handleChange}
                                    className="font-sans w-full rounded-lg bg-black/50 border border-white/10 px-4 py-3 text-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                                    required
                                >
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
                                value={formData.bandar}
                                onChange={handleChange}
                            />
                        </div>
                        <TextArea
                            id="alamat"
                            label="Alamat Penuh"
                            placeholder="Alamat lengkap masjid..."
                            required
                            value={formData.alamat}
                            onChange={handleChange}
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
                            value={formData.namaPemohon}
                            onChange={handleChange}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormInput
                                id="jawatan"
                                label="Jawatan dalam AJK"
                                placeholder="Contoh: Setiausaha"
                                required
                                value={formData.jawatan}
                                onChange={handleChange}
                            />
                            <FormInput
                                id="telefon"
                                label="No. Telefon (WhatsApp)"
                                type="tel"
                                placeholder="012-3456789"
                                required
                                value={formData.telefon}
                                onChange={handleChange}
                            />
                        </div>
                        <FormInput
                            id="emel"
                            label="Emel Rasmi (Jika ada)"
                            type="email"
                            placeholder="masjid@contoh.com"
                            value={formData.emel}
                            onChange={handleChange}
                        />
                    </div>
                </div>



                {submitStatus === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
                        {errorMessage}
                    </div>
                )}

                <div className="pt-4 reveal-on-load stagger-4">
                    <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-gold text-black hover:opacity-90 font-bold py-4 text-lg border-none shadow-[0_0_30px_rgba(201,162,77,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Sedang Menghantar..." : "Hantar Permohonan"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
