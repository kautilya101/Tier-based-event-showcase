export enum Tier {
  Free = 'free',
  Silver = 'silver',
  Gold = 'gold',
  Platinum = 'platinum',
}

export interface IEvents {
  id: string;
  title: string;
  description: string;
  event_date: Date;
  image_url: string;
  tier: Tier;
  created_at: Date;
}