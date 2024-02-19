import { Card } from "flowbite-react";
import CustomCard from "./CustomCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";
import TitleSection from "./TitleSection";

export function Testimonial() {
  return (
    <div className=" flex flex-col justify-center items-center gap-20">
      <TitleSection
        title="GDSC in the Spotlight:"
        subheading="Discover why users love GDSC and how it's transforming their productivity"
        pill=""
      />
      <div className=" flex justify-center items-center gap-20">
        <CustomCard
          className="w-[500px] shrink-0s rounded-xl dark:bg-gradient-to-t dark:from-border dark:to-background "
          cardHeader={
            <div className="flex items-center gap-4 ">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>VG</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-foreground">Vinayak Goyal</CardTitle>
                <CardDescription className="dark:text-washed-purple-800">
                  Web/ Cloud lead
                </CardDescription>
              </div>
            </div>
          }
          cardContent={
            <p className="dark:text-washed-purple-800">
              GDSC has truly revolutionized the way I manage my tasks and
              projects. Its user-friendly interface and powerful features make
              staying organized effortless. I highly recommend it to anyone
              looking to boost their productivity
            </p>
          }
        ></CustomCard>
        <CustomCard
          className="w-[500px] shrink-0s rounded-xl dark:bg-gradient-to-t dark:from-border dark:to-background "
          cardHeader={
            <div className="flex items-center gap-4 ">
              <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>FM</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-foreground">
                  Faisal Mujahid
                </CardTitle>
                <CardDescription className="dark:text-washed-purple-800">
                  Management team member
                </CardDescription>
              </div>
            </div>
          }
          cardContent={
            <p className="dark:text-washed-purple-800">
              I've tried several productivity platforms before, but GDSC stands
              out above the rest. Its intuitive design coupled with robust
              functionality has significantly improved my efficiency at work.
              I'm grateful to have found such a reliable tool.
            </p>
          }
        ></CustomCard>
      </div>

      <CustomCard
        className="w-[500px] shrink-0s rounded-xl dark:bg-gradient-to-t dark:from-border dark:to-background "
        cardHeader={
          <div className="flex items-center gap-4 ">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>VA</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-foreground">Viraj Ansari</CardTitle>
              <CardDescription className="dark:text-washed-purple-800">
                Graphic team lead
              </CardDescription>
            </div>
          </div>
        }
        cardContent={
          <p className="dark:text-washed-purple-800">
            I've been using GDSC for both personal and professional tasks, and I
            couldn't be happier with the results. It's helped me streamline my
            workflow and collaborate more effectively with my team. GDSC has
            truly become an essential tool in my daily routine.
          </p>
        }
      ></CustomCard>
    </div>
  );
}
