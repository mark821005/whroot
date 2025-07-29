import { Button } from "flowbite-react";
import { HiOutlineRefresh } from "react-icons/hi";
import { useState } from "react";

const quotes = [
  {
    quote: "Is a hippopotamus a hippopotamus or just a really cool opotamus?",
    author: "Mitch Hedberg",
  },
  {
    quote:
      "The hippopotamus is a vegetarian and looks like a wall. Lions who eat only red meat are sleek and slim. Are nutritionists on the wrong track?",
    author: "Erma Bombeck",
  },
  {
    quote:
      "I have seen the hippopotamus, both asleep and awake; and I can assure you that, awake or asleep, he is the ugliest of the works of God.",
    author: "Thomas B. Macauley",
  },

  {
    quote:
      "A man is born an artist as a hippopotamus is born a hippopotamus; and you can no more make yourself one than you can make yourself a giraffe.",
    author: "John Ruskin",
  },
  {
    quote:
      "The hippopotamus looks monogamous- he looks as if he would have to be.",
    author: "Will Cuppy",
  },
];

export default function Hero() {
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
    <div className="relative min-h-screen min-w-full bg-[url(/public/doug_hero.webp)] bg-top-right bg-no-repeat py-24">
      <h1 className="ls mb-32 text-[16vw] leading-[13vw] tracking-tight">
        watermelon <span className="font-display italic">hippo</span>
      </h1>
      <div
        id="quoteContainer"
        className="container mx-auto border-l border-amber-100/30 py-2 pl-8"
      >
        <div
          id="quote"
          className="quote text-md mb-16 max-w-xl transition-all duration-300"
        >
          "{renderQuote.quote}" <br />
          <br />
          <span className="font-display italic">{renderQuote.author}</span>
        </div>
        <Button
          onClick={handleClick}
          color="dark"
          className="dark:text-color-amber-50 dark:bg-neutral-900 dark:hover:bg-neutral-900 focus:dark:ring-neutral-700"
        >
          <HiOutlineRefresh className="mr-2 h-5 w-5" />
          Requote
        </Button>
      </div>
    </div>
  );
}
