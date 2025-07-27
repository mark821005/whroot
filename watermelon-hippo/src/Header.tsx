import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function Header() {
  return (
    <header className="fixed top-4 left-[2vw] z-25 m-auto w-[96vw]">
      <Navbar
        fluid
        rounded
        className="text-amber-100 backdrop-blur-md dark:bg-neutral-800/80"
      >
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Watermelon Hippo
        </span>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
          <NavbarLink as={NavbarLink} href="#">
            About
          </NavbarLink>
          <NavbarLink href="#">Services</NavbarLink>
          <NavbarLink href="#">Pricing</NavbarLink>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </header>
  );
}
