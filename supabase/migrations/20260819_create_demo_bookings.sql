create extension if not exists pgcrypto;

create table if not exists public.demo_bookings (
  id uuid primary key default gen_random_uuid(),
  gym_name text not null,
  business_type text not null,
  city text not null,
  location_count text not null,
  member_count text not null,
  current_software text not null,
  migration_urgency text not null,
  contact_name text not null,
  email text not null,
  phone text not null,
  preferred_date date not null,
  preferred_time text not null,
  notes text,
  source text not null default 'website_demo_modal',
  submitted_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index if not exists demo_bookings_created_at_idx on public.demo_bookings (created_at desc);
create index if not exists demo_bookings_email_idx on public.demo_bookings (email);
