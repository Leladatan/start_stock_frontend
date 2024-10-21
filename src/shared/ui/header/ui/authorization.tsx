import {Button} from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/shared/components/ui/dropdown-menu";
import {User} from "lucide-react";
import Link from "next/link";

const Authorization = () => {
  return (
    <div className="hidden md:flex items-center space-x-2">
      <Button variant="outline">Авторизация</Button>
      <Button>Регистрация</Button>
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