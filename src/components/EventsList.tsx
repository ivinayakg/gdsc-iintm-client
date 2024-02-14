import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { API_BASE_URL } from "@/utils/axios";
import { Link } from "react-router-dom";

export default function EventsList({ events }: { events: any[] }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-4 md:flex-row md:flex-wrap">
      {events &&
        events.map((event) => {
          let thumbnailImage =
            event.attributes.bannerImage.data &&
            API_BASE_URL +
              event.attributes.bannerImage.data.attributes.formats.thumbnail
                .url;

          return (
            <Card key={event.id} className="w-[350px] h-[325px]">
              <CardHeader className="flex flex-col justify-center items-start gap-3">
                <CardTitle>{event.attributes.title}</CardTitle>
                {event.attributes.bannerImage.data && (
                  <div
                    className="w-full h-[100px] bg-center bg-cover bg-no-repeat rounded-md"
                    style={{ backgroundImage: `url(${thumbnailImage})` }}
                  ></div>
                )}
                <CardDescription>
                  {(event as any)?.attributes.overview.length &&
                    (event as any).attributes.overview.slice(0, 200) + "..."}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Link
                  to={"/events/" + event.id}
                  className={`px-8 py-2 rounded-md bg-theme-colors-green text-white`}
                >
                  Read More
                </Link>
              </CardFooter>
            </Card>
          );
        })}
    </div>
  );
}
