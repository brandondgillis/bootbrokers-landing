import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://yrbarhakwcropmapcfgg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyYmFyaGFrd2Nyb3BtYXBjZmdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzNjMzODUsImV4cCI6MjA3NTkzOTM4NX0._Pru7-kE029XkWxnr748caAACyA3649WUwd1mECjlm0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
