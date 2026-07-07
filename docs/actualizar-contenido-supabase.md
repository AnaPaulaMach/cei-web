# Actualizar contenido público en Supabase

El sitio lee desde Supabase solo contenido público:

- `eventos`: tablero de inicio y página `/eventos`.
- `oportunidades`: bloque de inicio y página `/oportunidades`.

Los formularios con datos personales, como censo e inscripción al hackathon, van por Google Forms. No cargar respuestas, padrones, mails personales ni datos sensibles en estas tablas públicas.

## Flujo recomendado

1. Entrar a Supabase con la cuenta de la comisión.
2. Ir a Table Editor.
3. Editar o crear filas en `eventos` y `oportunidades`.
4. Guardar.
5. Revisar el sitio publicado o local.

No hace falta tocar código para cambiar fechas, títulos, links, descripciones o destacados.

## Campos de eventos

- `titulo`: nombre visible del evento.
- `descripcion`: resumen corto.
- `fecha_evento`: fecha y hora del evento.
- `lugar`: lugar visible.
- `categoria`: Hackathon, Charla, Congreso, Difusión, Asamblea, Censo, Aviso.
- `estado`: `proximo` o `pasado`.
- `destacado`: `true` para que aparezca primero en el tablero.
- `link`: ruta interna, como `/hackathon`, `/censo`, `/eventos`, o link externo.
- `imagen_url`: opcional. Puede ser una URL o varias URLs separadas por coma o salto de línea.

## Campos de oportunidades

- `titulo`: nombre visible.
- `descripcion`: resumen corto.
- `categoria`: Curso, Beca, Pasantía, Trabajo, Convocatoria, Recurso, Comunidad, Aviso.
- `fuente`: organización o fuente.
- `fecha_publicacion`: fecha de publicación.
- `fecha_limite`: opcional.
- `destacado`: `true` para priorizarla.
- `link`: enlace externo o interno.
- `imagen_url`: opcional. El sitio puede usarla cuando se active visualmente para oportunidades.

## Prompt reutilizable

Pegale esto a Codex o a un asistente cuando quieras transformar texto suelto en filas para Supabase:

```text
Necesito cargar contenido público para el sitio de la Comisión de Estudiantes de Informática de la UNSE.

Convertí la información que te paso en filas para Supabase, usando estas tablas:

Tabla eventos:
- titulo
- descripcion
- fecha_evento
- lugar
- categoria
- estado: proximo o pasado
- destacado: true o false
- link
- imagen_url: opcional, una URL o varias separadas por coma

Tabla oportunidades:
- titulo
- descripcion
- categoria: Curso, Beca, Pasantía, Trabajo, Convocatoria, Recurso, Comunidad o Aviso
- fuente
- fecha_publicacion
- fecha_limite
- destacado: true o false
- link
- imagen_url: opcional

Reglas:
- No inventes datos importantes. Si falta fecha, link o lugar, usa null o "A confirmar" según corresponda.
- No incluyas datos personales ni respuestas de formularios.
- Dame el resultado como SQL INSERT listo para pegar en Supabase SQL Editor.
- No incluyas la columna id, porque Supabase genera UUID automáticamente.
- Si hay riesgo de duplicar contenido, avísame antes.

Contenido a convertir:
[PEGAR ACA EVENTOS U OPORTUNIDADES]
```

## Seguridad

- No subir `.env.local`, claves de Supabase, service role keys ni capturas del panel con secretos.
- La `anon key` puede existir en `.env.local`, pero no debe versionarse.
- Para inserts masivos, usar SQL Editor con una cuenta autorizada o el Table Editor.
- El front público solo debe leer `eventos` y `oportunidades`.
