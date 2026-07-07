# Supabase

Este proyecto usa Supabase solo para contenido público editable:

- `eventos`
- `oportunidades`

Por ahora no usamos Supabase para datos personales. Censo e inscripción al hackathon van por Google Forms y el sitio solo muestra el enlace.

Para crear las tablas, correr `schema.sql` en el editor SQL de Supabase.

Para cargar contenido inicial de ejemplo, correr `seed-public-content.sql` después de crear las tablas. Conviene ejecutarlo una sola vez para no duplicar filas.

Para actualizar eventos y oportunidades después de la carga inicial, ver `docs/actualizar-contenido-supabase.md`.

Si la asamblea ya estaba cargada antes de agregar imágenes, correr `update-asamblea-images.sql` para asociarle las fotos de prueba.
