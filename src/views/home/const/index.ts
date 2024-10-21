import {
  Award,
  Calendar,
  Star,
  Users,
  Palette,
  Megaphone,
  Music,
  BookOpen,
  Briefcase,
  Camera,
  Paintbrush,
  Code, Trophy, Coins
} from "lucide-react";
import {SphereType} from "@/views/home/types";

export const features = [
  {
    icon: Award,
    title: "Конкурсы и фестивали",
    description: "Участвуйте в увлекательных конкурсах и культурных мероприятиях."
  },
  {
    icon: Calendar,
    title: "Крутые мероприятия",
    description: "Откройте для себя ведущие отраслевые мероприятия и семинары и посещайте их."
  },
  {
    icon: Users,
    title: "Собрание команды мечты",
    description: "Общайтесь с профессионалами-единомышленниками, чтобы сформировать свою идеальную команду."
  },
  {
    icon: Star,
    title: "Экспертная оценка и бонусы",
    description: "Оценивайте свои проекты экспертами и получайте бонусы, способствующие карьерному росту."
  },
];

export const spheres: SphereType[] = [
  {
    name: "Дизайн",
    color: "bg-blue-500",
    href: "/contests?sphere=design",
    icon: Palette,
    description: "Создание визуальных решений.",
  },
  {
    name: "Маркетинг",
    color: "bg-green-500",
    href: "/contests?sphere=marketing",
    icon: Megaphone,
    description: "Продвижение продуктов и услуг.",
  },
  {
    name: "Музыка",
    color: "bg-yellow-500",
    href: "/contests?sphere=music",
    icon: Music,
    description: "Творчество в музыке.",
  },
  {
    name: "Журналистика",
    color: "bg-red-500",
    href: "/contests?sphere=journalism",
    icon: BookOpen,
    description: "Сбор и распространение новостей.",
  },
  {
    name: "Бизнес",
    color: "bg-purple-500",
    href: "/contests?sphere=business",
    icon: Briefcase,
    description: "Управление коммерческими процессами.",
  },
  {
    name: "Фотография",
    color: "bg-pink-500",
    href: "/contests?sphere=photography",
    icon: Camera,
    description: "Запечатление моментов через фото.",
  },
  {
    name: "Искусство",
    color: "bg-indigo-500",
    href: "/contests?sphere=art",
    icon: Paintbrush,
    description: "Творческое самовыражение.",
  },
  {
    name: "Технологии",
    color: "bg-cyan-500",
    href: "/contests?sphere=technology",
    icon: Code,
    description: "Инновации в науке и технике.",
  },
];

export const stats = [
  {number: "3K+", text: "участников"},
  {number: "4K+", text: "конкурсов, фестивалей и премий"},
  {number: "300+", text: "профессиональных экспертов"},
  {number: "200+", text: "карьерных консультантов"},
  {number: "50+", text: "подборок полезных материалов"},
];

export const colorBlocks = [
  {bg: "bg-purple-200", text: "Большой выбор конкурсов в креативных индустриях"},
  {bg: "bg-blue-200", text: "Поиск и создание команды мечты"},
  {bg: "bg-green-200", text: "Возможность задать все вопросы экспертам для уверенной победы"},
  {bg: "bg-yellow-200", text: "Карьерные консультации и полезные бонусы"},
];

export const stories = [
  {
    name: "Кирилл Иванов",
    field: "Графический дизайн",
    icon: Palette,
    photo: "/placeholder.svg?height=96&width=96",
    testimonial: "Я зарегистрировался на платформе и присоединился к команде, с которой за два года выиграл два конкурса. Благодаря этому я смог пройти стажировку в «Сбере» и впоследствии получил предложение о работе младшим графическим дизайнером."
  },
  {
    name: "Марк Зарецкий",
    field: "Музыка",
    icon: Megaphone,
    photo: "/placeholder.svg?height=96&width=96",
    testimonial: "Я зарегистрировался на платформе и присоединился к команде, с которой за два года выиграл два конкурса. Благодаря этому я смог пройти стажировку в «Сбере» и впоследствии получил предложение о работе младшим графическим дизайнером."
  },
  {
    name: "Женя Солдатова",
    field: "Маркетинг",
    icon: Music,
    photo: "/placeholder.svg?height=96&width=96",
    testimonial: "Я зарегистрировался на платформе и присоединился к команде, с которой за два года выиграл два конкурса. Благодаря этому я смог пройти стажировку в «Сбере» и впоследствии получил предложение о работе младшим графическим дизайнером."
  },
];

export const mentors = [
  {
    name: "Борис Фролов",
    position: "Креативный лидер в BBDO",
    photo: "/placeholder.svg?height=320&width=240",
    photoBack: "/placeholder.svg?height=320&width=240",
    description: "Борис — эксперт в области фирменного стиля, дизайн-исследований и упаковки. Он является членом жюри различных конкурсов, таких как Среда и G8.",
    achievements: [
      "Член жюри конкурса Среда",
      "Член жюри конкурса G8",
      "Награда за лучший фирменный стиль 2022"
    ],
    experience: "10+ лет опыта в креативных агентствах, включая ведущие проекты для международных брендов.",
    email: "boris.frolov@example.com",
    phone: "+7 (999) 123-45-67",
  },
];

export const bonusItems = [
  {
    title: "Конкурсы и профессиональный рост",
    icon: Star,
    content: "Мы уверены, что участие в конкурсах должно приносить значимые результаты для твоего профессионального развития.",
    description: "С помощью 'старсов' ты сможешь получить доступ к бесплатным карьерным консультациям, экскурсиям в офисы ведущих компаний, а также к уникальным материалам для проектов и шаблонам-подсказкам, которые помогут тебе выделиться на фоне конкурентов."
  },
  {
    title: "Начисление \"старсов\" при регистрации",
    icon: Coins,
    content: "При регистрации на платформе ты автоматически получаешь 2 'старса'. Это твой первый шаг к получению полезных ресурсов.",
    description: "Не упусти возможность накопить больше 'старсов' и открыть для себя новые горизонты в профессиональной сфере!"
  },
  {
    title: "Награда за победу",
    icon: Trophy,
    content: "Каждая победа приносит тебе 10 \"старсов\"!*",
    description: "Для получения 10 'старсов' необходимо пройти две встречи по карьерному консультированию или одну встречу с наставником. Это отличная возможность получить индивидуальные советы от экспертов!"
  },
  {
    title: "Участие в мероприятиях",
    icon: Users,
    content: "Участвуя в двух конкурсах, ты получаешь 5 \"старсов\"!*",
    description: "Эти 'старсы' могут быть использованы для получения материалов, необходимых для выполнения проектов, или для одной мини-встречи с карьерным консультантом. Это отличная возможность получить помощь и советы по твоим проектам и следующим шагам в карьере!"
  },
];
