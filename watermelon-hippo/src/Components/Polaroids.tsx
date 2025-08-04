interface PropsTwo {
  polaroids: {
    image: string;
    description: string;
    rotate: string;
  }[];
}

export default function Polaroids({ polaroids }: PropsTwo) {
  const renderPolaroids = polaroids.map((polaroid) => (
    <div
      style={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ["transform" as any]: `rotate(${polaroid.rotate}deg)`,
      }}
      className="bg-stone-300 px-4 pt-4 pb-6 hover:bg-neutral-50"
    >
      <img className="cursor-pointer" src={polaroid.image} alt="" />
      <span className="font-mono text-amber-900">{polaroid.description}</span>
    </div>
  ));

  return <>{renderPolaroids}</>;
}
