import Image from "next/image";
import heroImage from "../public/hero_img.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="bg-green-90 py-[64px] px-[120px] relative overflow-hidden">
      <div className="max-container flex flex-col lg:flex-row items-center space-x-[80px]">
        <div className="lg:w-1/2 max-w-2xl">
          <div className="mb-[24px]">
            <h1 className="bold-85 mb-[24px] text-green-10 tracking-tighter">
              Your Ultimate Outdoor Companion
            </h1>
            <p className="regular-18 text-green-10">
              Are you tired of spending hours searching for the perfect hiking
              or biking trail? TrailHive - the ultimate outdoor adventure app
              that connects you with the best trails in your area.
            </p>
            </div>
            <Button
              type="button"
              title="Download the app"
              variant="btn_white"
            />
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0 flexCenter">
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
