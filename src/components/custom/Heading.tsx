"use client";
import { TextGenerateEffect } from "./text-generate-effect";

const words = `UPCOMING EVENTS!!`;

export function Heading() {
  return <TextGenerateEffect words={words} className=" mt-20" />;
}
