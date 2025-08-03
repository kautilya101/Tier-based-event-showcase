import React from 'react'

export const EventCardSkeletion = () => {
  return (
     <div className="rounded-lg shadow-md bg-white/10 dark:bg-zinc-900 p-4 animate-pulse flex flex-col justify-between h-full space-y-4">
      <div className="w-full h-48 bg-zinc-300 dark:bg-zinc-700 rounded-md" />

      <div className="h-5 bg-zinc-300 dark:bg-zinc-700 rounded w-3/4" />

      <div className="space-y-2">
        <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-full" />
        <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-5/6" />
        <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-2/3" />
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded w-1/3" />
        <div className="h-6 w-16 bg-zinc-300 dark:bg-zinc-700 rounded" />
      </div>
    </div>
  )
}
