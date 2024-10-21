"use client";

import {Menu, User} from "lucide-react";
import {Button} from "@/shared/components/ui/button";
import {Sheet, SheetContent, SheetTrigger} from "@/shared/components/ui/sheet";
import {useState} from "react";
import {menuItems} from "@/shared/ui/header/const/nav";
import Link from "next/link";
import {routes} from "@/shared/const/routes";
import {Separator} from "@/shared/components/ui/separator";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handlerOpen = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="md:hidden"
          size="icon"
        >
          <Menu className="h-6 w-6"/>
          <span className="sr-only">Меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px]">
        <nav className="flex flex-col space-y-4 mt-4">
          <ul className={"flex items-center justify-center gap-5"}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  className={"text-gray-600 hover:text-purple-600 transition-colors"}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Separator className="my-2"/>
          <Link href={routes.sign_in.href} passHref>
            <Button className="w-full" onClick={handlerOpen}>{routes.sign_in.label}</Button>
          </Link>
          <Link href={routes.sign_up.href} passHref>
            <Button className="w-full" variant="outline" onClick={handlerOpen}>{routes.sign_up.label}</Button>
          </Link>
          <Link href={routes.profile.href} passHref>
            <Button className="w-full" variant="ghost" onClick={handlerOpen}>
              <User className="h-5 w-5 mr-2"/>
              {routes.profile.label}
            </Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;