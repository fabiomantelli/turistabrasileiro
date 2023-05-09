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
  subTitle: string;
  image: string;
}

function TraveTag({ title, subTitle, image }: TitleProps) {
  return (
    <div className="relative flex flex-col justify-end lg:max-w-sm gap-2 h-72 px-4 py-8 m-4 overflow-hidden rounded-lg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <strong
        className={`${rubik.className} text-xl text-white isolate`}
      >
        {title}
      </strong>
      <p className="text-white isolate">{subTitle}</p>
      <button
        className={`${lato.className} font-normal h-10 bg-slate-100 isolate`}
      >
        SHOP NOW
      </button>
    </div>
  );
}

export default TraveTag;
