import React, { useState } from 'react';
import { Tier } from '@/types/events.types'; // assuming enum Tier

interface Props {
  currentTier: Tier;
  onClose: () => void;
  onCheckout: (selectedTier: Tier) => void;
}

const tiers: Tier[] = [Tier.Free, Tier.Silver, Tier.Gold, Tier.Platinum];

export const UpgradePlanModal = ({ currentTier, onClose, onCheckout }: Props) => {
  const [selectedTier, setSelectedTier] = useState<Tier | null>(null);
  const isCurrent = (tier: Tier) => tier === currentTier;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="bg-background dark:bg-zinc-900 rounded-xl shadow-lg w-full max-w-md p-6 m-6 space-y-6">
        <h2 className="text-xl font-semibold text-foreground dark:text-zinc-100">
          Upgrade Your Plan
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {tiers.map((tier) => (
            <button
              key={tier}
              className={`
                border rounded-lg px-4 py-2 text-sm font-medium capitalize 
                ${isCurrent(tier)
                  ? 'bg-green-400 text-zinc-500 cursor-not-allowed'
                  : selectedTier === tier
                  ? 'bg-gray-700 text-white cursor-pointer'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer'}
              `}
              onClick={() => !isCurrent(tier) && setSelectedTier(tier)}
              disabled={isCurrent(tier)}
            >
              {tier}
            </button>
          ))}
        </div>

        <div className="flex justify-end items-center gap-4">
          <button
            onClick={onClose}
            className="text-sm text-zinc-500 border-zinc-700 border-1 px-4 py-2 rounded-md cursor-pointer"
          >
            Cancel
          </button>

          <button
            disabled={!selectedTier}
            onClick={() => selectedTier && onCheckout(selectedTier)}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition cursor-pointer ${
              selectedTier
                ? 'bg-gray-600 text-white hover:bg-gray-700'
                : 'bg-zinc-300 text-zinc-500 cursor-not-allowed'
            }`}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
