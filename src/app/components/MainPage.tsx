import { Rubik, Lato } from "next/font/google";

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

function MainPage() {
  return (
    <>
      <div>
        <h1 className={`${rubik.className} font-bold text-5xl text-white mb-4`}>
          Seja bem-vindo ao Turista Brasileiro
        </h1>
        <h2 className={`${rubik.className} font-bold text-white text-xl`}>
          Aqui você vai encontrar os melhores destinos e poderá se programar
          para viajar pelo Brasil
        </h2>
      </div>
      <div>
        <button
          className={`${lato.className} font-normal bg-slate-100 w-[90vw] p-2 m-2`}
        >
          HOTÉIS
        </button>
        <button
          className={`${lato.className} font-normal text-white border-2 w-[90vw] p-2`}
        >
          DESTINOS
        </button>
      </div>
    </>
  );
}

export default MainPage;
