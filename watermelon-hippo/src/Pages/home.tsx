import Header from "../Components/Header";
import HeroQuotes from "../Components/HeroQuotes";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <>
      <title>Home | Watermelon Hippo</title>
      <meta
        name="description"
        content="Welcome to Watermelon Hippo. Your No.1 resource for all watermelon hippo info, literature & media."
      />
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
