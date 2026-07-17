-- Actualización de la agenda pública de julio de 2026.
-- Ejecutar una sola vez en Supabase SQL Editor.
-- Solo modifica filas existentes; no crea eventos duplicados.

update eventos
set
  descripcion = 'Será un fin de semana de septiembre con desafíos, equipos, charlas, mentorías y presentaciones. Fecha a definir.',
  fecha_evento = null,
  lugar = 'FCEyT - Universidad Nacional de Santiago del Estero',
  categoria = 'Hackathon',
  estado = 'proximo',
  destacado = true,
  link = '/hackathon'
where lower(titulo) like 'hackathon%programador%';

update eventos
set
  descripcion = 'Encuentro para preparar proyectos, CV técnico, GitHub y presencia online. Será en septiembre, durante la Semana del Programador.',
  fecha_evento = null,
  lugar = 'Universidad Nacional de Santiago del Estero',
  categoria = 'Charla',
  estado = 'proximo',
  link = '/novedades?seccion=agenda'
where lower(titulo) like 'charla:%portfolio%';

update eventos
set
  descripcion = 'El censo ya está disponible para relevar necesidades, intereses y recursos de estudiantes.',
  fecha_evento = null,
  lugar = 'Online',
  categoria = 'Censo',
  estado = 'proximo',
  link = 'https://docs.google.com/forms/d/e/1FAIpQLSdiZiuks38eTvlE1GwizUwPHhDE6IAuir5gJh8vD_EUBgnaQw/viewform?usp=sharing&ouid=109197906899692431538'
where lower(titulo) = 'censo estudiantil anual';

update eventos
set
  descripcion = 'La actividad es organizada por la UNSE y se realizará el 27 y 28 de agosto, de 8:30 a 18. La CEI participará en acciones para difundir las carreras de informática.',
  fecha_evento = '2026-08-27 08:30:00-03',
  lugar = 'Sede Central de la Universidad Nacional de Santiago del Estero',
  categoria = 'Difusión',
  estado = 'proximo',
  link = '/novedades?seccion=agenda'
where lower(titulo) = 'unse abre sus puertas';

update eventos
set link = 'https://www.instagram.com/p/DZF4IkMlAXI/?img_index=1'
where lower(titulo) = 'primera asamblea cei';
