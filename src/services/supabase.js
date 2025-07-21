import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ohphnveegggfcqijbwiq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ocGhudmVlZ2dnZmNxaWpid2lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxNjUzNzQsImV4cCI6MjA2Nzc0MTM3NH0.tAZ1zzE_z21elUgZIKz5bDFR6VeWJW7el6gBYN0jNiM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
