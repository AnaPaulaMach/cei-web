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
    'Fin de semana de desafíos, equipos, charlas, mentorías y presentaciones para crear proyectos útiles.',
    '2026-09-12 09:00:00-03',
    'FCEyT - Universidad Nacional de Santiago del Estero',
    'Hackathon',
    'proximo',
    true,
    '/hackathon',
    null
  ),
  (
    'Charla: cómo armar tu portfolio',
    'Encuentro para preparar proyectos, CV técnico, GitHub y presencia online para primeras oportunidades.',
    '2026-08-15 18:00:00-03',
    'Universidad Nacional de Santiago del Estero',
    'Charla',
    'proximo',
    false,
    '/eventos',
    null
  ),
  (
    'Censo estudiantil anual',
    'Relevamiento de necesidades, intereses y recursos de estudiantes.',
    '2026-08-01 09:00:00-03',
    'Online',
    'Censo',
    'proximo',
    false,
    '/censo',
    null
  ),
  (
    'UNSE abre sus puertas',
    'Difusión de las carreras de informática y actividades para acercar la facultad a nuevos estudiantes.',
    '2026-10-01 09:00:00-03',
    'FCEyT - Universidad Nacional de Santiago del Estero',
    'Difusión',
    'proximo',
    false,
    '/eventos',
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
    '/eventos',
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
    'Beca',
    'Convocatorias',
    '2026-07-06',
    null,
    false,
    'https://www.argentina.gob.ar/educacion/becas'
  ),
  (
    'Pasantías y trabajos junior',
    'Búsqueda de oportunidades laborales para estudiantes de informática.',
    'Pasantía',
    'Comunidad tech',
    '2026-07-05',
    null,
    false,
    'https://www.linkedin.com/jobs/'
  ),
  (
    'Recursos para cursar',
    'Apuntes, herramientas, guías y repositorios útiles para la carrera.',
    'Recurso',
    'CEI',
    '2026-07-04',
    null,
    false,
    'https://github.com/'
  ),
  (
    'Búsqueda laboral junior',
    'Espacio para compartir búsquedas de primer empleo, trainee y junior en tecnología.',
    'Trabajo',
    'Empresas y comunidad',
    '2026-07-03',
    null,
    false,
    'https://www.linkedin.com/jobs/search/?keywords=developer%20junior'
  ),
  (
    'Convocatorias tech',
    'Hackathones, competencias, llamadas a proyectos y actividades externas para participar.',
    'Convocatoria',
    'Comunidades tech',
    '2026-07-02',
    null,
    false,
    'https://devpost.com/hackathons'
  ),
  (
    'Comunidades para aprender',
    'Canales, servidores y grupos para hacer preguntas, compartir recursos y conocer pares.',
    'Comunidad',
    'CEI recomienda',
    '2026-07-01',
    null,
    false,
    'https://discord.com/'
  ),
  (
    'Donación de apuntes y material',
    'Avisos útiles de la comisión para circular material académico entre estudiantes.',
    'Aviso',
    'CEI',
    '2026-06-30',
    null,
    false,
    null
  );
