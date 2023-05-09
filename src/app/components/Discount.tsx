import { Lato, Rubik } from "next/font/google";

interface DiscountProps {
  image: string;
  title: string;
  discount: string;
}

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

function Discount({ image, title, discount }: DiscountProps) {
  return (
    <div
      className={`flex flex-col justify-evenly gap-2 h-96 pl-2 pr-2 pb-6 bg-cover bg-center bg-fixed ml-4 mr-4 mb-4`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2 className="pl-2 m-2 text-white">Limited Time Offer</h2>
      <strong className={`${rubik.className} text-xl ml-[5%] text-white`}>
        {title}
      </strong>
      <p className="ml-[5%] text-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <strong className="m-2 pl-2 text-white">{discount}</strong>
      <button
        className={`${lato.className} font-normal h-10 bg-slate-100 w-[90%] ml-[5%]`}
      >
        SHOP NOW
      </button>
    </div>
  );
}

export default Discount;
