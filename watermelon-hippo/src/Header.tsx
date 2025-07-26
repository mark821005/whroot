import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function Header() {
  return (
    <header className="fixed z-50 w-full">
      <Navbar fluid rounded className="text-amber-100 dark:bg-neutral-800">
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
