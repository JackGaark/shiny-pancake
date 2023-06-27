import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_KEY } from '$env/static/private';

// const supabaseUrl = 'https://dodliczasjeylokhjycm.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
// 	auth: {
// 		autoRefreshToken: false,
// 		persistSession: false,
// 		detectSessionInUrl: false
// 	}
// });
