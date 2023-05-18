import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "700"],
});

function FamousInBrazil() {
  return (
    <div className="m-4 p-4 text-center md:text-start">
      <h1 className={`${rubik.className} font-bold text-2xl text-center mb-8`}>O litoral brasileiro é famoso por suas praias paradisíacas</h1>
      <div className="flex flex-col md:flex-row">
      <div className="p-4">
        <h2 className="font-bold text-lg mb-2">
          Rio de Janeiro: A cidade maravilhosa é conhecida por suas praias
          icônicas, como Copacabana e Ipanema.
        </h2>
        <p className="mb-8">
          Além disso, há outras opções menos movimentadas, como a Praia do
          Grumari e a Praia da Reserva.
        </p>
        <h2 className="font-bold mb-2 text-lg">
          Florianópolis: A capital de Santa Catarina é conhecida por suas praias
          de água cristalina e areia branca.
        </h2>
        <p className="mb-8">
          Destaques incluem a Praia da Joaquina, Praia Mole e Jurerê
          Internacional.
        </p>
        <h2 className="font-bold mb-2 text-lg">
          Porto de Galinhas: Localizado em Pernambuco, Porto de Galinhas é um
          destino popular para aqueles que procuram um paraíso tropical.
        </h2>
        <p className="mb-8">
          A praia de mesmo nome é a principal atração, com suas águas mornas e
          cristalinas.
        </p>
      </div>
      <div className="p-4">
        <h2 className="font-bold mb-2 text-lg">
          Nordeste: Além de Porto de Galinhas, o nordeste brasileiro oferece uma
          infinidade de opções de praias.
        </h2>
        <p className="mb-8">As praias de Natal, Fortaleza, Salvador e Recife.</p>
        <h2 className="font-bold mb-2 text-lg">
          Fernando de Noronha: Este arquipélago, localizado a cerca de 350 km da
          costa brasileira, é um verdadeiro paraíso para os amantes da natureza.
        </h2>
        <p className="mb-8">
          Praias de águas cristalinas e vida marinha abundante, é uma
          experiência única para aqueles que desejam se desconectar do mundo.
        </p>
        <h2 className="font-bold mb-2 text-lg">Nam libero tempore, cum soluta nobis?</h2>
        <p className="mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
    </div>
      </div>
  );
}

export default FamousInBrazil;
