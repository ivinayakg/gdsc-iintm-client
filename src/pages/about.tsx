import image1 from "../assets/image/image1.png";
import image2 from "../assets/image/GDSCLogo.png";

export default function About() {
  return (
    <>
      <section>
        <div
          className="relative h-[400px] w-[100%] bg-contain bg-center bg-fixed flex justify-center items-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className=" flex flex-col gap-5 justify-center items-center">
            <p className="text-4xl">Google Developer Student Club</p>
            <span className="text-2xl">IINTM</span>
          </div>
        </div>
      </section>
      <div className="relative h-[450px] w-[100%] bg-[#d5dfed] flex justify-center items-center">
        <div
          className="absolute top-[-100px] left-[43%] h-[180px] w-[180px] rounded-[50%] border-[5px] border-solid border-t-4 border-t-theme-colors-blue
             border-r-4 border-r-theme-colors-red
             border-b-4 border-b-theme-colors-yellow
             border-l-4 border-l-theme-colors-green flex justify-center items-center"
        >
          <img
            src={image2}
            alt=""
            className="h-[170px] w-[170px] rounded-[50%]"
          />
        </div>
        <div className=" w-4/5 h-[300px] flex flex-col gap-2.5 justify-center items-center">
          <div className="flex w-full text-[2rem]">About US</div>
          <div className="flex gap-10">
            <div className="flex justify-center w-3/5">
              <p className="w-full text-[1.1rem]">
                We, the Google Developer Student Club at IINTM is a community of
                tech enthusiasts united by a shared objective - to foster the
                holistic growth of our dedicated student community . Our primary
                aim is not only to advance their skills in the technology sector
                but also to cultivate them into dependable and responsible
                citizens.
              </p>
            </div>
            <div className="w-2/5 flex flex-col gap-3 ">
              <span className="text-[1.1rem]">Our total community member</span>
              <span className="text-[1rem] font-bold">250+</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
