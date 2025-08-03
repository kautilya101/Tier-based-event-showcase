import { Tier } from '@/types/events.types';

export const tierColorCoding: Record<Tier, string> = {
  [Tier.Free]: 'bg-zinc-200 text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100',
  [Tier.Silver]: 'bg-gray-300 text-gray-800 dark:bg-gray-600 dark:text-white',
  [Tier.Gold]: 'bg-yellow-400 text-yellow-900 dark:bg-yellow-500 dark:text-zinc-900',
  [Tier.Platinum]: 'bg-purple-500 text-white dark:bg-purple-400 dark:text-zinc-900',
};