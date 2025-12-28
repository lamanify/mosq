import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl) console.warn('Supabase URL is missing from environment variables.');
if (!supabaseAnonKey) console.warn('Supabase Anon Key is missing from environment variables.');

// Standard client for public/authenticated access
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Admin client (service role) - only if key exists
export const supabaseAdmin = supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    })
    : supabase // Fallback to public client if service key missing

