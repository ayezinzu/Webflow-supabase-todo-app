import { createClient, SupabaseClient } from '@supabase/supabase-js';

import { SUPABASE_KEYS } from '$utils/constants';

import type { Database } from '../../../database.types';

const SUPABASE_URL = SUPABASE_KEYS.supabase_project_url as string;
const SUPABASE_ANON_KEY = SUPABASE_KEYS.supabase_anon_key as string;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables!');
}

// Typed Supabase client
export const supabase: SupabaseClient<Database> = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
