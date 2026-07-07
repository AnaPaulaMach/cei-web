export type EventItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  sortDate?: string;
  place: string;
  category: string;
  href: string;
  cta: string;
  status: "proximo" | "pasado";
  statusLabel?: string;
  highlighted?: boolean;
};
