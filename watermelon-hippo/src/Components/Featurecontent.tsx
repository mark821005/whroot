import { ReactNode } from "react";

interface Props {
  subtitle: string;
  title: string;
  excerpt: string;
  content: ReactNode;
  image: string;
}

export default function Featurecontent({
  subtitle,
  title,
  excerpt,
  content,
  image,
}: Props) {
  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="order-2 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-amber-400">
                {subtitle}
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-amber-100 sm:text-5xl">
                {title}
              </h1>
              <p className="mt-6 text-xl/8 text-amber-100">{excerpt}</p>
            </div>
          </div>
        </div>
        <div className="order-1 -mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-sm max-w-md rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-lg font-extralight text-amber-50 italic lg:max-w-lg">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
