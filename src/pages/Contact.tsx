import ContactForm from "@/components/custom/ContactForm";
import GDSCHeroSection from "@/components/custom/GDSCHeroSection";

export default function Contact() {
  return (
    <>
      <GDSCHeroSection />
      <div className="h-full w-full bg-theme-colors-blue/30 p-5 grid grid-rows-3 md:flex md:justify-center md:items-center md:p-10 gap-5 pt-20 md:pt-32">
        <div className="bg-white rounded-lg p-5 flex flex-col justify-center items-start gap-2 md:hidden">
          <h1 className="font-open-sans font-bold text-xl">
            Ask your curiosity out...
          </h1>
          <p className="font-montserrat text-base">
            We at GDSC IINTM value your curiosity and are always ready to help.
          </p>
          <p className="font-montserrat text-base">
            We are here to answer your queries. Feel free to ask anything you
            want to know about us.
          </p>
        </div>
        <ContactForm className="row-span-2 " />
      </div>
    </>
  );
}
