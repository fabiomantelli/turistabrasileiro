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

function City({ title, description, image }: TitleProps) {
  return (
    <div className="relative m-4 lg:max-w-sm">
      <Image
        src={image}
        alt="Gastronomia"
        width={768}
        height={768}
        className="object-fill m"
      />
      <h1
        className={`${rubik.className} text-xl mt-4 text-black font-bold`}
      >
        {title}
      </h1>
      <p className="text-black mt-4 mb-8">{description}</p>
      <button
        className={`text-justify font-normal px-6 py-2 bg-yellow-500`}
      >
        SAIBA MAIS...
      </button>
    </div>
  );
}

export default City;
