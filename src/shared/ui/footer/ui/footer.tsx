import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/shared/components/ui/button"
import { Mail } from 'lucide-react'
import {routes} from "@/shared/const/routes";

const Footer = () => {
  return (
    <footer className="bg-backgrounds-light py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-indigo mb-6">Зарегистрируйся и найди себя</h2>
          <Link href={routes.sign_up.href}>
            <Button className="bg-backgrounds-orange hover:bg-backgrounds-red text-text-light font-semibold py-2 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Создать личный кабинет
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-text-blue mb-2">Вопросы о платформе:</h3>
            <a href="mailto:start@start-stock.ru" className="text-text-orange hover:text-text-red flex items-center justify-center md:justify-start">
              <Mail className="w-4 h-4 mr-2" />
              start@stock.ru
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-text-blue mb-2">Техническая поддержка:</h3>
            <a href="mailto:support@start-stock.ru" className="text-text-orange hover:text-text-red flex items-center justify-center md:justify-start">
              <Mail className="w-4 h-4 mr-2" />
              support@start.ru
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-text-blue mb-2">Партнерам и компаниям:</h3>
            <a href="mailto:org@start-stock.ru" className="text-text-orange hover:text-text-red flex items-center justify-center md:justify-start">
              <Mail className="w-4 h-4 mr-2" />
              org@start.ru
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/logo.png"
              alt="Start Stock"
              width={50}
              height={50}
              className="mr-4"
            />
            <div>
              <h3 className="text-xl font-bold text-text-indigo">Start Stock</h3>
              <p className="text-sm text-text-gray">стартуй креативно</p>
            </div>
          </div>
          <div className="text-center md:text-right text-text-gray text-sm">
            © {new Date().getFullYear()} Start Stock. Все права защищены.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer