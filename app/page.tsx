import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LinkButton } from "@/components/ui/Button";
import { CardWithIcon } from "@/components/ui/Card";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "100% Percuma",
    description:
      "Tiada caj tersembunyi, tiada langganan. Inisiatif kebajikan sepenuhnya untuk komuniti.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    ),
    title: "Bebas Iklan",
    description:
      "Fokus ibadah tanpa gangguan. Laman web bersih tanpa sebarang iklan komersial.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: "Pantas & Selamat",
    description:
      "Teknologi moden menjamin kelajuan akses dan keselamatan data masjid anda.",
  },
];

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MOSQ',
    url: 'https://mosq.io',
    logo: 'https://mosq.io/og-image.jpg',
    description: 'Platform Website Masjid No.1 Malaysia. Bina website masjid profesional dalam 5 minit.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MY'
    },
    founder: {
      '@type': 'Organization',
      name: 'MOSQ Team'
    }
  };

  return (
    <div className="bg-black min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-0 lg:pt-48 lg:pb-0">
          {/* Background Image - Covers Viewport */}
          <Image
            src="https://res.cloudinary.com/lamanify/image/upload/v1766550864/Mosq_4_g7urbn.webp"
            alt="Mosque Architecture Background"
            fill
            priority
            className="object-cover z-0"
            quality={85}
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60 z-[1]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-20">
            <div className="reveal-on-load stagger-1 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
              Inisiatif Digital Untuk Ummah
            </div>

            <h1 className="reveal-on-load stagger-2 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
              Laman Web Masjid <br />
              <span className="text-gradient-gold">Profesional, Percuma & Mudah</span>
            </h1>

            <p className="reveal-on-load stagger-3 max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed font-sans">
              Bina kewujudan digital masjid anda dengan mudah. <br className="hidden sm:block" />
              Tanpa kos, tanpa kemahiran teknikal, tanpa pengurusan rumit.
            </p>

            <div className="reveal-on-load stagger-4 flex flex-col items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <LinkButton
                  href="/daftar"
                  className="bg-gradient-gold text-black hover:opacity-90 border-none font-bold px-8 py-4 text-lg rounded-xl shadow-[0_0_30px_rgba(201,162,77,0.4)] transition-all hover:scale-105"
                >
                  Dapat Website Masjid Percuma
                </LinkButton>
                <LinkButton
                  href="/contoh"
                  variant="secondary"
                  className="bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20 px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
                >
                  Lihat Contoh Laman Web
                </LinkButton>
              </div>

              <p className="text-sm text-gray-500 font-sans">
                Digunakan untuk maklumat masjid, jadual solat & aktiviti komuniti.
              </p>
            </div>

            {/* Platform Preview / Mockup */}
            <div className="mt-20 relative mx-auto max-w-5xl z-20 -mb-[30px]">
              <div className="absolute inset-0 bg-gold/20 blur-[60px] rounded-full opacity-30" />
              <div className="relative bg-[#111] border border-white/10 rounded-2xl p-2 shadow-2xl">
                <div className="bg-[#151515] rounded-xl overflow-hidden border border-white/5 aspect-[16/9] relative">
                  {/* Decorative Mockup Content */}
                  <Image
                    src="https://res.cloudinary.com/lamanify/image/upload/v1766570169/Gemini_Generated_Image_3nvw5l3nvw5l3nvw_ly8efk.webp"
                    alt="MOSQ Platform Dashboard Preview"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-[#050505] pt-24 pb-24 relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Mengapa Pilih MOSQ?
              </h2>
              <p className="text-gray-400 text-center mx-auto max-w-2xl">
                Platform yang dibina khas dengan teknologi terkini untuk institusi masjid.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <div key={feature.title} className={`reveal-on-load stagger-${idx + 1} glass-card p-8 rounded-2xl text-center`}>
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-6 border border-gold/20 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-0">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Steps - Dark Mode */}
        <section className="py-24 border-t border-white/5 bg-[#080808]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Mudah. Pantas. <br />
                  <span className="text-gradient-gold">Tanpa Koding.</span>
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Kami permudah proses digitalisasi masjid anda melalui 3 langkah ringkas.
                </p>

                <div className="space-y-8">
                  <div className="reveal-on-load stagger-1 flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold font-bold">1</div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Daftar Maklumat</h4>
                      <p className="text-gray-500 text-sm mt-1 mb-0">Isi borang ringkas tentang butiran masjid anda.</p>
                    </div>
                  </div>
                  <div className="reveal-on-load stagger-2 flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold font-bold">2</div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Sistem Menjana Website</h4>
                      <p className="text-gray-500 text-sm mt-1 mb-0">Platform kami akan membina struktur website secara automatik.</p>
                    </div>
                  </div>
                  <div className="reveal-on-load stagger-3 flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Siap Untuk Digunakan</h4>
                      <p className="text-gray-500 text-sm mt-1 mb-0">Kongsikan pautan website kepada jemaah kariah anda.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-orange-500/20 blur-2xl opacity-20" />
                <div className="relative bg-[#111] border border-white/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-white mb-2">3~7</div>
                    <div className="text-gold uppercase tracking-widest text-sm">Hari Bekerja</div>
                    <p className="text-gray-500 text-xs mt-4 max-w-[200px] mx-auto">Tempoh siap sepenuhnya selepas pengesahan data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gold/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sedia untuk bertukar ke digital?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Sertai beratus masjid lain yang telah memanfaatkan platform MOSQ untuk kemudahan jemaah.
            </p>
            <div className="flex justify-center">
              <LinkButton href="/daftar" className="bg-gradient-gold text-black hover:opacity-90 px-10 py-5 text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(201,162,77,0.4)]">
                Dapat Website Masjid Percuma
              </LinkButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
