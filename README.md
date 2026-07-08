# CEI Web

Sitio oficial de la Comisión de Estudiantes de Informática (CEI - UNSE).

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase para contenido público
- Google Forms para formularios con datos personales
- Deploy previsto en Vercel

## Estilo

La dirección visual es un escritorio retro de informática universitaria inspirado en Windows XP, Minecraft, pixel art, terminales y ventanas clásicas, sin perder accesibilidad ni claridad.

## Colaboracion y sugerencias

El repositorio es público para que estudiantes y personas interesadas puedan ver cómo está construido el sitio.

Por ahora, si querés sugerir cambios, reportar un problema o colaborar, contactate primero con la Comisión:

- Mail: comisionlsiafines@gmail.com
- Instagram: https://www.instagram.com/cei.unse/
- Canal de WhatsApp: https://whatsapp.com/channel/0029Vb7pCRx2kNFuudDotL3R

Si la propuesta avanza, la administración del repositorio puede invitar colaboradores aprobados o recibir un pull request. No subas datos personales, claves, capturas privadas ni información sensible al repositorio.

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

Supabase se usa solo para tablas públicas de lectura:

- `eventos`
- `oportunidades`

El SQL esta en `supabase/schema.sql`.

Los formularios con datos personales, como censo e inscripción al hackathon, se enlazan con Google Forms. Los placeholders de esos enlaces están en `data/form-links.ts`.
