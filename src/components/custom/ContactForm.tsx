import { cn } from "@/lib/utils";
import { FormEvent } from "react";

export default function ContactForm({ className }: { className: string }) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={cn("p-6 rounded-lg bg-white", className)}>
      <h1 className="text-Black text-2xl font-bold font-open-sans md:text-4xl md:font-semibold">
        Contact us
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-stretch gap-6 mt-4"
      >
        <div className="">
          <label className="font-montserrat md:text-lg" htmlFor="fullName">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            required
            className="w-full text-black border-b-2 border-gray-500 bg-transparent outline-none"
            name="fullName"
          />
        </div>
        <div className="">
          <label className="font-montserrat md:text-lg" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full text-Black border-b-2 border-gray-500 bg-transparent outline-none"
            name="email"
          />
        </div>
        <div className="">
          <label className="font-montserrat md:text-lg" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            className="w-full text-Black border-b-2 border-gray-500 bg-transparent outline-none"
            name="subject"
          />
        </div>
        <div className="">
          <label className="font-montserrat md:text-lg" htmlFor="description">
            Description
          </label>
          <textarea
            cols={30}
            rows={5}
            required
            name="description"
            className="w-full mt-2 rounded-lg text-black border-2 border-gray-500 outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="font-montserrat md:text-lg text-Black border-none bg-theme-colors-blue text-white px-6 py-2 w-fit rounded-md hover:-translate-y-1 hover:opacity-90 transition-all duration-150 ease-in-out"
        >
          Send
        </button>
      </form>
    </div>
  );
}
