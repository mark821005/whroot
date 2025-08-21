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
      <div className="fadeInOut container mx-auto mb-16 py-8">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10">
          <div className="order-1">
            <div className="lg:pr-4">
              <p className="text-base/7 font-semibold text-amber-400">
                What is this madness?
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-amber-100 sm:text-5xl">
                Welcome to watermelon hippo
              </h1>
              <p className="mt-6 text-xl/8 text-amber-100">
                Your No.1 resource for all your watermelon hippon needs. Of
                which you have many. Yes you do.
              </p>
            </div>
          </div>
          <div className="order-1 -mt-12 -ml-12 max-w-2xl p-12 lg:sticky lg:top-4 lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:overflow-hidden">
            <p className="my-8">
              Some creatures are discovered in the wild; others are discovered
              in the mind. The watermelon hippo - equal parts river giant and
              summer fruit - belongs to the latter. With the mass of a hippo and
              the green-striped rind of a melon, it has been sighted (or
              imagined) by explorers, artists, and storytellers for generations.
            </p>
            <p className="my-8">
              This site is the first to gather its many incarnations - in art,
              literature, historical safari photographs, popular culture, and
              quotes from imagined witnesses past and present. You'll find
              painted landscapes where the hippo basks in blazing sunsets,
              grainy “archival” snapshots from 1930s expeditions, and whimsical,
              philosophical reflections from great minds who never actually saw
              one.
            </p>
            <p className="my-8">
              The project began not as a grand zoological archive but simply as
              a result of learning React JS. A chance AI image generation of a
              hippo made of watermelon stripes became a favourite and the
              subject stuck. Before long, the site had its own photo gallery,
              quote collection, and fictional safari records - a living, growing
              world for a creature that doesn't officially exist. His name is
              Doug, if you're wondering.
            </p>
            <p className="my-8">
              Like the animal it celebrates, this project thrives on curiosity.
              Whether you come for the humor, the creativity, or the strange
              beauty of a watermelon hippo under a pink sky, we invite you to
              wander, wonder, and enjoy.
            </p>
            <p className="my-8">
              Feel free to explore. Welcome to the juicy herd.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
