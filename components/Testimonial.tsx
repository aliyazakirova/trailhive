import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section
      className="text-green-10 section-container bg-green-90"
      style={{
        backgroundImage: "url('/testimonial-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center lg:text-left max-w-7xl mb-[80px] lg:mb-[100px]">
        <h2 className="regular-14 uppercase">Testimonial</h2>
        <p className="max-w-6xl bold-48 font-semibold my-[24px] text-center lg:text-left tracking-[.2px]">
          "TrailHive has completely changed the way I explore the outdoors. The
          personalized trail recommendations and virtual challenges have kept me
          motivated and engaged with my adventures."
        </p>
        <p className="bold-24">- John R.</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-center text-green-10 regular-20 pb-[50px] ">
          Trusted by teams at over 1,000 of the world’s leading organizations
        </p>
        <div className="flex flex-wrap justify-center items-center [gap:60px]">
          <Image src="/logos/dell.png" alt="Dell" width={62} height={20} />
          <Image
            src="/logos/zendesk.png"
            alt="Zendesk"
            width={87}
            height={17}
          />
          <Image
            src="/logos/rakuten.png"
            alt="Rakuten"
            width={67}
            height={21}
          />
          <Image
            src="/logos/pacific_funds.png"
            alt="Pacific Funds"
            width={143}
            height={13}
          />
          <Image src="/logos/ncr.png" alt="NCR" width={80} height={24} />
          <Image
            src="/logos/lattice.png"
            alt="Lattice"
            width={120}
            height={22}
          />
          <Image src="/logos/ted.png" alt="TED" width={54} height={20} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
