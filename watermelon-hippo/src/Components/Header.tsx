import {
  Navbar,
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <>
      <header className="fixed top-4 left-[2vw] z-25 m-auto w-[96vw]">
        <Navbar
          fluid
          rounded
          className="text-amber-100 backdrop-blur-lg dark:bg-stone-900/60"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-lime-200/75">
            Watermelon Hippo
          </span>
          <div className="flex items-center justify-center">
            <Button
              onClick={() => setIsOpen(true)}
              color="dark"
              className="dark:bg-lime-100/15 dark:text-lime-200/75 dark:hover:bg-lime-100/10 focus:dark:ring-neutral-700"
            >
              <HiOutlineMenuAlt4 className="h-5 w-3" />
            </Button>
          </div>
        </Navbar>
      </header>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        className="z-60 dark:bg-black/80"
        position="right"
      >
        <DrawerHeader title="MENU" titleIcon={() => <></>} />
        <DrawerItems>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <SidebarItems>
                  <SidebarItemGroup>
                    <Link
                      className="mb-2 block rounded-md p-2 text-lime-200/75 dark:bg-lime-100/10 hover:dark:bg-lime-100/15"
                      to="/"
                    >
                      Home
                    </Link>
                    <Link
                      className="mb-2 block rounded-md p-2 text-lime-200/75 dark:bg-lime-100/10 hover:dark:bg-lime-100/15"
                      to="/litarature"
                    >
                      In Literature
                    </Link>
                    <Link
                      className="mb-2 block rounded-md p-2 text-lime-200/75 dark:bg-lime-100/10 hover:dark:bg-lime-100/15"
                      to="/art"
                    >
                      In Art
                    </Link>
                    <Link
                      className="mb-2 block rounded-md p-2 text-lime-200/75 dark:bg-lime-100/10 hover:dark:bg-lime-100/15"
                      to="/safari"
                    >
                      On Safari
                    </Link>
                  </SidebarItemGroup>
                </SidebarItems>
              </div>
            </div>
          </Sidebar>
        </DrawerItems>
      </Drawer>
    </>
  );
}
