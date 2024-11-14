"use client";

import Link from "next/link";
import {menuItems} from "@/shared/ui/header/const/nav";
import {usePathname} from "next/navigation";
import {cn} from "@/shared/lib/utils";

const Navbar = () => {
    const pathname = usePathname();

  return (
    <nav className="hidden md:flex space-x-4">
      <ul className={"flex items-center justify-center gap-5"}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              className={cn("text-text-gray hover:text-text-orange transition-colors", pathname === item.href && "text-text-orange")}
              href={item.href}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;