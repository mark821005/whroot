import Header from "../Components/Header";
import HeroQuotes from "../Components/HeroQuotes";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroQuotes
        titleone="Watermelon"
        titletwo="Hippo"
        image="doug_hero.webp"
      />
      <Footer />
    </>
  );
}
