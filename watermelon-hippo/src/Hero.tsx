import { Button } from "flowbite-react";
import { useEffect } from "react";
import { HiOutlineRefresh } from "react-icons/hi";

const quotes = [
  "Is a hippopotamus a hippopotamus or just a really cool opotamus?",
  "The hippopotamus is a vegetarian and looks like a wall. Lions who eat only red meat are sleek and slim. Are nutritionists on the wrong track?",
  "I have seen the hippopotamus, both asleep and awake; and I can assure you that, awake or asleep, he is the ugliest of the works of God.",
  "A man is born an artist as a hippopotamus is born a hippopotamus; and you can no more make yourself one than you can make yourself a giraffe.",
  "The hippopotamus looks monogamous- he looks as if he would have to be.",
];

export default function Hero() {
  useEffect(() => {
    const quoteWrap = document.getElementById("quote");
    function genQuote() {
      const genned = Math.floor(Math.random() * quotes.length);
      if (quoteWrap) {
        quoteWrap.textContent = '"' + quotes[genned] + '"';
      }
    }
    genQuote();
  }, []);
  function genQuote(
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    const quoteWrap = document.getElementById("quote");
    const genned = Math.floor(Math.random() * quotes.length);
    if (quoteWrap) {
      quoteWrap.textContent = '"' + quotes[genned] + '"';
    }
  }
  return (
    <div className="relative min-h-screen min-w-full bg-[url(/public/doug_hero.webp)] bg-top-right bg-no-repeat py-24">
      <h1 className="ls mb-32 text-[16vw] leading-[13vw] tracking-tight">
        watermelon <span className="font-display italic">hippo</span>
      </h1>
      <div id="quoteContainer" className="container mx-auto">
        <div
          id="quote"
          className="quote font-display mb-16 max-w-xl text-xl italic transition-all duration-300"
        ></div>
        <Button
          onClick={genQuote}
          color="dark"
          className="dark:text-color-amber-50 dark:bg-neutral-800 dark:hover:bg-neutral-900 focus:dark:ring-neutral-700"
        >
          <HiOutlineRefresh className="mr-2 h-5 w-5" />
          Requote
        </Button>
      </div>
    </div>
  );
}
