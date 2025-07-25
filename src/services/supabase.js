import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://rcxyqdqxoxuysuvwgfog.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjeHlxZHF4b3h1eXN1dndnZm9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0OTQxNTAsImV4cCI6MjA2ODA3MDE1MH0.UyjK6KzMJI96ORHsR5St3f5sB6ErJk9waAwXgNIlo-4"
const supabase = createClient(supabaseUrl, supabaseKey);

//Exporting supabase
export default supabase;