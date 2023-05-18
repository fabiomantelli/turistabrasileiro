import { Rubik } from "next/font/google";

import { GiWorld } from "react-icons/gi";
import { MdOutlineHighQuality, MdOutlineLocalOffer } from "react-icons/md";
import { GrSecure } from "react-icons/gr";

import Header from "./components/Header";
import GlitzyAdvertisement from "./components/GlitzyAdvertisement";
import TraveTag from "./components/TravelTag";
import MainPage from "./components/MainPage";
import Discount from "./components/Discount";
import ItensTag from "./components/ItensTag";
import EmailSubscriptionForm from "./components/EmailSubscriptionForm";
import Footer from "./components/Footer";
import FamousInBrazil from "./components/FamousInBrazil";
import Locality from "./components/Locality";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "700"],
});

export async function getData() {
  const res = await fetch("https://turistabrasileiro.com/wp-json/wp/v2/posts", {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  const modifiedData = data.map(item => ({
    ...item,
    content: {
      ...item.content,
      rendered: item.content.rendered.replace(/\\n<p>/g, '').replace(/<\/p>\\n/g, ''),
    }
  }));

  console.log(modifiedData)

  return (
    <main>
      <Header />
      <div className="h-screen bg-[url('/images/rio-de-janeiro.jpg')] bg-no-repeat bg-center bg-cover bg-fixed text-center flex flex-col justify-evenly">
        <MainPage />
      </div>

      <section>
        <GlitzyAdvertisement />
      </section>

      <section>
        <FamousInBrazil />
      </section>

      <section className="flex justify-center">
        <div className="grid md:grid-cols-3">
          <Locality
            title="Gastronomia"
            description="Descubra os Sabores Únicos de Foz do Iguaçu: Gastronomia autêntica, fusion e delícias culinárias esperam por você!"
            image="/images/gastronomy.jpg"
          />
          <Locality
            title="Bares"
            description="Aproveite a Noite em Foz do Iguaçu: Bares animados, drinks refrescantes e diversão garantida!"
            image="/images/bar.jpg"
          />
          <Locality
            title="Turismo"
            description="Explore as Maravilhas de Foz do Iguaçu: Natureza e Cataratas impressionantes e experiências inesquecíveis!"
            image="/images/tourism.jpg"
          />
        </div>
      </section>

      <section className="flex justify-center">
        <div className="grid md:grid-cols-3">
          <TraveTag
            title="Let's Lorem Suit Up!"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin acdictum."
            image="/images/noronha.jpg"
          />
          <TraveTag
            title="Let's Lorem Suit  Up!"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin acdictum."
            image="/images/urubici.jpg"
          />
          <TraveTag
            title="The Blue Man Now"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin acdictum."
            image="/images/blumenau.jpg"
          />
          {modifiedData.map((item) => (
            <TraveTag key={item.id} image="/images/blumenau.jpg">
              <strong
                className={`${rubik.className} text-xl ml-[5%] text-white isolate`}
              >
                {item.title.rendered}
              </strong>
              <p className="ml-[5%] text-white isolate">{item.content.rendered}</p>
            </TraveTag>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center">
        <Discount
          image="/images/rio-de-janeiro-2.jpg"
          title="Special Edition"
          discount="Buy This T-Shirt At 20% Discount, Use code OFF2O"
        />
      </section>

      <section className="grid sm:grid-cols-2 md:grid-cols-4">
        <ItensTag
          icon={<GiWorld />}
          title="Worldwide Shipping"
          subTitle="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
        <ItensTag
          icon={<MdOutlineHighQuality />}
          title="Best Quality"
          subTitle="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
        <ItensTag
          icon={<MdOutlineLocalOffer />}
          title="Best Offers"
          subTitle="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
        <ItensTag
          icon={<GrSecure />}
          title="Secure Payments"
          subTitle="It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        />
      </section>

      <section>
        <EmailSubscriptionForm />
      </section>

      <Footer />
    </main>
  );
}
