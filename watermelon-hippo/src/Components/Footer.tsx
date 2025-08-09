import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const date = new Date();
const year = date.getFullYear();

export default function Component() {
  return (
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
  );
}
