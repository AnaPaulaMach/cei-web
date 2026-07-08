-- Agrega imágenes de prueba a la asamblea ya cargada.
-- Ejecutar solo si la fila "Primera asamblea CEI" ya existe en Supabase.

update eventos
set
  imagen_url = '/eventos/asamblea-primera-1.jpeg, /eventos/asamblea-primera-2.jpeg',
  link = 'https://www.instagram.com/p/DZF4IkMlAXI/?img_index=1'
where titulo = 'Primera asamblea CEI';
