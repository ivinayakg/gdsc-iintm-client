import { API_BASE_URL } from "@/utils/axios";
import ImagesSlider from "./custom/ImageSlider";
import TypewriterEffectSmooth from "./custom/TypeWritter";
import { useMain } from "./main-provider";
import { useNavigate } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function HeroSection() {
  const { userState } = useMain();

  const words = [
    {
      text: "Build",
      className: "font-montserrat text-base md:text-3xl xl:text-5xl text-white",
    },
    {
      text: "an",
      className: "font-montserrat text-base md:text-3xl xl:text-5xl text-white",
    },
    {
      text: "awesome",
      className: "font-montserrat text-base md:text-3xl xl:text-5xl text-white",
    },
    {
      text: "career",
      className: "font-montserrat text-base md:text-3xl xl:text-5xl text-white",
    },
    {
      text: "with",
      className: "font-montserrat text-base md:text-3xl xl:text-5xl text-white",
    },
    {
      text: "G",
      className:
        "font-montserrat text-base md:text-3xl xl:text-5xl text-[#4285f4]",
    },
    {
      text: "D",
      className:
        "font-montserrat text-base md:text-3xl xl:text-5xl text-[#ea4335] -ml-1 lg:-ml-3",
    },
    {
      text: "S",
      className:
        "font-montserrat text-base md:text-3xl xl:text-5xl text-[#34a853] -ml-1 lg:-ml-3",
    },
    {
      text: "C",
      className:
        "font-montserrat text-base md:text-3xl xl:text-5xl text-[#f9ab00] -ml-1 lg:-ml-3",
    },
    {
      text: "IINTM.",
      className: "text-base md:text-3xl xl:text-5xl text-white font-montserrat",
    },
  ];

  const navigate = useNavigate();

  function loginHandler() {
    const redirectUrl = API_BASE_URL + "/api/connect/google/init";
    window.location.href = redirectUrl;
  }
  function redirectCampaigns() {
    navigate("/campaigns");
  }

  return (
    <>
      <ImagesSlider images={images} overlay={true}>
        <div className="absolute z-50 flex flex-col justify-center items-center">
          <p className="text-sm md:text-lg font-montserrat text-white">
            Opportunities you can never imagine.
          </p>
          <TypewriterEffectSmooth
            words={words}
            className="text-white"
            cursorClassName="bg-[#4285f4] h-5 md:h-8 xl:h-12"
          />
          <button
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg bg-[linear-gradient(110deg,#fefefe,45%,#dcdcdc,55%,#fefefe)] bg-[length:200%_100%] px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={userState.login ? redirectCampaigns : loginHandler}
          >
            {userState.login ? "Ongoing Campaigns" : "Sign In with Google"}
          </button>
        </div>
      </ImagesSlider>
    </>
  );
}
