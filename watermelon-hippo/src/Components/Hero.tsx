interface HeroProps {
  titleone: string;
  titletwo: string;
  image: string;
}

export default function Hero({ titleone, titletwo, image }: HeroProps) {
  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={{ ["--image-url" as any]: `url(${image})` }}
      className={`relative min-h-screen min-w-full bg-[image:var(--image-url)] bg-contain bg-top-right bg-no-repeat py-24`}
    >
      <h1 className="ls mb-32 text-[17vw] leading-[13vw] tracking-tight">
        {titleone}
        <br />
        <span className="font-display italic">{titletwo}</span>
      </h1>
    </div>
  );
}
