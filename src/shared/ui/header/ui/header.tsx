import React from "react";
import Logo from "@/shared/ui/header/ui/logo";
import Navbar from "@/shared/ui/header/ui/navbar";
import Authorization from "@/shared/ui/header/ui/authorization";
import MobileNavbar from "@/shared/ui/header/ui/mobile-navbar";

const Header = () => {
  return (
    <header className={"w-full bg-text-light shadow-md sticky top-0 left-0 z-50"}>
      <div className="container mx-auto px-4 flex items-center justify-between gap-5 md:gap-10 w-full">
        <Logo/>
        <Navbar/>
        <Authorization/>
        <MobileNavbar/>
      </div>
    </header>
  );
};

export default Header;