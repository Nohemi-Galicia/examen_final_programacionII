import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://zsxxadbqnbyfgmntipmo.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_JWy6wRAp6Kgq2CwR6dCsXQ_Pr3IhW06';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});