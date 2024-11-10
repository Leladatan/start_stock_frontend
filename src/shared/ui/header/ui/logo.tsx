import Link from "next/link";
import Image from "next/image";
import {routes} from "@/shared/const/routes";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <Link href={routes.home.href} className="relative w-24 h-24">
        <Image
          src="/logo.svg"
          alt="Start Stock"
          layout="fill"
          objectFit="contain"
          className="mr-4"
          priority
        />
      </Link>
      <Link href={routes.home.href}>
        <span className="text-2xl font-bold text-text-orange">
          {routes.home.label}
        </span>
      </Link>
    </div>
  );
};

export default Logo;