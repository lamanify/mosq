import { getPublishedMosques } from '@/lib/mosques';
import { NextResponse } from 'next/server';

export const revalidate = 0; // No cache for health check

export async function GET() {
    try {
        const start = Date.now();

        // Import supabase components to check their state
        const { supabaseUrl, supabaseAdmin, supabase } = await import('@/lib/supabase');

        let fetchError = null;
        let queryResult = null;

        try {
            const { data, error } = await supabaseAdmin
                .from('mosques')
                .select('slug')
                .eq('is_published', true)
                .limit(1);

            if (error) fetchError = error;
            queryResult = data;
        } catch (e) {
            fetchError = e instanceof Error ? e.message : String(e);
        }

        const mosques = await getPublishedMosques();

        return NextResponse.json({
            publishedMosques: mosques.length,
            sitemapAccessible: true,
            lastUpdated: new Date().toISOString(),
            latency: `${Date.now() - start}ms`,
            diagnostics: {
                supabaseUrl: supabaseUrl ? `${supabaseUrl.substring(0, 12)}...` : 'MISSING',
                usingServiceRole: supabaseAdmin !== supabase,
                fetchError,
                sampleData: queryResult
            }
        });
    } catch (error) {
        return NextResponse.json({
            status: 'error',
            message: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}
