import Image from "next/image";
import { GiWorld } from "react-icons/gi";
import { MdOutlineHighQuality, MdOutlineLocalOffer } from "react-icons/md";
import { GrSecure } from "react-icons/gr";

import Header from "./components/Header";
import GlitzyAdvertisement from "./components/GlitzyAdvertisement"
import TraveTag from "./components/TravelTag";
import MainPage from "./components/MainPage";
import Discount from "./components/Discount";
import ItensTag from "./components/ItensTag";
import EmailSubscriptionForm from "./components/EmailSubscriptionForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="h-screen bg-[url('/images/rio-de-janeiro.jpg')] bg-no-repeat bg-center bg-cover text-center flex flex-col justify-evenly">
        <MainPage />
      </div>

      <section>
        <GlitzyAdvertisement />
      </section>
      <section className="flex flex-col items-center">
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
      </section>

      <section className="flex flex-col items-center">
        <Discount
          image="/images/rio.jpg"
          title="Special Edition"
          discount="Buy This T-Shirt At 20% Discount, Use code OFF2O"
        />
      </section>

      <section className="flex flex-col items-center">
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
