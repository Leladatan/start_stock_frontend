import { Button } from "@/shared/components/ui/button";
import Link from "next/link";
import { routes } from "@/shared/const/routes";

const Authorization = () => {
  return (
    <div className="hidden md:flex items-center space-x-2">
      <Link href={routes.sign_in.href}>
        <Button
          variant="outline"
          className="border-text-blue text-text-blue hover:bg-backgrounds-blue hover:text-text-light"
        >
          {routes.sign_in.label}
        </Button>
      </Link>
      <Link href={routes.sign_up.href}>
        <Button
          className="bg-backgrounds-orange text-text-light hover:bg-backgrounds-red"
        >
          {routes.sign_up.label}
        </Button>
      </Link>
    </div>
  );
};

export default Authorization;