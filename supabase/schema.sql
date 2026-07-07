-- CEI web: Supabase minimo
-- Solo contenido publico editable desde Supabase.
-- Formularios con datos personales (censo, hackathon, contacto) quedan fuera:
-- se enlazan con Google Forms u otros servicios externos.

create table if not exists eventos (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  titulo text not null,
  descripcion text,
  fecha_evento timestamptz,
  lugar text,
  categoria text,
  estado text default 'proximo',
  destacado boolean default false,
  link text,
  imagen_url text
);

create table if not exists oportunidades (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  titulo text not null,
  descripcion text,
  categoria text,
  fuente text,
  fecha_publicacion date default current_date,
  fecha_limite date,
  destacado boolean default false,
  link text,
  imagen_url text
);

alter table eventos enable row level security;
alter table oportunidades enable row level security;

grant usage on schema public to anon;
grant select on public.eventos to anon;
grant select on public.oportunidades to anon;

drop policy if exists "eventos lectura publica" on eventos;
create policy "eventos lectura publica" on eventos
  for select to anon using (true);

drop policy if exists "oportunidades lectura publica" on oportunidades;
create policy "oportunidades lectura publica" on oportunidades
  for select to anon using (true);
