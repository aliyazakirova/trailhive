import React from "react";
import Image from "next/image";

const NewTrails = () => {
  return (
    <section className=" bg-green-90 ">
      <div className="rounded-[40px] bg-green-10">
        <div className="py-[20px]">
          <div className="flex flex-col justify-center items-center ">
            <h2 className="semibold-48 text-center text-green-90 my-[40px]">
              Find new trails to explore and <br />
              adventures to embark on.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <Image src="/new-trails.png" alt="Dell" width={1400} height={700} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewTrails;
