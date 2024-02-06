import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import Image from "next/image";

interface testimonyProps {
  imgSrc: string;
  heading: string;
  subheading: string;
  link: string;
  key: number;
}

const TestimonyCard = ({
  imgSrc,
  heading,
  subheading,
  link,
  key,
}: testimonyProps) => {
  return (
    <div className="card-b p-8 relative rounded-3xl" key={key}>
      <div className="rounded-full flex justify-center absolute top-[-50%] sm:top-[-40%] md:top-[-55%] lg:top-[-45%] left-[0%]">
        <Image src={imgSrc} alt={imgSrc} width={300} height={10} />
      </div>
      <h3 className="text-2xl text-black font-semibold text-center mt-16">
        {heading}
      </h3>
      <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
        {subheading}
      </p>
      <div className="flex items-center justify-center">
        <Link href="/">
          <p className="text-center text-lg font-medium text-pink mt-2 hover-underline">
            {link}
            <MdChevronRight width={20} height={20} />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default TestimonyCard;
