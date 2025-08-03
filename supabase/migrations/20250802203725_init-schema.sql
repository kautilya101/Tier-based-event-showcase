-- 1. Enum type for Tier
create type Tier as enum ('free', 'silver', 'gold', 'platinum');

-- 2. Tier ranking helper table
create table tier_rank (
  tier Tier primary key,
  rank int not null
);

insert into tier_rank (tier, rank) values
  ('free', 1),
  ('silver', 2),
  ('gold', 3),
  ('platinum', 4);

-- 3. Events table
create table events (
  id uuid primary key default gen_random_uuid(),
  title text,
  description text,
  event_date timestamp default now(),
  image_url text,
  tier Tier default 'free',
  created_at timestamp default now()
);

-- 4. Profiles table (linked to Clerk user ID)
create table profiles (
  id text primary key, -- Clerk user ID (e.g., 'user_abc123')
  tier Tier default 'free'
);

-- 5. Enable RLS on events
alter table events enable row level security;

-- 6. Policy to allow users to read events of their tier or lower
create policy "Users can check events of their tier and below"
on events 
for select
using (
  exists (
    select 1 from profiles p 
    join tier_rank user_rank on p.tier = user_rank.tier
    join tier_rank event_rank on events.tier = event_rank.tier
    where p.id = auth.uid()
    and event_rank.rank <= user_rank.rank 
  )
);
