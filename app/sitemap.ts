import { MetadataRoute } from 'next';
import { getAllMosqueSlugs } from '@/lib/mosques';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mosq.io';

    // Static routes
    const routes = [
        '',
        '/daftar',
        '/contoh',
        '/soalan-lazim',
        '/cara-kerja',
        '/kenapa-perlu',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic mosque routes
    const mosqueSlugs = getAllMosqueSlugs();
    const mosqueRoutes = mosqueSlugs.map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: 0.9,
    }));

    return [...routes, ...mosqueRoutes];
}
