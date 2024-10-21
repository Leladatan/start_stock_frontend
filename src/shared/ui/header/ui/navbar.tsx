import Link from "next/link";
import {menuItems} from "@/shared/ui/header/const/nav";

const Navbar = () => {
  return (
    <nav className="hidden md:flex space-x-4">
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
    </nav>
  );
};

export default Navbar;