"use client";
import { CardBody, CardContainer, CardItem } from "@/components/custom/3d-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heading } from "./Heading";

interface CardProps {
  heading: string;
  imageurl: string;
  description: string;
  read: string;
  apply: string;
}

export function Card({
  heading,
  imageurl,
  description,
  read,
  apply,
}: CardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-full sm:h-[34rem] rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white h-[3rem]"
        >
          {heading}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src={imageurl}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description.length > 200
              ? `${description.substring(0, 200)}...`
              : description}
          </CardItem>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <a href={read}>Read more →</a>
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <a href={apply}>Apply now</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

const data = [
  {
    heading: "Tech Tycoon Offline Session",
    imageurl:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/thumbnail2_J5gJ7nv.png",
    description:
      "TechTycoons is not your average event—it's a vibrant blend of innovation, education, and networking opportunities. Immerse yourself in interactive sessions and discussions led by industry experts, from coding wizards to AI aficionados. Gain valuable insights, hone your skills, and forge lifelong connections. Join us to ignite your passion for technology and propel yourself towards success!",
    read: "https://gdsc.community.dev/events/details/developer-student-clubs-institute-of-innovation-in-technology-management-delhi-presents-tech-tycoon-offline-session/",
    apply:
      "https://gdsc.community.dev/events/details/developer-student-clubs-institute-of-innovation-in-technology-management-delhi-presents-tech-tycoon-offline-session/",
  },
  {
    heading: "Tech Tycoon Reinforcement Learning",
    imageurl:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/thumbnail2_J5gJ7nv.png",
    description:
      "Discover the world of reinforcement learning through our comprehensive online program. Dive into the principles, master algorithms, and gain insights from industry experts. Unleash your potential and explore diverse career opportunities in this rapidly evolving field. Join us online on February 25th, 2024, to take your expertise to the next level.",
    read: "https://gdsc.community.dev/events/details/developer-student-clubs-institute-of-innovation-in-technology-management-delhi-presents-tech-tycoon-reinforcement-learning/",
    apply:
      "https://gdsc.community.dev/events/details/developer-student-clubs-institute-of-innovation-in-technology-management-delhi-presents-tech-tycoon-reinforcement-learning/",
  },
  {
    heading: "Tech Tycoon UI / UX Designing Session",
    imageurl:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/thumbnail2_J5gJ7nv.png",
    description:
      "Unleash your creativity and master the art of UI/UX design with our online workshop! Learn industry-standard tools and techniques, delve into user-centered design principles, and explore diverse career paths in this dynamic field. Join us on February 24th, 2024, to enhance your skills and position yourself for success in the design industry. Don't miss out—register now! 🎨💻🚀",
    read: "https://gdsc.community.dev/events/details/developer-student-clubs-institute-of-innovation-in-technology-management-delhi-presents-tech-tycoon-ui-ux-designing-session/",
    apply:
      "https://gdsc.community.dev/events/details/developer-student-clubs-institute-of-innovation-in-technology-management-delhi-presents-tech-tycoon-ui-ux-designing-session/",
  },
];

export function Cards() {
  return (
    <div className=" w-auto flex justify-center items-center space-x-4">
      {/* <Carousel>
        <CarouselContent>
          {data.map((card, idx) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card key={idx} {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}

      <Carousel className=" max-w-screen-xl">
        <CarouselContent className=" m-x-20">
          {data.map((card, idx) => (
            <CarouselItem key={idx} className="md:basis-1/1 lg:basis-1/3">
              <Card key={idx} {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
