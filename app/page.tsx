import { BaseHomeComponent } from "@/components/BaseHomeComponent";
import { EventsListing } from "@/components/EventsListing";
import { Navbar } from "@/components/Navbar";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { tierUpdateAction } from "./actions/tierUpdateAction";
import { Tier } from "@/types/events.types";

export default async function HomePage() {
  const {userId} = await auth()

  let user = null;
  if (userId) {
    user = await (await clerkClient()).users.getUser(userId)
    if (user && !user.publicMetadata) {
      await tierUpdateAction(userId, Tier.Free);
    }
  }

  return (
    <main className="w-full h-screen">
      <Navbar badge={user?.publicMetadata} />
      {!user ? <BaseHomeComponent /> : <EventsListing/>}
      
    </main>
  );
}
