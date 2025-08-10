
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://avdfvovsabtuczldqtpo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2ZGZ2b3ZzYWJ0dWN6bGRxdHBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0NDQ3ODksImV4cCI6MjA2MDAyMDc4OX0.SiTP3Uey7Jnvgq__sQik5M5uWFHtl4hsO8qvkGR91NI';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;