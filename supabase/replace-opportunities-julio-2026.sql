begin;

delete from public.oportunidades
where id in (
  '80f13e96-6321-4fd5-8e10-a5a9a19162a9',
  '4a2257ad-453a-4190-b315-f45388165d5a',
  '0779b0dd-6886-42ab-9f96-0ce3124be15f',
  'da86b8d1-b5cc-41fc-b64a-88fcd2af584d',
  '527e3346-9f1e-4376-8309-082c9f1e8266',
  '0d1eabfb-0132-4fb7-a0e6-749162dee325',
  '8fda4518-5d8e-46d4-94aa-2d64669ae684',
  'd8002175-bfad-4fca-bc3f-d916057ce0d2'
);

insert into public.oportunidades (
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
on conflict (id) do update set
  titulo = excluded.titulo,
  descripcion = excluded.descripcion,
  categoria = excluded.categoria,
  fuente = excluded.fuente,
  fecha_publicacion = excluded.fecha_publicacion,
  fecha_limite = excluded.fecha_limite,
  destacado = excluded.destacado,
  link = excluded.link;

commit;
