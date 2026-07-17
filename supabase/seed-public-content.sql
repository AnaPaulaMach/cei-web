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
    'Ruta web para portfolio',
    'Recursos para practicar HTML, CSS, JavaScript y publicar proyectos propios.',
    'Curso',
    'CEI recomienda',
    '2026-07-07',
    null,
    true,
    'https://developer.mozilla.org/es/'
  ),
  (
    'Becas y convocatorias',
    'Espacio para publicar becas, programas y oportunidades académicas.',
    'Becas',
    'Convocatorias',
    '2026-07-06',
    null,
    false,
    'https://www.argentina.gob.ar/educacion/becas'
  ),
  (
    'Prácticas y trabajos junior',
    'Búsqueda de prácticas, pasantías y oportunidades laborales para estudiantes de informática.',
    'Prácticas',
    'Comunidad tech',
    '2026-07-05',
    null,
    false,
    'https://www.linkedin.com/jobs/'
  ),
  (
    'Búsqueda laboral junior',
    'Espacio para compartir búsquedas de primer empleo, trainee y junior en tecnología.',
    'Trabajo',
    'Empresas y comunidad',
    '2026-07-04',
    null,
    false,
    'https://www.linkedin.com/jobs/search/?keywords=developer%20junior'
  );
