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

interface DataProps {
  item: {
    id: number;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
  };
}

function TravelTag({ item }: DataProps) {
  const title = item.title.rendered;
  const content = item.content.rendered
    .replace(/(<p>|<\/p>)/g, "")
    .replace(/(\n|\r|\n\r)/g, "")
    .trim();

  const srcRegex = /src="(.*?)"/;
  const match = item.content.rendered.match(srcRegex);

  const srcContent = match && match[1];

  const truncatedContent =
    content.length > 15 ? content.slice(0, 85) + "..." : content;

  return (
    <div className="relative flex flex-col justify-end lg:max-w-sm gap-2 h-72 px-4 py-8 m-4 overflow-hidden rounded-lg">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${srcContent})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <strong className={`${rubik.className} text-xl text-white isolate`}>
        {title}
      </strong>
      <p className="text-white isolate">{truncatedContent}</p>
      <button
        className={`${lato.className} font-normal h-10 bg-slate-100 isolate`}
      >
        SHOP NOW
      </button>
    </div>
  );
}

export default TravelTag;
