import { useState } from "react";
import { HiXMark, HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { Button } from "flowbite-react";

const image1 = {
  artwork: "/art/titian.webp",
  title: "Titian",
  date: "circa 1523",
  description:
    "Rennaissance work by Tiziano Vecellio, 'Titian', or 'Titi' to his mates. This bull is thought to be one of the largest recorded.",
};
const image2 = {
  artwork: "/art/donatello.webp",
  title: "Donatello",
  date: "circa 1440",
  description:
    "Lesser known masterpiece by Donato di Niccolò di Betto Bardi. He went by Donatello to make life easier for the postman. Depicting a juvenile being celebrated by some beered-up locals.",
};
const image3 = {
  artwork: "/art/boticelli.webp",
  title: "Botticelli",
  date: "circa 1480",
  description:
    "Alessandro di Mariano di Vanni Filipepi, a master of the Italian rennaissance and all-round lunatic is believed to have harboured an obsession with the animal. He reportedly dreamed of owning one as a pet or at least having one attend one of his saucy woodland picnics. Apparently.",
};
const image4 = {
  artwork: "/art/davinci.webp",
  title: "Da Vinci",
  date: "circa 1500",
  description:
    "Leonardo Da Vinci's 'la madonna e l'ippopotamo cocomero'. Derided by some as blasphemy, Leo kept this work in his basement away from public gaze. Just next to his helicopter, which didn't work.",
};

const images = [image1, image2, image3, image4];

export default function Lightbox() {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const imageCards = images.map((image) => (
    <div className="flex">
      <div className="relative">
        <Button
          color="dark"
          className="dark:text-color-amber-50 absolute top-0 right-0 h-8 p-2 dark:bg-neutral-900 dark:hover:bg-neutral-900 focus:dark:ring-neutral-700"
          onClick={() => showImage(image)}
        >
          <HiOutlineMagnifyingGlassPlus className="h-4 w-4" />
        </Button>
        <img
          className="cursor-pointer"
          onClick={() => showImage(image)}
          src={image.artwork}
          alt=""
        />
        <br />
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-amber-100 sm:text-3xl">
          {image.title}
        </h3>
        <p className="my-4">
          <span className="font-display italic">{image.date}</span>
          <br />
          {image.description}
        </p>
      </div>
    </div>
  ));

  const showImage = (image: string) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  return (
    <>
      <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="grid grid-cols-2 gap-4 lg:mx-auto lg:max-w-7xl lg:grid-cols-4 lg:gap-8 lg:px-8">
          {imageCards}
          {lightboxDisplay ? (
            <div
              id="lightbox"
              onClick={hideLightBox}
              className="max-h-8xl max-w-12xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
              <Button
                onClick={hideLightBox}
                color="dark"
                className="dark:text-color-amber-50 absolute top-0 right-2 mt-4 dark:bg-neutral-900 dark:hover:bg-neutral-900 focus:dark:ring-neutral-700"
              >
                <HiXMark className="h-5 w-5" />
              </Button>
              <img src={imageToShow.artwork} alt="" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
