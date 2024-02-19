import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import AuthComponent from "@/utils/auth";
import Header from "@/components/custom/Header";
import { MainProvider } from "@/components/main-provider";
import Campaigns from "@/pages/campaigns";
import CampaignBrief from "@/pages/campaignBrief";
import EventBrief from "@/pages/eventBrief";
import AboutPage from "@/pages/about";
import Contact from "@/pages/Contact";
import Footer from "@/components/custom/Footer";

function Main() {
  return (
    <MainProvider>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </MainProvider>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/campaigns",
          element: <Campaigns />,
        },
        {
          path: "/campaigns/:campaignSlug",
          element: <CampaignBrief />,
        },
        {
          path: "/events/:eventId",
          element: <EventBrief />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact-us",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/auth/google/callback",
      element: <AuthComponent />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
