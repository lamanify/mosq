// TypeScript types for MOSQ platform

export interface WaktuSolat {
    subuh: string;
    zohor: string;
    asar: string;
    maghrib: string;
    isyak: string;
}

export interface Aktiviti {
    nama: string;
    hari: string;
    masa: string;
    keterangan?: string;
}

export interface MosqueData {
    // Identification
    slug: string;
    namaMasjid: string;

    // Location
    alamatPenuh: string;
    bandar: string;
    negeri: string;

    // Contact
    telefon: string;
    emel: string;
    namaImamAtauAJK: string;

    // Content
    pengenalan: string;
    sejarahMasjid: string;
    visiMisi?: string;

    // Prayer times
    waktuSolat: WaktuSolat;

    // Activities
    senaraiAktiviti: Aktiviti[];

    // Maps
    googleMapsLink: string;
    googleMapsEmbed?: string;
}

// Form data structure for new mosque registration
export interface MosqueFormData {
    namaMasjid: string;
    alamatPenuh: string;
    bandar: string;
    negeri: string;
    telefon: string;
    emel: string;
    namaImamAtauAJK: string;
    sejarahMasjid: string;
    waktuSolat: WaktuSolat;
    senaraiAktiviti: string; // Free text for initial submission
    googleMapsLink: string;
}

// Malaysia states for form selection
export const NEGERI_MALAYSIA = [
    "Johor",
    "Kedah",
    "Kelantan",
    "Melaka",
    "Negeri Sembilan",
    "Pahang",
    "Perak",
    "Perlis",
    "Pulau Pinang",
    "Sabah",
    "Sarawak",
    "Selangor",
    "Terengganu",
    "Wilayah Persekutuan Kuala Lumpur",
    "Wilayah Persekutuan Labuan",
    "Wilayah Persekutuan Putrajaya",
] as const;

export type NegeriMalaysia = (typeof NEGERI_MALAYSIA)[number];
