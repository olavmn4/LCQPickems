# S10 MCSR Ranked LCQ Pickems

Static pickems site for Season 10 MCSR Ranked Last Chance Qualifier predictions.

Open `index.html` directly or deploy the folder to GitHub Pages. Season 10 stats are imported once from the MCSR Ranked API and cached in browser local storage because the season is over.

The page has two leaderboards: a sortable stats leaderboard for every player, and a draggable top-10 picks board. Picked players are dimmed in the stats leaderboard and every top-10 slot contributes to the final score.

## Supabase

Run `supabase.sql` in your Supabase SQL editor, then fill these constants near the top of `app.js`:

```js
const SUPABASE_URL = "https://your-project.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";
```

Until those values are configured, picks and leaderboard entries fall back to browser local storage. Once configured, every `Save` click inserts one top-10 ballot into `lcq_pickem_entries`. The visible leaderboard is then computed by loading those saved entries and scoring them against the official results.

Public visitors can submit picks, but official results are read-only from the site by default. After LCQ, add the official top 10 in Supabase with:

```sql
insert into public.lcq_pickem_results (id, results)
values ('official', '["player1", "player2", "player3", "player4", "player5", "player6", "player7", "player8", "player9", "player10"]'::jsonb)
on conflict (id) do update set
  results = excluded.results,
  updated_at = now();
```

The saved entry shape is:

```json
{
  "id": "entry-id",
  "name": "Entry name",
  "picks": ["player1", "player2", "player3", "player4", "player5", "player6", "player7", "player8", "player9", "player10"],
  "createdAt": "2026-05-02T00:00:00.000Z"
}
```
