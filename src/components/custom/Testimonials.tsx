"use client";

// import React, { useEffect, useState } from "react";
// import { InfiniteMovingCards } from "@/components/custom/infinite-moving-cards";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import TitleSection from "./TitleSection";
import CustomCard from "./CustomCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardDescription, CardTitle } from "@/components/ui/card";

export function Testimonials() {
  return (
    // <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    //   <InfiniteMovingCards
    //     items={testimonials}
    //     direction="right"
    //     speed="slow"
    //   />
    // </div>

    <section className="relative" id="testimonial">
      <div className="w-full blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple/50 -z-100 top-56 " />
      <div className="mt-20 px-4 sm:px-6  flex flex-col overflow-x-hidden overflow-visible ">
        <TitleSection
          title="Trusted by all"
          subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
          pill=""
        />
        {[...Array(1)].map((arr, i) => (
          <div
            key={i}
            className={twMerge(
              clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                "flex-row-reverse": i === 1,
                "animate-[slide_250s_linear_infinite]": true,
                "animate-[slide_250s_linear_infinite_reverse]": i === 1,
                "ml-[100vw]": i === 1,
              }),
              "hover:paused"
            )}
          >
            {testimonials.map((testimonial, i) => (
              <CustomCard
                key={testimonial.name}
                className="w-[500px] shrink-0s rounded-xl dark:bg-gradient-to-t dark:from-border dark:to-background "
                cardHeader={
                  <div className="flex items-center gap-4 ">
                    <Avatar>
                      <AvatarImage src={`/avatars/${i + 1}.png`} />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-foreground">
                        {testimonial.name}
                      </CardTitle>
                      <CardDescription className="dark:text-washed-purple-800">
                        {testimonial.name.toLocaleLowerCase()}
                      </CardDescription>
                    </div>
                  </div>
                }
                cardContent={
                  <p className="dark:text-washed-purple-800">
                    {testimonial.message}
                  </p>
                }
              ></CustomCard>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  {
    message:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    message:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    message: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
];
