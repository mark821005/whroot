import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Polaroids from "../Components/Polaroids";
import Footer from "../Components/Footer";

export default function Safari() {
  return (
    <>
      <Header />
      <Hero titleone="Out in the" titletwo="Wild" image="doug_safari.webp" />
      <div className="lg:mx-auto lg:max-w-7xl">
        <div className="relative isolate overflow-hidden px-6 sm:py-8 lg:overflow-visible lg:px-0">
          <div className="grid grid-cols-2 gap-4 px-4 lg:grid-cols-4 lg:gap-8 lg:px-0">
            <Polaroids
              polaroids={[
                {
                  image: "/polaroids/polaroid_01.webp",
                  description: "Egypt - circa 1200BC",
                  rotate: "2",
                },
                {
                  image: "/art/titian.webp",
                  description: "circa 1523",
                  rotate: "-5",
                },
                {
                  image: "/art/titian.webp",
                  description: "circa 1523",
                  rotate: "4",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
