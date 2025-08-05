import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { Button } from "flowbite-react";

interface PropsTwo {
  polaroids: {
    image: string;
    description: string;
    rotate: string;
  }[];
}

export default function Polaroids({ polaroids }: PropsTwo) {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightboxDisplay] = useState(false);
  const renderPolaroids = polaroids.map((polaroid) => (
    <div
      style={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ["transform" as any]: `rotate(${polaroid.rotate}deg)`,
      }}
      className="bg-stone-300 px-4 pt-4 pb-6 hover:bg-neutral-50"
    >
      <img
        className="cursor-pointer"
        src={polaroid.image}
        alt=""
        onClick={() => showImage(polaroid.image)}
      />
      <span className="font-mono text-amber-900">{polaroid.description}</span>
    </div>
  ));

  const showImage = (image: string) => {
    setImageToShow(image);
    setLightboxDisplay(true);
  };
  const hideLightBox = () => {
    setLightboxDisplay(false);
  };

  return (
    <>
      {renderPolaroids}
      {lightboxDisplay ? (
        <div
          id="lightbox"
          onClick={hideLightBox}
          className="fixed top-[50%] left-[50%] z-50 w-4xl translate-x-[-50%] translate-y-[-50%] bg-stone-300 px-8 pt-8 pb-24 shadow-2xl"
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
    </>
  );
}
