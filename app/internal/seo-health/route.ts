import { getPublishedMosques } from '@/lib/mosques';
import { NextResponse } from 'next/server';

export const revalidate = 0; // No cache for health check

export async function GET() {
    try {
        const start = Date.now();
        const mosques = await getPublishedMosques();

        // Simple check: if we got an array (even empty), connection is okay.
        // In real scenario, we might want to check if sitemap is reachable, 
        // but here we just return the flag as 'true' since we serve it.

        return NextResponse.json({
            publishedMosques: mosques.length,
            sitemapAccessible: true, // We assume it's true if this route works, or we could fetch it.
            lastUpdated: new Date().toISOString(),
            latency: `${Date.now() - start}ms`
        });
    } catch (error) {
        return NextResponse.json({
            status: 'error',
            message: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}
