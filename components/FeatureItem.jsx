import React, { forwardRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// FeatureItem component with forwardRef
const FeatureItem = forwardRef(({ image, title, description }, ref) => (
  <div ref={ref} className="lg:col-span-1">
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt={title}
        width={311}
        height={240}
        className="rounded-[20px] mb-4"
      />
      <h3 className="semibold-16 text-green-90 mb-2 text-center">
        {title}
      </h3>
      <p className="regular-14 text-green-90 text-center px-4">
        {description}
      </p>
    </div>
  </div>
));
const MFeatureItem = motion(FeatureItem)
export default FeatureItem;
