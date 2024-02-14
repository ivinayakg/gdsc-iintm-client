import EventsList from "@/components/EventsList";
import axios, { API_BASE_URL } from "@/utils/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import RichTextRenderer from "@/components/RickTextRender";

export default function CampaignBrief() {
  const [campaign, setCampaign] = useState(null);
  const { campaignSlug } = useParams();

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `/api/campaigns?populate[0]=events&populate[events][populate]=bannerImage&populate[bannerImage]=*&filters[slug][$eq]=${campaignSlug}`
      );
      setCampaign(res.data.data[0]);
    })();
  }, []);

  const renderedContent = campaign && (
    <RichTextRenderer content={(campaign as any)?.attributes.description} />
  );

  const bannerImage =
    campaign &&
    API_BASE_URL +
      (campaign as any)?.attributes.bannerImage.data.attributes.formats.large
        .url;

  return (
    <div className="flex flex-col justify-center items-start gap-2">
      {campaign && (
        <img
          src={bannerImage ?? ""}
          alt="decoration"
          className="w-screen object-contain md:w-8/12 md:mx-auto md:rounded-md"
        />
      )}

      <div className="flex flex-col justify-center items-start p-4 md:p-20 mt-4 md:mt-8 gap-5 w-screen">
        <div className="flex flex-col justify-center items-start gap-1">
          <h1 className="text-black text-3xl font-bold font-open-sans md:text-5xl">
            {(campaign as any)?.attributes.title}
          </h1>
          <p className="font-montserrat text-base">
            Follow us on our social media handels
          </p>
          <div className="flex justify-start items-center gap-3">
            <a href="">
              <FaInstagram className="text-2xl text-black/80" />
            </a>
            <a href="">
              <FaLinkedinIn className="text-2xl text-black/80" />
            </a>
            <a href="">
              <FaEnvelope className="text-2xl text-black/80" />
            </a>
          </div>
        </div>

        <div className="border-2 border-theme-colors-yellow rounded-lg p-4 md:p-8 w-full">
          {renderedContent}
        </div>
        <span className="w-full h-[0.25px] bg-black/80"></span>
        <div className="flex flex-col justify-center items-start">
          <h2 className="text-black text-2xl font-bold font-open-sans">
            Events
          </h2>
          <p className="font-montserrat">
            Events which will be hosted by GDSC IINTm under the{" "}
            {(campaign as any)?.attributes.title}
          </p>
          <EventsList events={(campaign as any)?.attributes.events.data} />
        </div>
      </div>
    </div>
  );
}
