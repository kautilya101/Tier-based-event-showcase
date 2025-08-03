"use client"

import { Tier } from '@/types/events.types';
import { tierColorCoding } from '@/utils/constant';
import { UserButton, useSession, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import React, { useState } from 'react'
import { UpgradePlanModal } from './UpgradePlanModal';
import { useSupabase } from '@/utils/supabase/client';
import { tierUpdateAction } from '@/app/actions/tierUpdateAction';
import { clerkClient } from '@clerk/nextjs/server';

export const Navbar = ({badge}: {badge: UserPublicMetadata | undefined}) => {
  const [badgeTier, setBadgeTier] = useState(badge?.tier || Tier.Free);
  const [showPlans, setShowPlanModal] = useState(false)
  const {user} = useUser();
  const { createSupabaseClient } = useSupabase();
  const { session } = useSession();
  
  async function updateUserTier(newTier: Tier) {
    
    if (!session) {
      console.error("No active session");
      return;
    }

    const token = await session.getToken();
    const supabase = createSupabaseClient(token as string);
    const userId = session.user.id;

    const { error } = await (await supabase)
      .from('profiles')
      .update({ tier: newTier })
      .eq('id', userId);
    
    if (error) {
      console.error("Failed to update tier:", error.message);
    } else {
      console.log("Tier updated to", newTier);
    }
  }

  const checkoutClickHandler = async (tier: Tier) => {
    await tierUpdateAction(user?.id!, tier)
    updateUserTier(tier);
    setShowPlanModal(false);
    setBadgeTier(tier)
    window.location.reload()
  }

  return (
    <nav className="bg-transparent p-4 border-b border-zinc-800">
      <div className="w-full md:max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-4xl font-bold tracking-wider">Tero</span>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          {
            badge && 
            <span onClick={() => setShowPlanModal(true)} className={`${tierColorCoding[badgeTier as Tier]} cursor-pointer px-2 py-0.5 rounded-sm text-sm font-semibold capitalize`}>{badgeTier as Tier}</span>
          }
          {
            !user ? (<div className="flex items-center justify-center gap-4">
              <Link
                href="/sign-in"
                className="text-sm cursor-pointer px-3 py-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded-md duration-300"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="text-sm cursor-pointer px-3 py-1.5 bg-white/5 hover:bg-white/10 transition-colors rounded-md duration-300"
              >
                Sign Up
              </Link>            
            </div>) : (
              <div className="flex items-center justify-center">
                <UserButton afterSwitchSessionUrl='/' />
              </div>
            )
          }
        </div>
      </div>
      {
       showPlans && <UpgradePlanModal
        currentTier={user?.publicMetadata.tier as Tier}
        onClose={() => setShowPlanModal(false)}
        onCheckout={(tier) => checkoutClickHandler(tier)}
      />
    }
    </nav>
  )
}
