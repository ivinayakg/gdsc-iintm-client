import { API_BASE_URL } from "@/utils/axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function EventCard({ event }: { event: any }) {
  let thumbnailImage =
    event.attributes.bannerImage.data &&
    API_BASE_URL +
      event.attributes.bannerImage.data.attributes.url;

  const date = new Date((event as any)?.attributes.startTime);
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
    timeZone: "Asia/Kolkata",
  };
  const formattedDate = date
  // @ts-ignore
    .toLocaleDateString("en-IN", options)
    .replace(/(\d+)(st|nd|rd|th)/, "$1<sup>$2</sup>");

  return (
    <Card
      placeholder={"event_card"}
      className="w-full md:max-w-[24rem] overflow-hidden"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
        placeholder={"event_card_header"}
      >
        {event.attributes.bannerImage.data && (
          <img
            src={thumbnailImage}
            alt={event.attributes.title}
            className="w-full object-cover h-[180px] object-left"
          />
        )}
      </CardHeader>
      <CardBody placeholder={"event_card_body"}>
        <Typography
          variant="h4"
          color="blue-gray"
          placeholder={"event heading"}
          className="font-open-sans"
        >
          {event.attributes.title}
        </Typography>
        <Typography
          placeholder={"event description"}
          variant="lead"
          color="gray"
          className="mt-3 font-normal font-montserrat"
        >
          {(event as any)?.attributes.overview.length &&
            (event as any).attributes.overview.slice(0, 200) + "..."}
        </Typography>
      </CardBody>
      <CardFooter
        placeholder="card_footer"
        className="flex items-center justify-between mt-auto"
      >
        <Link
          to={"/events/" + event.id}
          className={`px-8 py-2 rounded-md bg-theme-colors-green text-white font-montserrat`}
        >
          Read More
        </Link>
        <Typography placeholder={"card_footer_title"} className="font-normal font-montserrat">
          {formattedDate}
        </Typography>
      </CardFooter>
    </Card>
  );
}
