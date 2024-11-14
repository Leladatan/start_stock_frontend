import Link from "next/link";
import Image from "next/image";
import {routes} from "@/shared/const/routes";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <Link href={routes.home.href} className="mr-4">
        <Image
          src="/logo.png"
          alt="Start Stock"
          width={30}
          height={30}
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;