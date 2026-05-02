create table if not exists public.lcq_pickem_entries (
  id text primary key,
  author_token text not null unique,
  name text not null check (char_length(name) between 1 and 32),
  picks jsonb not null check (jsonb_typeof(picks) = 'array'),
  created_at timestamptz not null default now()
);

create table if not exists public.lcq_pickem_results (
  id text primary key,
  results jsonb not null check (jsonb_typeof(results) = 'array'),
  updated_at timestamptz not null default now()
);

alter table public.lcq_pickem_entries enable row level security;
alter table public.lcq_pickem_results enable row level security;

drop policy if exists "entries are readable" on public.lcq_pickem_entries;
create policy "entries are readable"
on public.lcq_pickem_entries for select
using (true);

drop policy if exists "entries can be submitted" on public.lcq_pickem_entries;
create policy "entries can be submitted"
on public.lcq_pickem_entries for insert
with check (now() < '2026-05-02 16:15:00+00'::timestamptz);

drop policy if exists "entries can be edited" on public.lcq_pickem_entries;
create policy "entries can be edited"
on public.lcq_pickem_entries for update
using (now() < '2026-05-02 16:15:00+00'::timestamptz);

drop policy if exists "results are readable" on public.lcq_pickem_results;
create policy "results are readable"
on public.lcq_pickem_results for select
using (true);

drop policy if exists "results can be saved" on public.lcq_pickem_results;
create policy "results can be saved"
on public.lcq_pickem_results for all
using (true)
with check (true);
