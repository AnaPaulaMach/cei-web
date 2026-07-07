# CEI Web

Sitio oficial de la Comision de Estudiantes de Informatica (CEI - UNSE).

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase para contenido publico
- Google Forms para formularios con datos personales
- Deploy previsto en Vercel

## Estilo

La direccion visual es **CEI OS**: un escritorio retro de informatica universitaria inspirado en Windows XP, Minecraft, pixel art, terminales y ventanas clasicas, sin perder accesibilidad ni claridad.

## Primeros pasos

```bash
npm install
npm run dev
```

Completar `.env.local` con:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Usar `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` con la Publishable key actual de Supabase. `NEXT_PUBLIC_SUPABASE_ANON_KEY` queda solo como compatibilidad si el proyecto usa claves legacy.

## Datos

Supabase se usa solo para tablas publicas de lectura:

- `eventos`
- `oportunidades`

El SQL esta en `supabase/schema.sql`.

Censo e inscripcion al hackathon se enlazan con Google Forms. Los placeholders de esos enlaces estan en `data/form-links.ts`.
