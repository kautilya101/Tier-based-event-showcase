"use client"
import { IEvents, Tier } from '@/types/events.types';
import { useSupabase } from '@/utils/supabase/client';
import { useSession } from '@clerk/nextjs';
import React, { useEffect, useState } from 'react'
import { EventCard } from './EventCard';
import { EventCardSkeletion } from './EventCardSkeletion';
import { UpgradePlanModal } from './UpgradePlanModal';

export const EventsListing = () => {
  const [events, setEvents] = useState<IEvents[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const {isSignedIn, session} = useSession();
  const { createSupabaseClient } = useSupabase();

  
  useEffect(() => {
    
    if(!isSignedIn || !session) return;
    async function init() {
      setIsLoading(true);
      try{

        const token = await session?.getToken();
        console.log(token)
        const supabase = createSupabaseClient(token as string);
        const userId = session?.user.id;
        
      const { data: profile, error: profileError } = await (await supabase).from("profiles")
        .select("*")
        .eq("id", userId)
        .limit(1);

      if (profile && profile.length === 0 && !profileError) {
        const response = await (await supabase).from("profiles").insert({
          id: userId,
          tier: "free",
        });
        if (response.status === 201) {
          console.log("Inserted new profile for", userId);
        }
      }

      const { data, error } = await (await supabase).from("events").select("*");
      if (error) console.error(error);
      else setEvents(data);
      }
      catch(e){
        console.log(`Error while fetching events: ${e}`);
      }
      finally{
        setIsLoading(false);
      }
    }
    init();
  }, [isSignedIn])

  

  return (
    <section className="w-full md:max-w-7xl mx-auto p-4 h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-10">
        {isLoading ? new Array(4).fill(0).map((_, index) => (
          <EventCardSkeletion key={index}/>
        )) : (
          events.map(e => (
            <EventCard key={e.id} event={e} />
          ))
        )}
      </div>
    </section>
  )
}
