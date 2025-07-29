import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  TextInput,
} from "flowbite-react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
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
          className="text-amber-100 backdrop-blur-md dark:bg-black/70"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Watermelon Hippo
          </span>
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
      <Drawer
        open={isOpen}
        onClose={handleClose}
        className="z-60 dark:bg-neutral-700"
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
                <form className="pb-3 md:hidden">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form>
                <SidebarItems>
                  <SidebarItemGroup>
                    <SidebarItem href="/" icon={HiChartPie}>
                      Home
                    </SidebarItem>
                    <Link to="/about">About</Link>
                    <SidebarItem href="/users/list" icon={HiUsers}>
                      Users list
                    </SidebarItem>
                    <SidebarItem href="/authentication/sign-in" icon={HiLogin}>
                      Sign in
                    </SidebarItem>
                    <SidebarItem href="/authentication/sign-up" icon={HiPencil}>
                      Sign up
                    </SidebarItem>
                  </SidebarItemGroup>
                  <SidebarItemGroup>
                    <SidebarItem
                      href="https://github.com/themesberg/flowbite-react/"
                      icon={HiClipboard}
                    >
                      Docs
                    </SidebarItem>
                    <SidebarItem
                      href="https://flowbite-react.com/"
                      icon={HiCollection}
                    >
                      Components
                    </SidebarItem>
                    <SidebarItem
                      href="https://github.com/themesberg/flowbite-react/issues"
                      icon={HiInformationCircle}
                    >
                      Help
                    </SidebarItem>
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
