import EventCard from "./custom/EventCard";

export default function EventsList({ events }: { events: any[] }) {
  return (
    <div className="flex flex-col justify-start items-center gap-4 mt-4 md:flex-row md:flex-wrap w-full p-2 md:gap-6">
      {events &&
        events.map((event) => <EventCard key={event.id} event={event} />)}
    </div>
  );
}
