// Supabase project configuration for Vonari Educational Agency
// The anon/public key is safe to expose in client-side code by design —
// it only allows the actions permitted by Row Level Security policies
// configured in the Supabase dashboard.

const SUPABASE_URL = 'https://gwhpqbjjnjkikmkyvonw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3aHBxYmpqbmpraWtta3l2b253Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwODY5OTUsImV4cCI6MjEwNDY2Mjk5NX0.DxIfrQTfY8QSyRmfl3WO3VoKNEzs5fcZuPsOBrOlXpI';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
