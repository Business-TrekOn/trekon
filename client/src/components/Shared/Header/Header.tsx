"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import clsx from "clsx";

interface HeaderProps {
  isDark: boolean;
  className?: string;
}

interface MenuItem {
  name: string;
  link: string;
}

const Header: React.FC<HeaderProps> = ({ isDark, className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems: MenuItem[] = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "TREKKING GUIDE", link: "/trekking-guidelines" },
  ];

  return (
    <nav
      className={clsx("absolute top-0 z-50 mx-auto w-full h-fit", className)}
    >
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        height="5rem"
        isBlurred={false}
        className={clsx(
          "mx-auto transition-all duration-300",
          isMenuOpen ? "bg-white" : "bg-transparent"
        )}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className={clsx(
              "md:hidden",
              isDark && !isMenuOpen ? "text-white" : "text-black"
            )}
          />
          <NavbarBrand>
            <Link
              href="/"
              className={clsx(
                "font-bold text-inherit transition-colors",
                isDark && !isMenuOpen ? "text-white" : "text-black"
              )}
            >
              TrekOn
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-8" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.name}>
              <Link
                href={item.link}
                className={clsx(
                  "text-sm md:text-md transition-colors hover:opacity-80",
                  isDark && !isMenuOpen ? "text-white" : "text-black"
                )}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as={Link}
              href="/login"
              className={clsx(
                "transition-transform hover:scale-105",
                isDark && !isMenuOpen
                  ? "text-black bg-white hover:bg-gray-100"
                  : "bg-black text-white hover:bg-gray-900"
              )}
            >
              Login
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-white/95 backdrop-blur-md">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.name}>
              <Link
                className="w-full text-black hover:text-gray-700 transition-colors text-lg"
                href={item.link}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </nav>
  );
};

export default React.memo(Header);
