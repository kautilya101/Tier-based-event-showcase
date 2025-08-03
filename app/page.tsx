import { BaseHomeComponent } from "@/components/BaseHomeComponent";
import { EventsListing } from "@/components/EventsListing";
import { Navbar } from "@/components/Navbar";
import { currentUser } from "@clerk/nextjs/server";
import { tierUpdateAction } from "./actions/tierUpdateAction";
import { Tier } from "@/types/events.types";

export default async function HomePage() {
  const user = await currentUser()

  if(user && !user?.publicMetadata){
    await tierUpdateAction(user.id, Tier.Free)
  }

  return (
    <main className="w-full h-screen">
      <Navbar badge={user?.publicMetadata} />
      {!user ? <BaseHomeComponent /> : <EventsListing/>}
      
    </main>
  );
}
