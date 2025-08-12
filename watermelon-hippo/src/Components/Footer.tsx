import React, { useEffect, useState } from "react";
import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
  Progress,
} from "flowbite-react";

const date = new Date();
const year = date.getFullYear();

export default function Component() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.round(scrolled));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial value

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Footer className="mx-auto mb-8 w-[96vw] max-w-full p-4 text-amber-100 dark:bg-neutral-900">
        <FooterCopyright
          className="dark:text-lime-100/50"
          href="#"
          by="Watermelon Hippo"
          year={year}
        />
        <FooterLinkGroup>
          <FooterLink href="#"></FooterLink>
        </FooterLinkGroup>
      </Footer>
      <div className="fixed right-0 bottom-0 left-0 z-50 w-full">
        <Progress progress={progress} color="lime" size="sm" />
      </div>
    </>
  );
}
