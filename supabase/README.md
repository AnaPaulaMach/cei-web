# Supabase

Este proyecto usa Supabase solo para contenido publico editable:

- `eventos`
- `oportunidades`

Por ahora no usamos Supabase para datos personales. Censo e inscripcion al hackathon van por Google Forms y el sitio solo muestra el enlace.

Para crear las tablas, correr `schema.sql` en el editor SQL de Supabase.

Para cargar contenido inicial de ejemplo, correr `seed-public-content.sql` despues de crear las tablas. Conviene ejecutarlo una sola vez para no duplicar filas.

Para actualizar eventos y oportunidades despues de la carga inicial, ver `docs/actualizar-contenido-supabase.md`.
