import Image from "next/image";
import { Lato, Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400"],
});

interface TitleProps {
  title: string;
  description: string;
  image: string;
}

function Locality({ title, description, image }: TitleProps) {
  return (
    <div className="border-gray-300 border-[1px] rounded-lg m-4 lg:max-w-sm overflow-hidden">
      <Image
        src={`${image}`}
        alt="Gastronomia"
        width={768}
        height={768}
        sizes="(max-width: 768px)"
      />
      <h1
        className={`${rubik.className} text-xl ml-[5%] mt-4 text-black font-bold`}
      >
        {title}
      </h1>
      <p className="ml-[5%] text-black mt-4 mb-8">{description}</p>
    </div>
  );
}

export default Locality;
