import axios, { API_BASE_URL } from "@/utils/axios";
import RichTextRenderer from "@/components/RickTextRender";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { useMain } from "@/components/main-provider";

export default function EventBrief() {
  const { eventId } = useParams();
  const [eventData, setEventData] = useState(null);
  const { userState } = useMain();
  const [registered, setRegistered] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `/api/events?filters[id][$eq]=${eventId}&populate=*`
      );
      setEventData(res.data.data[0]);
    })();
  }, [userState]);

  useEffect(() => {
    if (!eventData || !userState) return;
    (async () => {
      const res = await axios.get(
        `/api/user-registers?filters[event][id][$eq]=${eventId}&filters[user][$eq]=${userState.id}`
      );
      setRegistered(res.data.data[0]);
    })();
  }, [eventData]);

  const renderedContent = eventData && (
    <RichTextRenderer content={(eventData as any)?.attributes.description} />
  );

  const bannerImage =
    eventData &&
    API_BASE_URL +
      (eventData as any).attributes.bannerImage.data.attributes.formats.large
        .url;

  function loginHandler() {
    const redirectUrl = API_BASE_URL + "/api/connect/google/init";
    window.location.href = redirectUrl;
  }

  async function registerHandler() {
    let campaignId = (eventData as any)?.attributes.campaign.data.id;
    let eventId = (eventData as any)?.id;
    let user = userState.id;

    const register = {
      data: {
        user: String(user),
        event: eventId,
        campaign: campaignId,
      },
    };

    try {
      const res = await axios.post("/api/user-registers", register, {
        headers: { Authorization: `Bearer ${userState.token}` },
      });
      if (res.status === 200) {
        navigate(0);
      }
    } catch (err) {
      console.error(err);
    }
  }

  let actionButton = <></>;
  if ((eventData as any)?.attributes.community_platform_login) {
    actionButton = (
      <a href={(eventData as any)?.community_register_link}>
        <button className="py-2 px-8 rounded-lg bg-theme-colors-blue text-white">
          Register At Community Platform
        </button>
      </a>
    );
  } else if (!userState.login) {
    actionButton = (
      <button
        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg bg-[linear-gradient(110deg,#fefefe,45%,#dcdcdc,55%,#fefefe)] bg-[length:200%_100%] px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 border"
        onClick={loginHandler}
      >
        Sign In with Google
      </button>
    );
  } else {
    if (registered) {
      actionButton = (
        <button className="py-2 px-8 rounded-lg bg-theme-colors-green text-white">
          Already Registered For {(eventData as any)?.attributes.title} Event
        </button>
      );
    } else {
      actionButton = (
        <button
          className="py-2 px-8 rounded-lg bg-theme-colors-blue text-white"
          onClick={registerHandler}
        >
          Register For {(eventData as any)?.attributes.title} Event
        </button>
      );
    }
  }

  return (
    <div className="flex flex-col justify-center items-start gap-2">
      {bannerImage && (
        <img
          src={bannerImage}
          alt="decoration"
          className="w-screen object-contain md:w-8/12 md:mx-auto md:rounded-md"
        />
      )}

      <div className="flex flex-col justify-center items-start p-4 md:p-20 mt-4 md:mt-8 gap-5 w-screen">
        <div className="flex flex-col justify-center items-start gap-1">
          <h1 className="text-black text-3xl font-bold font-open-sans md:text-5xl">
            {(eventData as any)?.attributes.title}
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

        <div className="border-2 border-theme-colors-blue rounded-lg p-4 md:p-8 w-full">
          {renderedContent}
        </div>

        <span className="w-full h-[0.25px] bg-black/80"></span>
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-black text-2xl font-bold font-open-sans">
            Register
          </h2>
          {actionButton}
        </div>
      </div>
    </div>
  );
}
