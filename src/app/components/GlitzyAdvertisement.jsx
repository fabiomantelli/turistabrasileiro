import Image from "next/image";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "700"],
});

function GlitzyAdvertisement() {
  return (
    <div className="text-center m-4 flex flex-col items-center gap-4">
      <div className="md:flex md:text-start md:max-w-screen-xl gap-6">
        <h1 className={`${rubik.className} font-bold text-3xl mb-4`}>
          Descubra as Maravilhas do Turismo no Brasil: Praias deslumbrantes,
          natureza exuberante e rica cultura esperam por você!
        </h1>
        <div>
        <h2 className="text-ms mb-4">
          Descubra o Melhor do Turismo no Brasil: Praias Paradisíacas, Natureza
          Exuberante e Cultura Vibrante!
        </h2>
        <p>
          Se você está em busca de um destino turístico único e diversificado, o
          Brasil é o lugar perfeito para você. Com praias deslumbrantes banhadas
          por águas cristalinas, uma natureza exuberante que abrange desde
          florestas tropicais até imensas planícies, e uma cultura vibrante que
          reflete a rica herança do país, o Brasil oferece uma experiência
          inesquecível.
        </p>
        </div>
      </div>
      <div className="m-4">
        <Image
          src="/images/rio-de-janeiro-2.jpg"
          alt="Rio de Janeiro"
          width={1000}
          height={700}
          sizes="(max-width: 1000px) 100vw"
        />
      </div>
    </div>
  );
}

export default GlitzyAdvertisement;
