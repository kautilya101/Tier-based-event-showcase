"use client"
import { createBrowserClient } from '@supabase/ssr'

export function useSupabase() {
  // Create a supabase client on the browser with project's credentials
  async function createSupabaseClient(token: string){
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        async accessToken() {
          return token;
        },
      }
    )
  }
  return { createSupabaseClient }
}