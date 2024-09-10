
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://qpmohzfekoucmtytfwow.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwbW9oemZla291Y210eXRmd293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU3NzMyMTcsImV4cCI6MjA0MTM0OTIxN30.IWm2GqN9QSu5MTs2-qc7Zi45n6hDWhNgIAbTyRA8Kps'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;
