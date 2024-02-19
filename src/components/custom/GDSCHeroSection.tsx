export default function GDSCHeroSection() {
  return (
    <section className="relative h-[400px] w-screen flex justify-center items-center flex-col">
      <div className=" w-full h-full bg-contain bg-center bg-fixed  bg-gdsc-svg-page-bg gap-3">
        <div className="w-full h-full flex justify-center items-center flex-col bg-white/30">
          <p className="text-5xl font-open-sans text-center">
            Google Developer Student Club
          </p>
          <span className="text-2xl font-montserrat">IINTM</span>
        </div>
      </div>
      <div
        className="absolute -bottom-16 md:-bottom-24 min-h-min min-w-min rounded-full border-[5px] border-solid border-t-4 border-t-theme-colors-blue
         border-r-4 border-r-theme-colors-red
         border-b-4 border-b-theme-colors-yellow
         border-l-4 border-l-theme-colors-green flex justify-center items-center p-4 md:p-6 bg-white"
      >
        <img
          src={"/GDSCLogo.png"}
          alt=""
          className="w-24 md:w-[170px] object-contain rounded-full"
        />
      </div>
    </section>
  );
}
