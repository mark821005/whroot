import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Lightbox from "../Components/Lightbox";
import Footer from "../Components/Footer";

export default function Art() {
  return (
    <>
      <Header />
      <Hero titleone="The World" titletwo="of Art" image="doug_wallow.webp" />
      <Lightbox />
      <Footer />
    </>
  );
}
