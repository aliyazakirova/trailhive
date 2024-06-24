import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-3 rounded-full border h-10 ${variant} ${full ? 'w-full' : ''}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <span className="font-normal whitespace-nowrap cursor-pointer">{title}</span>
    </button>
  );
}

export default Button;
