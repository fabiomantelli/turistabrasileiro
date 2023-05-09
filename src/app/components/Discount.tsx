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
    <div className="relative flex flex-col justify-center p-4 m-4 gap-8 h-96 bg-cover bg-center bg-fixed max-w-5xl">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${image})`, maxWidth: "1024px" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h2 className="text-white">Limited Time Offer</h2>
      <strong className={`${rubik.className} text-xl text-white isolate`}>
        {title}
      </strong>
      <p className="text-white isolate">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
      <strong className="text-white isolate">{discount}</strong>
      <button
        className={`${lato.className} font-normal h-10 bg-slate-100 isolate`}
      >
        SHOP NOW
      </button>
    </div>
  );
}

export default Discount;
