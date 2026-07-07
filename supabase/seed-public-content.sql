-- CEI web: contenido publico inicial
-- Ejecutar en Supabase SQL Editor despues de crear las tablas de schema.sql.
-- No inserta IDs: Supabase genera UUIDs automaticamente.

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
    'Hackathon del Dia del Programador',
    'Fin de semana de desafios, equipos, charlas, mentorias y presentaciones para crear proyectos utiles.',
    '2026-09-12 09:00:00-03',
    'FCEyT - Universidad Nacional de Santiago del Estero',
    'Hackathon',
    'proximo',
    true,
    '/hackathon',
    null
  ),
  (
    'Charla: como armar tu portfolio',
    'Encuentro para preparar proyectos, CV tecnico, GitHub y presencia online para primeras oportunidades.',
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
    'Difusion de las carreras de informatica y actividades para acercar la facultad a nuevos estudiantes.',
    '2026-10-01 09:00:00-03',
    'FCEyT - Universidad Nacional de Santiago del Estero',
    'Difusion',
    'proximo',
    false,
    '/eventos',
    null
  ),
  (
    'Primera asamblea CEI',
    'Encuentro inicial para organizar la comision, presentar ideas y abrir la participacion estudiantil.',
    '2026-05-29 19:00:00-03',
    'Salon Azul - FCEyT',
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
    'Espacio para publicar becas, programas y oportunidades academicas.',
    'Beca',
    'Convocatorias',
    '2026-07-06',
    null,
    false,
    'https://www.argentina.gob.ar/educacion/becas'
  ),
  (
    'Pasantias y trabajos junior',
    'Busqueda de oportunidades laborales para estudiantes de informatica.',
    'Pasantia',
    'Comunidad tech',
    '2026-07-05',
    null,
    false,
    'https://www.linkedin.com/jobs/'
  ),
  (
    'Recursos para cursar',
    'Apuntes, herramientas, guias y repositorios utiles para la carrera.',
    'Recurso',
    'CEI',
    '2026-07-04',
    null,
    false,
    'https://github.com/'
  ),
  (
    'Busqueda laboral junior',
    'Espacio para compartir busquedas de primer empleo, trainee y junior en tecnologia.',
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
    'Donacion de apuntes y material',
    'Avisos utiles de la comision para circular material academico entre estudiantes.',
    'Aviso',
    'CEI',
    '2026-06-30',
    null,
    false,
    null
  );
