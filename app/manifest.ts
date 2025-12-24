import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'MOSQ - Platform Website Masjid Malaysia',
        short_name: 'MOSQ',
        description: 'Bina website masjid profesional dalam 5 minit. Percuma seumur hidup.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: 'https://res.cloudinary.com/lamanify/image/upload/v1766570820/Mosq_5_cuhs4t.webp',
                sizes: 'any',
                type: 'image/webp',
            },
            {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'maskable'
            },
            {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            }
        ],
    };
}
