import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Lightbox from "../Components/Lightbox";
import Footer from "../Components/Footer";

export default function Art() {
  return (
    <>
      <title>Art | Watermelon Hippo</title>
      <meta
        name="description"
        content="A collection of artworks featuring watermelon hippos from throughout the ages."
      />
      <Header />
      <Hero
        titleone="The world"
        titletwo="of art"
        image="doug_art.webp"
        intro="Throughout history, the celebreated beast has been documented on canvas in many guises and styles. Here we assembled a gallery of examples for perusal."
      />
      <div className="lg:mx-auto lg:max-w-7xl">
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-amber-100 sm:text-5xl">
          Rennaissance
        </h2>
        <div className="relative isolate z-40 overflow-hidden px-6 sm:py-8 lg:overflow-visible lg:px-0">
          <div className="grid grid-cols-2 gap-4 px-4 lg:grid-cols-4 lg:gap-8 lg:px-0">
            <Lightbox
              images={[
                {
                  artwork: "/art/titian.webp",
                  title: "Titian",
                  date: "circa 1523",
                  description:
                    "Rennaissance work by Tiziano Vecellio, 'Titian', or 'Titi' to his mates. This bull is thought to be one of the largest recorded.",
                },
                {
                  artwork: "/art/donatello.webp",
                  title: "Donatello",
                  date: "circa 1440",
                  description:
                    "Lesser known masterpiece by Donato di Niccolò di Betto Bardi. He went by Donatello to make life easier for the postman. Depicting a juvenile being celebrated by some beered-up locals.",
                },
                {
                  artwork: "/art/boticelli.webp",
                  title: "Botticelli",
                  date: "circa 1480",
                  description:
                    "Alessandro di Mariano di Vanni Filipepi, a master of the Italian rennaissance and all-round lunatic is believed to have harboured an obsession with the animal. He reportedly dreamed of owning one as a pet or at least having one attend one of his saucy woodland picnics. Apparently.",
                },
                {
                  artwork: "/art/davinci.webp",
                  title: "Da Vinci",
                  date: "circa 1500",
                  description:
                    "Leonardo Da Vinci's 'la madonna e l'ippopotamo cocomero'. Derided by some as blasphemy, Leo kept this work in his basement away from public gaze. Just next to his helicopter, which didn't work.",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="lg:mx-auto lg:max-w-7xl">
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-amber-100 sm:text-5xl">
          Cubism
        </h2>
        <div className="relative isolate overflow-hidden px-6 sm:py-8 lg:overflow-visible lg:px-0">
          <div className="grid grid-cols-2 gap-4 px-4 lg:grid-cols-4 lg:gap-8 lg:px-0">
            <Lightbox
              images={[
                {
                  artwork: "/art/metzinger.webp",
                  title: "Metzinger",
                  date: "circa 1906",
                  description:
                    "Cubist Jean Metzinger's work was a precursor to more abstract pieces. He thought it was really good. He was the only one.",
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
