import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kkgixrkutpwiktnsvcuw.supabase.co";
const supabaseKey = "sb_publishable_ym5yAj7PK1Pz858BEDSvng_NS9GB1AA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
