import GDSCHeroSection from "@/components/custom/GDSCHeroSection";

export default function About() {
  return (
    <>
      <GDSCHeroSection />
      <section className="h-max pt-20 md:pt-32 w-screen bg-theme-colors-blue/30 flex justify-center items-center flex-col p-6 py-8 md:p-10 gap-5">
        <h2 className="font-open-sans text-4xl md:text-5xl">About Us</h2>
        <p className="font-montserrat text-lg md:text-xl">
          We, the Google Developer Student Club at IINTM is a community of tech
          enthusiasts united by a shared objective - to foster the holistic
          growth of our dedicated student community . Our primary aim is not
          only to advance their skills in the technology sector but also to
          cultivate them into dependable and responsible citizens.
        </p>
      </section>
    </>
  );
}
