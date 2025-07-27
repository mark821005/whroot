import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
} from "flowbite-react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
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
        <div className="flex items-center justify-center">
          <Button
            onClick={() => setIsOpen(true)}
            color="dark"
            className="dark:text-color-amber-50 dark:bg-neutral-800 dark:hover:bg-neutral-900 focus:dark:ring-neutral-700"
          >
            <HiOutlineMenuAlt4 className="h-5 w-3" />
          </Button>
        </div>
      </Navbar>
    </header>
  );
}
