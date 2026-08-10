import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://evrjuuxmmbrjkuioqrqd.supabase.co";
const supabasePublishableKey = "sb_publishable_8v0h6_JYQ3F5hill7Rph4g_u01d_F11";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
);
