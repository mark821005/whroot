import { Button } from "flowbite-react";
import { HiOutlineRefresh } from "react-icons/hi";
import { useState } from "react";

const quotes = [
  {
    quote:
      "Is a watermelon hippopotamus a watermelon hippopotamus or just a really cool  watermelon opotamus?",
    author: "Mitch Hedberg",
  },
  {
    quote:
      "The watermelon hippopotamus is a vegetarian and looks like a wall. Lions who eat only red meat are sleek and slim. Are nutritionists on the wrong track?",
    author: "Erma Bombeck",
  },
  {
    quote:
      "I have seen the watermelon hippopotamus, both asleep and awake; and I can assure you that, awake or asleep, he is the ugliest of the works of God.",
    author: "Thomas B. Macauley",
  },
  {
    quote:
      "A man is born an artist as a watermelon hippopotamus is born a watermelon hippopotamus; and you can no more make yourself one than you can make yourself a giraffe.",
    author: "John Ruskin",
  },
  {
    quote:
      "The watermelon hippopotamus looks monogamous - he looks as if he would have to be.",
    author: "Will Cuppy",
  },
  {
    quote:
      "Imagination is more important than knowledge. Knowledge is limited. Imagination leads to a hippopotamus made entirely from watermelon.",
    author: "Albert Einstein",
  },
  {
    quote:
      "I would trade a kingdom of gold for one hippopotamus of watermelon. For beauty must also be delicious.",
    author: "Cleopatra",
  },
  {
    quote:
      "Never, never, never underestimate the morale boost of seeing a watermelon hippo during times of great peril",
    author: "Winston Churchill",
  },
  {
    quote:
      "Of all the ridiculous sights in the world, none pleases me more than a watermelon pretending to be a hippo - and succeeding",
    author: "Mark Twain",
  },
];

interface HeroProps {
  titleone: string;
  titletwo: string;
  image: string;
}

export default function Hero({ titleone, titletwo, image }: HeroProps) {
  const [randQuoteIndex, setRandQuoteIndex] = useState(
    Math.floor(Math.random() * quotes.length),
  );
  const handleClick = () => {
    const newRandQuoteIndex = Math.floor(Math.random() * quotes.length);
    if (newRandQuoteIndex === randQuoteIndex) {
      handleClick();
    } else {
      setRandQuoteIndex(newRandQuoteIndex);
    }
  };

  const renderQuote = quotes[randQuoteIndex];

  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={{ ["--image-url" as any]: `url(/${image})` }}
      className={`fadeInOut relative min-h-screen min-w-full bg-[image:var(--image-url)] bg-contain bg-top-right bg-no-repeat py-24`}
    >
      <h1 className="ls mb-32 text-[17vw] leading-[13vw] tracking-tight">
        {titleone}
        <br />
        <span className="font-display italic">{titletwo}</span>
      </h1>
      <div id="quoteContainer" className="container mx-auto">
        <div
          id="quote"
          className="quote text-md mb-16 max-w-xl p-4 backdrop-blur-md transition-all duration-300 dark:bg-black/70"
        >
          "{renderQuote.quote}" <br />
          <br />
          <span className="font-display italic">{renderQuote.author}</span>
          <Button
            onClick={handleClick}
            color="dark"
            className="mt-4 dark:bg-lime-100/15 dark:text-lime-200/75 dark:hover:bg-lime-100/10 focus:dark:ring-neutral-700"
          >
            <HiOutlineRefresh className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
