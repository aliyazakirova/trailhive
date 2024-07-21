"use client";
import { forwardRef} from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ type, title, icon, variant, full }, ref) => {
  return (
    <button
      ref={ref}
      className={`flex items-center justify-center gap-3 rounded-full border h-10 ${variant} ${full ? 'w-full' : ''}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="regular-16 whitespace-nowrap cursor-pointer">{title}</span>
    </button>
  );
});
Button.displayName = 'Button';

export default motion(Button);
