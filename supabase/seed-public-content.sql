-- CEI web: contenido público inicial
-- Ejecutar en Supabase SQL Editor después de crear las tablas de schema.sql.
-- No inserta IDs: Supabase genera UUIDs automáticamente.

insert into eventos (
  titulo,
  descripcion,
  fecha_evento,
  lugar,
  categoria,
  estado,
  destacado,
  link,
  imagen_url
) values
  (
    'Hackathon del Día del Programador',
    'Será un fin de semana de septiembre con desafíos, equipos, charlas, mentorías y presentaciones. Fecha a definir.',
    null,
    'FCEyT - Universidad Nacional de Santiago del Estero',
    'Hackathon',
    'proximo',
    true,
    '/hackathon',
    null
  ),
  (
    'Charla: cómo armar tu portfolio',
    'Encuentro para preparar proyectos, CV técnico, GitHub y presencia online. Será en septiembre, durante la Semana del Programador.',
    null,
    'Universidad Nacional de Santiago del Estero',
    'Charla',
    'proximo',
    false,
    '/novedades?seccion=agenda',
    null
  ),
  (
    'Censo estudiantil anual',
    'El censo ya está disponible para relevar necesidades, intereses y recursos de estudiantes.',
    null,
    'Online',
    'Censo',
    'proximo',
    false,
    'https://docs.google.com/forms/d/e/1FAIpQLSdiZiuks38eTvlE1GwizUwPHhDE6IAuir5gJh8vD_EUBgnaQw/viewform?usp=sharing&ouid=109197906899692431538',
    null
  ),
  (
    'UNSE abre sus puertas',
    'La actividad es organizada por la UNSE y se realizará el 27 y 28 de agosto, de 8:30 a 18. La CEI participará en acciones para difundir las carreras de informática.',
    '2026-08-27 08:30:00-03',
    'FCEyT - Universidad Nacional de Santiago del Estero',
    'Difusión',
    'proximo',
    false,
    '/novedades?seccion=agenda',
    null
  ),
  (
    'Primera asamblea CEI',
    'Encuentro inicial para organizar la comisión, presentar ideas y abrir la participación estudiantil.',
    '2026-05-29 19:00:00-03',
    'Salón Azul - FCEyT',
    'Asamblea',
    'pasado',
    false,
    'https://www.instagram.com/p/DZF4IkMlAXI/?img_index=1',
    '/eventos/asamblea-primera-1.jpeg, /eventos/asamblea-primera-2.jpeg'
  );

insert into oportunidades (
  id,
  titulo,
  descripcion,
  categoria,
  fuente,
  fecha_publicacion,
  fecha_limite,
  destacado,
  link
) values
  (
    'a4fd405f-f969-4b18-8ca4-7dd006ed6f68',
    'Beca Santander Alumnos de Grado Argentina 2026',
    'Ayuda económica de ARS 400.000 en un único pago. Para estudiantes de la UNSE que hayan aprobado el primer año, tengan promedio mínimo 6 y al menos dos materias aprobadas en 2025. La documentación se presenta en el Área Becas de la UNSE hasta el 5 de agosto.',
    'Beca',
    'Banco Santander Argentina · UNSE',
    '2026-05-28',
    '2026-07-30',
    true,
    'https://app.santanderopenacademy.com/es/application/new/6a05d15c4370f135665e34fa'
  ),
  (
    '4f2fe17a-f9b8-46bc-bfce-1836d90997b8',
    'Buscador de oportunidades Santander Open Academy',
    'Explorá convocatorias abiertas y próximas de becas, cursos y programas para estudiantes.',
    'Beca',
    'Santander Open Academy',
    '2026-07-17',
    null,
    false,
    'https://app.santanderopenacademy.com/es/program/search?status=SOON&status=OPEN'
  )
on conflict (id) do nothing;
