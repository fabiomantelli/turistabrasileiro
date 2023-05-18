import { GiWorld } from "react-icons/gi";
import { MdOutlineHighQuality, MdOutlineLocalOffer } from "react-icons/md";
import { GrSecure } from "react-icons/gr";

import Header from "./components/Header";
import GlitzyAdvertisement from "./components/GlitzyAdvertisement";
import TravelTag from "./components/TravelTag";
import MainPage from "./components/MainPage";
import Discount from "./components/Discount";
import ItensTag from "./components/ItensTag";
import EmailSubscriptionForm from "./components/EmailSubscriptionForm";
import Footer from "./components/Footer";
import FamousInBrazil from "./components/FamousInBrazil";
import Locality from "./components/Locality";
import City from "./components/City";

interface DataProps {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

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
          <City
            title="Fortaleza - CE"
            description="Fortaleza: Descubra as Belezas da Capital do Ceará, Praias Deslumbrantes, Cultura Vibrante e Gastronomia Deliciosa!"
            image="/images/ceara.jpg"
          />
          <City
            title="Florianópolis - SC"
            description="Descubra as Maravilhas de Santa Catarina: Praias deslumbrantes, natureza exuberante e cultura encantadora!"
            image="/images/florianopolis2.jpg"
          />
          <City
            title="Rio de Janeiro - RJ"
            description="Experiencie a Magia do Rio de Janeiro: Praias icônicas, paisagens deslumbrantes e energia contagiante!"
            image="/images/rio-de-janeiro-3.jpg"
          />
        </div>
      </section>

      <section className="flex justify-center">
        <div className="grid md:grid-cols-3">
          {data.map((item: DataProps) => (
            <TravelTag key={item.id} item={item} />
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
