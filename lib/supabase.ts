import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "";

export const hasSupabaseConfig = Boolean(supabaseUrl && supabasePublishableKey);

export const supabase =
  hasSupabaseConfig
    ? createClient<Database>(supabaseUrl, supabasePublishableKey)
    : null;
