# Actualizar contenido publico en Supabase

El sitio lee desde Supabase solo contenido publico:

- `eventos`: tablero de inicio y pagina `/eventos`.
- `oportunidades`: bloque de inicio y pagina `/oportunidades`.

Los formularios con datos personales, como censo e inscripcion al hackathon, van por Google Forms. No cargar respuestas, padrones, mails personales ni datos sensibles en estas tablas publicas.

## Flujo recomendado

1. Entrar a Supabase con la cuenta de la comision.
2. Ir a Table Editor.
3. Editar o crear filas en `eventos` y `oportunidades`.
4. Guardar.
5. Revisar el sitio publicado o local.

No hace falta tocar codigo para cambiar fechas, titulos, links, descripciones o destacados.

## Campos de eventos

- `titulo`: nombre visible del evento.
- `descripcion`: resumen corto.
- `fecha_evento`: fecha y hora del evento.
- `lugar`: lugar visible.
- `categoria`: Hackathon, Charla, Congreso, Difusion, Asamblea, Censo, Aviso.
- `estado`: `proximo` o `pasado`.
- `destacado`: `true` para que aparezca primero en el tablero.
- `link`: ruta interna, como `/hackathon`, `/censo`, `/eventos`, o link externo.

## Campos de oportunidades

- `titulo`: nombre visible.
- `descripcion`: resumen corto.
- `categoria`: Curso, Beca, Pasantia, Trabajo, Convocatoria, Recurso, Comunidad, Aviso.
- `fuente`: organizacion o fuente.
- `fecha_publicacion`: fecha de publicacion.
- `fecha_limite`: opcional.
- `destacado`: `true` para priorizarla.
- `link`: enlace externo o interno.

## Prompt reutilizable

Pegale esto a Codex o a un asistente cuando quieras transformar texto suelto en filas para Supabase:

```text
Necesito cargar contenido publico para el sitio de la Comision de Estudiantes de Informatica de la UNSE.

Converti la informacion que te paso en filas para Supabase, usando estas tablas:

Tabla eventos:
- titulo
- descripcion
- fecha_evento
- lugar
- categoria
- estado: proximo o pasado
- destacado: true o false
- link

Tabla oportunidades:
- titulo
- descripcion
- categoria: Curso, Beca, Pasantia, Trabajo, Convocatoria, Recurso, Comunidad o Aviso
- fuente
- fecha_publicacion
- fecha_limite
- destacado: true o false
- link

Reglas:
- No inventes datos importantes. Si falta fecha, link o lugar, usa null o "A confirmar" segun corresponda.
- No incluyas datos personales ni respuestas de formularios.
- Dame el resultado como SQL INSERT listo para pegar en Supabase SQL Editor.
- No incluyas la columna id, porque Supabase genera UUID automaticamente.
- Si hay riesgo de duplicar contenido, avisame antes.

Contenido a convertir:
[PEGAR ACA EVENTOS U OPORTUNIDADES]
```

## Seguridad

- No subir `.env.local`, claves de Supabase, service role keys ni capturas del panel con secretos.
- La `anon key` puede existir en `.env.local`, pero no debe versionarse.
- Para inserts masivos, usar SQL Editor con una cuenta autorizada o el Table Editor.
- El front publico solo debe leer `eventos` y `oportunidades`.
