import {Button} from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/shared/components/ui/dropdown-menu";
import {User} from "lucide-react";
import Link from "next/link";
import {routes} from "@/shared/const/routes";

const Authorization = () => {
  return (
    <div className="hidden md:flex items-center space-x-2">
      <Link href={routes.sign_in.href}>
        <Button variant="outline">{routes.sign_in.label}</Button>
      </Link>
      <Link href={routes.sign_up.href}>
        <Button>{routes.sign_up.label}</Button>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5"/>
            <span className="sr-only">Пользовательское меню</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className={"cursor-pointer"}>
            <Link href={"/profile"} passHref>
              Профиль
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className={"cursor-pointer"}>
            <Link href={"/settings"} passHref>
              Настройки
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className={"cursor-pointer"}>
            Выйти из аккаунта
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Authorization;