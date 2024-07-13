import Image from "next/image";
import heroImage from "../public/hero_img.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-green-90 relative overflow-hidden">
      <div className="max-container flex flex-col lg:flex-row items-center lg:space-x-[80px] padding-container">
        <div className="lg:w-1/2 max-w-2xl">
          <div className="mb-[24px]">
            <h1 className="text-center bold-48 lg:bold-85 lg:text-left mb-[24px] text-green-10 tracking-tighter">
              Your Ultimate Outdoor Companion
            </h1>
            <p className="text-center lg:text-left regular-18 text-green-10">
              Are you tired of spending hours searching for the perfect hiking
              or biking trail? TrailHive - the ultimate outdoor adventure app
              that connects you with the best trails in your area.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
          <Button type="button" title="Download the app" variant="btn_white" />
          </div>
          
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0 flexCenter justify-center">
          <Image
            src={heroImage}
            alt="Hiking"
            className="rounded-[20px] shadow-lg"
          />
        </div>
      </div>
      <div className="hero-map"></div>
    </section>
  );
};

export default Hero;
