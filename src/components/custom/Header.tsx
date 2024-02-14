import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { LocalStorage } from "@/utils/localstorage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "@/utils/axios";
import { useMain } from "../main-provider";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="absolute z-50"
        >
          {active === item && (
            <div className="transform -translate-x-1/2 py-2">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className=" flex justify-center space-x-4 "
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="text-neutral-700 hover:text-black ">
      {children}
    </Link>
  );
};

export default function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const { userState } = useMain();

  const logoutHandler = () => {
    LocalStorage.removeItem("user");
    LocalStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "/api/campaigns?fields[0]=title&fields[1]=slug"
      );
      setCampaigns(res.data.data);
    })();
  }, []);

  const links = [
    {
      name: "Links",
      items: [
        { name: "Contact Us", to: "/contact-us" },
        { name: "About", to: "/about" },
      ],
    },
    {
      name: "Campaigns",
      items: campaigns.map((campaign) => ({
        name: campaign.attributes.title,
        to: `/campaigns/${campaign.attributes.slug}`,
      })),
    },
  ];

  return (
    <div
      className={cn(
        "w-screen max-w-full flex justify-between items-center rounded-full bg-white shadow-input px-6 md:px-12 py-6 md:mx-auto",
        className
      )}
    >
      <h1 className="text-lg md:text-2xl font-open-sans font-semibold">
        <Link to={"/"}>GDSC IINTM</Link>
      </h1>

      <div className="flex justify-center items-center gap-5">
        <Menu setActive={setActive}>
          {links.map((link) => (
            <MenuItem
              setActive={setActive}
              active={active}
              item={link.name}
              key={link.name}
            >
              <div className="flex flex-col space-y-4 text-sm font-montserrat">
                {link.items.map((item) => (
                  <HoveredLink key={item.name} to={item.to}>
                    {item.name}
                  </HoveredLink>
                ))}
              </div>
            </MenuItem>
          ))}
        </Menu>
        {userState.login && (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback className="bg-black/80 text-white">
                  {userState.username.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <button onClick={logoutHandler}>Logout</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}
