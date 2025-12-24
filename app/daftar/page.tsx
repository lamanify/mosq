import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PageBanner } from "@/components/ui/PageBanner";
import { Metadata } from "next";
import DaftarForm from "@/components/daftar/DaftarForm";

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
                    className="pb-0"
                />

                <section className="pt-[15px] pb-24">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                        <DaftarForm />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
