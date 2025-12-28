import { NextResponse } from 'next/server';

export const revalidate = 900; // 15 minutes

const BASE_DOMAIN = 'mosq.io';
const PROTOCOL = 'https';

const MAIN_PAGES = [
    '',
    '/cara-kerja',
    '/kenapa-perlu',
    '/senarai-masjid',
    '/siapa-kami',
    '/soalan-lazim'
];

export async function GET() {
    const urls = MAIN_PAGES.map(page => `
  <url>
    <loc>${PROTOCOL}://${BASE_DOMAIN}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=900, s-maxage=900',
        },
    });
}
