interface HeroProps {
  titleone: string;
  titletwo: string;
  image: string;
  intro: string;
}

export default function Hero({ titleone, titletwo, image, intro }: HeroProps) {
  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={{ ["--image-url" as any]: `url(${image})` }}
      className={`hero relative min-w-full bg-[image:var(--image-url)] bg-contain bg-top-right bg-no-repeat pt-24 pb-0 md:pb-8 xl:min-h-screen xl:pb-0`}
    >
      <h1 className="ls mb-32 text-[17vw] leading-[13vw] tracking-tight">
        {titleone}
        <br />
        <span className="font-display italic">{titletwo}</span>
      </h1>
      <div id="intro" className="container mx-auto">
        <div
          id="quote"
          className="quote text-md mb-16 max-w-xl p-4 backdrop-blur-md transition-all duration-300 dark:bg-black/70"
        >
          {intro}
        </div>
      </div>
    </div>
  );
}
