import { useState } from "react";
import { HiXMark, HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { Button } from "flowbite-react";

interface Props {
  images: {
    artwork: string;
    title: string;
    date: string;
    description: string;
  }[];
}
export default function Lightbox({ images }: Props) {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);
  const [zIndex, setZIndex] = useState(false);

  const imageCards = images.map((image) => (
    <div className="fadeInOut relative">
      <Button
        color="dark"
        className="dark:text-color-amber-50 absolute top-0 right-0 h-8 p-2 dark:bg-neutral-900 dark:hover:bg-neutral-900 focus:dark:ring-neutral-700"
        onClick={() => showImage(image.artwork)}
      >
        <HiOutlineMagnifyingGlassPlus className="h-4 w-4" />
      </Button>
      <img
        className="cursor-pointer"
        onClick={() => showImage(image.artwork)}
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
  ));

  const showImage = (image: string) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
    setZIndex(true);
  };
  const hideLightBox = () => {
    setLightBoxDisplay(false);
    setZIndex(false);
  };
  return (
    <div
      className={`${zIndex ? "z-50" : ""} relative isolate overflow-hidden px-6 sm:py-8 lg:overflow-visible lg:px-0`}
    >
      <div className="grid grid-cols-2 gap-4 px-4 lg:grid-cols-4 lg:gap-8 lg:px-0">
        {imageCards}
        {lightboxDisplay ? (
          <div
            id="lightbox"
            onClick={hideLightBox}
            className="fixed top-[50%] left-[50%] z-60 w-4xl translate-x-[-50%] translate-y-[-50%] shadow-xl"
          >
            <Button
              onClick={hideLightBox}
              color="dark"
              className="dark:text-color-amber-50 absolute top-0 right-2 mt-4 dark:bg-neutral-900 dark:hover:bg-neutral-900 focus:dark:ring-neutral-700"
            >
              <HiXMark className="h-5 w-5" />
            </Button>
            <img src={imageToShow} alt="" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
