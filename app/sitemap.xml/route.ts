import { getPublishedMosques } from '@/lib/mosques';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export const revalidate = 60; // 1 minute during debugging

const BASE_DOMAIN = 'mosq.io';
const PAGES = ['', '/tentang', '/jadual-solat', '/aktiviti', '/hubungi'];

export async function GET() {
  const headersList = await headers();
  const host = headersList.get('host') || BASE_DOMAIN;

  // Clean host to handle port numbers in dev if needed, or www
  const domain = host.split(':')[0];

  console.log(`Sitemap request received for host: ${host}, domain: ${domain}`);

  // Check if we are on the root domain (mosq.io or www.mosq.io)
  if (domain === BASE_DOMAIN || domain === `www.${BASE_DOMAIN}`) {
    console.log('Generating root sitemap index');
    return generateSitemapIndex();
  }

  // Otherwise, we are likely on a subdomain
  const subdomain = domain.replace(`.${BASE_DOMAIN}`, '');
  return generateSubdomainSitemap(subdomain, host);
}

async function generateSitemapIndex() {
  const mosques = await getPublishedMosques();
  console.log(`Found ${mosques.length} mosques for sitemap index`);

  const sitemaps = mosques.map(mosque => `
  <sitemap>
    <loc>https://${mosque.slug}.${BASE_DOMAIN}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://${BASE_DOMAIN}/sitemap-main.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
${sitemaps}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=900, s-maxage=900',
    },
  });
}

async function generateSubdomainSitemap(slug: string, host: string) {
  // Verify if mosque exists and is published
  const mosques = await getPublishedMosques();
  const mosque = mosques.find(m => m.slug === slug);

  if (!mosque) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const urls = PAGES.map(page => `
  <url>
    <loc>https://${host}${page}</loc>
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
