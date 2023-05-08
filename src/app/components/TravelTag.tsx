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
    subTitle :string;
    image: string;
}


function TraveTag({ title, subTitle, image }: TitleProps) {
  return (
    <div className={`flex flex-col justify-end gap-2 h-72 pl-2 pr-2 pb-6 ml-4 mr-4 mb-4 bg-cover bg-center`} style={{ backgroundImage: `url(${image})` }} >
      <strong className={`${rubik.className} text-xl ml-[5%] text-white`}>
        {title}
      </strong>
      <p className="ml-[5%] text-white">
        {subTitle}
      </p>
      <button
        className={`${lato.className} font-normal h-10 bg-slate-100 w-[90%] ml-[5%]`}
      >
        SHOP NOW
      </button>
    </div>
  );
}

export default TraveTag;
