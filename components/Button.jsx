"use client";
import { forwardRef } from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

const Button = forwardRef(({ type, title, icon, variant, full, onClick }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={`flex items-center justify-center gap-3 rounded-full border h-10 ${variant} ${full ? 'w-full' : ''}`}
      type={type}
      onClick={onClick}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="regular-16 whitespace-nowrap cursor-pointer">{title}</span>
    </motion.button>
  );
});
Button.displayName = 'Button';

export default Button;
