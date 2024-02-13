import CampaignsList from "@/components/CampaignsList";
import axios from "@/utils/axios";
import { useEffect, useState } from "react";

export default function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "/api/campaigns?populate[0]=bannerImage&fields[0]=title&fields[1]=slug&fields[2]=overview"
      );
      setCampaigns(res.data.data);
    })();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-open-sans font-semibold text-2xl">Campaigns</h1>
      <CampaignsList campaigns={campaigns} />
    </div>
  );
}
