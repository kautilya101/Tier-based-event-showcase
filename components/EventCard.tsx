import { IEvents, Tier } from '@/types/events.types'
import { tierColorCoding } from '@/utils/constant';
import React from 'react'

export const EventCard = ({event}: {event: IEvents}) => {

  const formatDateInDays = (eventDate: Date) => {
    const currentDate = new Date();
    const targetDate = new Date(eventDate);

    const diffTime = targetDate.getTime() - currentDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // convert ms to full days

    if (diffDays > 0) {
      return `Coming in ${diffDays} day${diffDays > 1 ? 's' : ''}`;
    } else if (diffDays === 0) {
      return 'Happening Today';
    } else {
      return `Ended ${Math.abs(diffDays)} day${Math.abs(diffDays) > 1 ? 's' : ''} ago`;
    }
  };

  return (
     <div className="rounded-lg shadow-md bg-white/10 dark:bg-zinc-900 p-4 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between h-full">
      <img
        src={event.image_url}
        alt={event.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2 text-zinc-100 dark:text-zinc-800">{event.title}</h2>
      <p className="text-sm text-zinc-400 line-clamp-3 mb-4">
        {event.description}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-auto">
          {formatDateInDays(new Date(event.event_date))}
        </p>
        <span className={` px-2 py-0.5 rounded-sm text-sm font-semibold ${tierColorCoding[event.tier as Tier]} capitalize`}>{event.tier}</span>
      </div>
    </div>
  )
}
