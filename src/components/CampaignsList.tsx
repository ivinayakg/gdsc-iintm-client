import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { API_BASE_URL } from "@/utils/axios";
import { Link } from "react-router-dom";

export default function CampaignsList({ campaigns }: { campaigns: any[] }) {
  return (
    <div className="p-4">
      {campaigns.map((campaign) => {
        let thumbnailImage =
          API_BASE_URL +
          campaign.attributes.bannerImage.data.attributes.formats.thumbnail.url;

        return (
          <Card key={campaign.id}>
            <CardHeader className="flex flex-col justify-center items-start gap-3">
              <CardTitle>{campaign.attributes.title}</CardTitle>
              <img
                src={thumbnailImage}
                alt="thumbnail"
                className="w-full object-cover object-center"
              />
              <CardDescription>{campaign.attributes.overview}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link
                to={"/campaigns/" + campaign.attributes.slug}
                className={`px-8 py-2 rounded-md bg-theme-colors-blue text-white`}
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
