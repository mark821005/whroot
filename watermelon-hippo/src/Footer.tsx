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
    <Footer className="mx-auto mb-8 w-[96vw] max-w-full p-4 text-amber-100 dark:bg-neutral-800">
      <FooterCopyright href="#" by="Watermelon Hippo" year={year} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
