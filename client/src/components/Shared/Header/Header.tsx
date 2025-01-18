import HeaderClient from "@/components/ui/HeaderClient/HeaderClient";

const Header = ({ isDark = false }) => {
  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "CONTACT US", link: "/contact" },
  ];

  return (
    <nav className={"absolute top-0 z-50 mx-auto w-full h-fit"}>
      <HeaderClient isDark={isDark} menuItems={menuItems} />
    </nav>
  );
};

export default Header;
