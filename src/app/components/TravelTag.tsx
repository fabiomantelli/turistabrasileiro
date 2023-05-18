import { Lato, Rubik } from "next/font/google";
import { ReactNode } from "react";

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

interface TravelTagProps {
  image: string;
  children: ReactNode
}

function TraveTag({ image, children }: TravelTagProps) {
  return (
    <div className="relative flex flex-col justify-end lg:max-w-sm gap-2 h-72 px-4 py-8 m-4 overflow-hidden rounded-lg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
<<<<<<< HEAD
      {children}
=======
      <strong
        className={`${rubik.className} text-xl text-white isolate`}
      >
        {title}
      </strong>
      <p className="text-white isolate">{subTitle}</p>
>>>>>>> 637834f813adfac2d0dffcd15e1d793e4ecb4216
      <button
        className={`${lato.className} font-normal h-10 bg-slate-100 isolate`}
      >
        SHOP NOW
      </button>
    </div>
  );
}

export default TraveTag;
