import Button from './Button';

const TestimonialSection = () => {
  return (
    <section
    className="text-green-10 section-container"
    style={{
      backgroundImage: "url('/testimonial-two-bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
    }}
  >
      <div className="max-w-4xl text-left mb-[32px]">
        <h2 className="regular-14 uppercase mb-[24px]">Testimonial</h2>
        <p className="bold-48 md:text-4xl font-semibold mb-[24px]">
        "I love the social networking aspect of TrailHive. It's great to connect with other hikers and bikers and plan group events together."
        </p>
        <p className="bold-24">- Sara L.</p>
      </div>
      <div className='mb-[20px]'>
      <Button 
            type="button"
            title="Learn More"
            variant="btn_white"
          />
      </div>
      
    </section>
  );
};

export default TestimonialSection;
