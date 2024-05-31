import Image from 'next/image';
import Button from './Button';

const TestimonialSection = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-lg uppercase mb-4">Testimonial</h2>
        <p className="text-3xl md:text-4xl font-semibold mb-6">
        "I love the social networking aspect of TrailHive. It's great to connect with other hikers and bikers and plan group events together."
        </p>
        <p className="text-xl mb-12">- Sara L.</p>
        <div className="hidden lg:flex space-x-4">
          <Button 
            type="button"
            title="Learn More"
            variant="btn_white"
          />
           </div>
       
      </div>
    </div>
  );
};

export default TestimonialSection;
