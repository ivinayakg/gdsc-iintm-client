import EventsList from "@/components/EventsList";
import HeroSection from "@/components/HeroSection";
import axios from "@/utils/axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/events?populate[0]=bannerImage");
      setEvents(res.data?.data);
    })();
  }, []);

  console.log(events);

  return (
    <>
      <div className="w-screen h-[80vh] md:h-[95vh]">
        <HeroSection />
      </div>
      <div className="flex flex-col justify-center items-center w-full px-4 py-6">
        <h1 className="font-open-sans text-3xl md:text4xl font-semibold">Upcoming Events</h1>
        <div className="w-full">
          <EventsList events={events} />
        </div>
      </div>
    </>
  );
}
