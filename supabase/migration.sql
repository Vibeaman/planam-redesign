-- ============================================================
-- PLANAM.IO — Supabase Migration
-- Run this in your Supabase SQL Editor (Dashboard > SQL Editor)
-- ============================================================

-- 1. PROFILES TABLE
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text not null,
  email text not null,
  avatar_url text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone"
  on public.profiles for select using (true);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert with check (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- 2. EVENTS TABLE
create table if not exists public.events (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text,
  date text not null,
  time text,
  location text,
  category text,
  image text,
  organizer_id uuid references public.profiles(id),
  organizer_name text,
  ticket_tiers jsonb default '[]'::jsonb,
  tags text[] default '{}',
  is_featured boolean default false,
  watchers int default 0,
  demand int default 0,
  created_at timestamptz default now()
);

alter table public.events enable row level security;

create policy "Events are viewable by everyone"
  on public.events for select using (true);

create policy "Authenticated users can create events"
  on public.events for insert with check (auth.uid() = organizer_id);

create policy "Organizers can update own events"
  on public.events for update using (auth.uid() = organizer_id);

create policy "Organizers can delete own events"
  on public.events for delete using (auth.uid() = organizer_id);


-- 3. TICKETS TABLE
create table if not exists public.tickets (
  id uuid default gen_random_uuid() primary key,
  event_id uuid references public.events(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  event_title text,
  tier_name text,
  quantity int default 1,
  total_price numeric default 0,
  purchased_at timestamptz default now()
);

alter table public.tickets enable row level security;

create policy "Users can view own tickets"
  on public.tickets for select using (auth.uid() = user_id);

create policy "Authenticated users can purchase tickets"
  on public.tickets for insert with check (auth.uid() = user_id);


-- 4. SEED DATA (10 events)
insert into public.events (id, title, description, date, time, location, category, image, organizer_name, ticket_tiers, tags, is_featured, watchers, demand)
values
  (
    'a1b2c3d4-0001-4000-8000-000000000001',
    'Detty December Lagos',
    'The biggest end-of-year celebration in Lagos. Three stages, 40+ artists, and an unforgettable night under the stars. Afrobeats, amapiano, and everything in between.',
    '2026-12-20', '18:00',
    'Eko Hotel & Suites, Victoria Island, Lagos',
    'Music',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800',
    'Planam Events',
    '[{"name":"Regular","price":15000,"available":500},{"name":"VIP","price":45000,"available":200},{"name":"VVIP","price":100000,"available":50}]'::jsonb,
    ARRAY['afrobeats','nightlife','lagos','december'],
    true, 2400, 92
  ),
  (
    'a1b2c3d4-0002-4000-8000-000000000002',
    'Lagos Tech Summit 2027',
    'West Africa''s premier technology conference. Keynotes from top founders, hands-on workshops, startup pitch competitions, and networking with 5,000+ tech professionals.',
    '2027-03-15', '09:00',
    'Landmark Centre, Victoria Island, Lagos',
    'Tech',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    'TechCabal',
    '[{"name":"Early Bird","price":10000,"available":1000},{"name":"Standard","price":20000,"available":2000},{"name":"Executive","price":75000,"available":100}]'::jsonb,
    ARRAY['technology','startup','AI','networking'],
    true, 1900, 78
  ),
  (
    'a1b2c3d4-0003-4000-8000-000000000003',
    'Art X Lagos',
    'The leading international art fair in West Africa. Galleries from across the continent showcase contemporary African art. Talks, installations, and collector previews.',
    '2027-01-20', '10:00',
    'Federal Palace Hotel, Victoria Island, Lagos',
    'Art',
    'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800',
    'Art X Collective',
    '[{"name":"Day Pass","price":5000,"available":800},{"name":"Weekend Pass","price":12000,"available":400},{"name":"Collector Preview","price":50000,"available":50}]'::jsonb,
    ARRAY['art','contemporary','gallery','culture'],
    false, 950, 65
  ),
  (
    'a1b2c3d4-0004-4000-8000-000000000004',
    'Afro Nation Nigeria',
    'The world''s biggest Afrobeats festival comes home. Headliners include Burna Boy, Wizkid, Tiwa Savage, and more across two electrifying days on the beach.',
    '2027-01-05', '14:00',
    'Tafawa Balewa Square, Lagos',
    'Festivals',
    'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
    'Afro Nation',
    '[{"name":"General","price":25000,"available":3000},{"name":"VIP","price":75000,"available":500},{"name":"Backstage","price":200000,"available":50}]'::jsonb,
    ARRAY['festival','afrobeats','beach','music'],
    true, 3100, 88
  ),
  (
    'a1b2c3d4-0005-4000-8000-000000000005',
    'Lagos Food Festival',
    'A celebration of Nigerian and African cuisine. Over 100 food vendors, cooking masterclasses with celebrity chefs, and live music. Come hungry, leave happy.',
    '2027-02-14', '11:00',
    'Muri Okunola Park, Victoria Island, Lagos',
    'Food',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800',
    'Foodie Lagos',
    '[{"name":"General Entry","price":3000,"available":2000},{"name":"Tasting Pass","price":8000,"available":500},{"name":"Chef Table","price":25000,"available":30}]'::jsonb,
    ARRAY['food','culinary','jollof','african-cuisine'],
    false, 1200, 70
  ),
  (
    'a1b2c3d4-0006-4000-8000-000000000006',
    'Lagos Marathon 2027',
    'Join 100,000 runners for Africa''s fastest-growing marathon. Routes through the heart of Lagos with full, half, and 10K options. Prizes worth ₦200M.',
    '2027-02-08', '06:30',
    'National Stadium, Surulere, Lagos',
    'Sports',
    'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=800',
    'Lagos State Sports Commission',
    '[{"name":"10K Run","price":2000,"available":5000},{"name":"Half Marathon","price":5000,"available":3000},{"name":"Full Marathon","price":7500,"available":2000}]'::jsonb,
    ARRAY['marathon','running','fitness','sports'],
    true, 1800, 82
  ),
  (
    'a1b2c3d4-0007-4000-8000-000000000007',
    'Homecoming Festival',
    'A multi-day cultural celebration bringing the diaspora home. Music, fashion, panels, pool parties, and the hottest NYE countdown in Africa.',
    '2026-12-28', '12:00',
    'Various Venues, Lagos Island',
    'Festivals',
    'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800',
    'Homecoming Africa',
    '[{"name":"Single Day","price":20000,"available":1000},{"name":"Weekend Pass","price":50000,"available":500},{"name":"All Access","price":150000,"available":100}]'::jsonb,
    ARRAY['homecoming','diaspora','culture','NYE'],
    true, 4200, 95
  ),
  (
    'a1b2c3d4-0008-4000-8000-000000000008',
    'Comedy Night Lagos',
    'An evening of non-stop laughs with Nigeria''s funniest comedians. Featuring Basketmouth, Bovi, Warri, and surprise guest performers. Dinner service available.',
    '2027-01-18', '19:00',
    'Eko Convention Centre, Victoria Island, Lagos',
    'Comedy',
    'https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=800',
    'Laugh Industry',
    '[{"name":"Regular","price":10000,"available":600},{"name":"Table for 4","price":50000,"available":50},{"name":"Front Row VIP","price":30000,"available":40}]'::jsonb,
    ARRAY['comedy','standup','nightlife','entertainment'],
    false, 800, 60
  ),
  (
    'a1b2c3d4-0009-4000-8000-000000000009',
    'Startup Pitch Night',
    'Watch 10 handpicked startups pitch to a panel of top VCs and angel investors. Network with founders, investors, and tech leaders. Could you spot the next unicorn?',
    '2027-04-10', '17:00',
    'Zone Tech Park, Gbagada, Lagos',
    'Tech',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    'Future Africa',
    '[{"name":"Attendee","price":5000,"available":300},{"name":"Investor Circle","price":25000,"available":50}]'::jsonb,
    ARRAY['startup','pitch','venture-capital','networking'],
    false, 650, 55
  ),
  (
    'a1b2c3d4-0010-4000-8000-000000000010',
    'Amapiano Sundowner',
    'Sunset vibes with the hottest amapiano DJs. Rooftop setting, premium drinks, and the best view of the Lagos skyline. Smart casual dress code.',
    '2027-03-01', '16:00',
    'Sky Lounge, Eko Atlantic, Lagos',
    'Music',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800',
    'Vibes & Co',
    '[{"name":"Early Bird","price":8000,"available":200},{"name":"Standard","price":15000,"available":300},{"name":"Cabana","price":100000,"available":10}]'::jsonb,
    ARRAY['amapiano','rooftop','sundowner','DJ'],
    false, 1100, 74
  )
on conflict (id) do nothing;

-- Done! ✅
