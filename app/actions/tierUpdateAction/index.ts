"use server"
import { Tier } from "@/types/events.types";
import { clerkClient } from "@clerk/nextjs/server"

export const tierUpdateAction = async (userId: string, tier: Tier) => {
  try{
    const client = await clerkClient();
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        tier
      } 
    })
    console.log(`Tier Updated ${tier} for user: ${userId} `)
  }
  catch(e){
    console.log(`Tier updation failed: ${e}`);
    throw e;
  }
}