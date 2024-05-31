import Image from 'next/image';

const TestimonialSection = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-lg uppercase mb-4">Testimonial</h2>
        <p className="text-3xl md:text-4xl font-semibold mb-6">
          "TrailHive has completely changed the way I explore the outdoors. The
          personalized trail recommendations and virtual challenges have kept
          me motivated and engaged with my adventures."
        </p>
        <p className="text-xl mb-12">- John R.</p>
        <div className="flex flex-wrap justify-center items-center space-x-4">
          <Image src="/logos/dell.png" alt="Dell" width={64} height={32} />
          <Image src="/logos/zendesk.png" alt="Zendesk" width={64} height={32} />
          <Image src="/logos/rakuten.png" alt="Rakuten" width={64} height={32} />
          <Image src="/logos/pacific_funds.png" alt="Pacific Funds" width={64} height={32} />
          <Image src="/logos/ncr.png" alt="NCR" width={64} height={32} />
          <Image src="/logos/lattice.png" alt="Lattice" width={64} height={32} />
          <Image src="/logos/ted.png" alt="TED" width={64} height={32} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
