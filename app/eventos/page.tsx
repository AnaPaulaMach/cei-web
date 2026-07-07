import { EventBoard } from "@/components/events/EventBoard";
import { Section } from "@/components/layout/Section";
import { mockEvents } from "@/data/mock-events";

export const metadata = {
  title: "Eventos | CEI UNSE"
};

export default function EventosPage() {
  return (
    <Section className="mx-auto max-w-7xl">
      <EventBoard events={mockEvents} title="Eventos de la CEI" />
    </Section>
  );
}
