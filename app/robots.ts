import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function robots(): Promise<MetadataRoute.Robots> {
    const headersList = await headers();
    const host = headersList.get('host') || 'mosq.io';

    // Root domain logic
    if (host === 'mosq.io' || host === 'www.mosq.io') {
        return {
            rules: {
                userAgent: '*',
                allow: '/',
            },
            sitemap: 'https://mosq.io/sitemap.xml',
        };
    }

    // Subdomain logic (wildcard handling)
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `https://${host}/sitemap.xml`,
    };
}
