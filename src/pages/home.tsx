import EventsList from "@/components/EventsList";
import HeroSection from "@/components/HeroSection";
import axios from "@/utils/axios";
import { useEffect, useState } from "react";

// import { Cards } from "@/components/custom/Cards";
import { Heading } from "@/components/custom/Heading";
// import { Testimonials } from "@/components/custom/Testimonials";
import { Testimonial } from "@/components/custom/Testimonial";

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
      {/* <div className="flex flex-col justify-center items-center w-full px-4 py-6 md:p-12">
        <h1 className="font-open-sans text-3xl md:text4xl font-semibold">Upcoming Events</h1>
        <div className="w-full">

        </div>
      </div> */}
      <div className=" flex justify-center items-center">
        <Heading />
      </div>
      <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {/* <Cards /> */}
        <EventsList events={events} />
      </div>
      {/* <Testimonials /> */}
      <Testimonial />
    </>
  );
}





