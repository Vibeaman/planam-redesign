import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hibklbygzkpegxzgcatv.supabase.co'
const supabaseAnonKey = 'sb_publishable_KpRWeLAY1Ql64QrSlkWf3A_JXuX6R3b'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
