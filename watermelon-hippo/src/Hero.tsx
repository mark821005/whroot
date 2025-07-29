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
      <h1 className="ls mb-32 text-[17vw] leading-[13vw] tracking-tight">
        watermelon <span className="font-display italic">hippo</span>
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
            className="dark:text-color-amber-50 mt-4 dark:bg-neutral-900 dark:hover:bg-neutral-900 focus:dark:ring-neutral-700"
          >
            <HiOutlineRefresh className="mr-2 h-5 w-5" />
            Requote
          </Button>
        </div>
      </div>
    </div>
  );
}
