import Image from 'next/image';
import heroImage from '../public/hero_img.png';
import Button from './Button';

const Hero = () => {
  return (
    <section className="bg-green-90 text-gray-10 section-container relative overflow-hidden">
      <div className="max-container flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h1 className="bold-64 mb-6 text-green-10 { letterSpacing: '-0.02em' }">Your Ultimate Outdoor Companion</h1>
          <p className="regular-18 mb-8 text-green-10">
            Are you tired of spending hours searching for the perfect hiking or biking trail? TrailHive - the ultimate outdoor adventure app that connects you with the best trails in your area.
          </p>
          <Button 
            type="button"
            title="Download the app"
            variant="btn_white"
          />
          
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flexCenter">
          <Image src={heroImage} alt="Hiking" className="rounded-lg shadow-lg" />
        </div>
      </div>
      <div className="hero-map"></div>
    </section>
  );
};

export default Hero;
