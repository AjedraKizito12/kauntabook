import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  link?: string; // New prop for the download link
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, link, icon, variant, full }: ButtonProps) => {
  const handleTap = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <button
      className={`flexCenter gap-3 rounded-xl border ${variant} ${
        full && "w-full"
      }`}
      type={type}
      onClick={handleTap} // Attach onClick event handler
    >
      {icon && (
        <div>
          <Image
            src={icon}
            alt={title}
            width={24}
            height={24}
            style={{ filter: "invert(1) brightness(100)" }}
          />
        </div>
      )}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
