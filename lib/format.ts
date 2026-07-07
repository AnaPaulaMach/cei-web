export function formatDateLabel(value: string | null | undefined) {
  if (!value) {
    return "Fecha a confirmar";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "Fecha a confirmar";
  }

  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
}

export function formatShortDateLabel(value: string | null | undefined) {
  if (!value) {
    return undefined;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "medium"
  }).format(date);
}
