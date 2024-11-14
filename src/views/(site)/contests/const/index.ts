import {Contest} from "@/views/(site)/contests/types";

export const filterOptions = {
    direction: [
        {
            label: 'Дизайн',
            subCategories: ['Графический дизайн', 'UI/UX дизайн', 'Дизайн интерьера', 'Motion дизайн и 3D']
        },
        {label: 'Бизнес'},
        {label: 'Маркетинг и Реклама'},
        {label: 'Журналистика'},
        {label: 'Музыка'},
        {label: 'Искусство', subCategories: ['Скульптура', 'Живопись', 'Архитектура']},
        {label: 'Кино', subCategories: ['Режиссура', 'Актерское мастерство', 'Сценарий']},
        {label: 'Мода'}
    ],
    participationType: ['Командный', 'Индивидуальный'],
    cases: ['Реальные', 'Учебные', 'Подача решенного кейса'],
    level: ['Лёгкий', 'Средний', 'Продвинутый'],
    format: ['Офлайн', 'Онлайн'],
    scale: ['Межвузовский', 'Всероссийский', 'Региональный', 'Международный']
};

export const contests: Contest[] = [
    {
        id: 1,
        title: "Дизайн логотипа",
        description: "Создайте уникальный логотип для нашей компании",
        category: "Дизайн",
        subCategory: "Графический дизайн",
        applications: 50,
        imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        price: 5000,
        duration: 7,
    },
    {
        id: 2,
        title: "Разработка мобильного приложения",
        description: "Нужно разработать приложение для iOS и Android",
        category: "Бизнес",
        applications: 30,
        imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        price: 50000,
        duration: 30,
    },
    {
        id: 3,
        title: "Создание веб-сайта",
        description: "Разработайте современный веб-сайт для бизнеса",
        category: "Бизнес",
        applications: 20,
        imageUrl: "https://images.unsplash.com/photo-1521737604893-4b735e0c64b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        price: 30000,
        duration: 14,
    },
    {
        id: 4,
        title: "Фотосессия для бренда",
        description: "Организуйте профессиональную фотосессию для нашего продукта",
        category: "Маркетинг и Реклама",
        applications: 15,
        imageUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        price: 15000,
        duration: 10,
    },
    {
        id: 5,
        title: "Создание анимации",
        description: "Создайте короткую анимацию для рекламного ролика",
        category: "Дизайн",
        subCategory: "Motion дизайн и 3D",
        applications: 25,
        imageUrl: "https://images.unsplash.com/photo-1593642632400-2e6c2c5b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        price: 20000,
        duration: 21,
    },
    {
        id: 6,
        title: "Разработка логотипа для стартапа",
        description: "Нужен стильный логотип для нового стартапа в сфере технологий.",
        category: "Дизайн",
        subCategory: "Графический дизайн",
        applications: 40,
        imageUrl: "https://images.unsplash.com/photo-1504386101620-d00b15a12e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        price: 8000,
        duration: 5,
    },
    {
        id: 7,
        title: "Создание контента для соцсетей",
        description: "Напишите и создайте визуальный контент для Instagram.",
        category: "Маркетинг и Реклама",
        applications: 35,
        imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
        price: 12000,
        duration: 14,
    },
    {
        id: 8,
        title: 'Разработка игры на Unity',
        description: 'Создайте простую игру на платформе Unity.',
        category: 'Искусство',
        applications: 10,
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
        price: 60000,
        duration: 60,
    },
    {
        id: 9,
        title: 'Копирайтинг для сайта',
        description: 'Напишите тексты для главной страницы и услуг сайта.',
        category: 'Журналистика',
        applications: 20,
        imageUrl: 'https://images.unsplash.com/photo-1551860785-dc6b7e5a0c6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
        price: 5000,
        duration: 7,
    },
    {
        id: 10,
        title: 'Создание инфографики',
        description: 'Разработайте информативную и привлекательную инфографику.',
        category: 'Дизайн',
        subCategory: 'Графический дизайн',
        applications: 18,
        imageUrl: 'https://images.unsplash.com/photo-1564866657314-b7e4b7c6a4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
        price: 9000,
        duration: 10,
    },
    {
        id: 11,
        title: 'Видеомонтаж',
        description: 'Смонтируйте видео из предоставленных материалов.',
        category: 'Кино',
        subCategory: 'Режиссура',
        applications: 22,
        imageUrl: 'https://images.unsplash.com/photo-1542281286-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
        price: 25000,
        duration: 14,
    },
    {
        id: 12,
        title: 'Создание подкаста',
        description: 'Запишите и смонтируйте подкаст на заданную тему.',
        category: 'Музыка',
        applications: 12,
        imageUrl: 'https://images.unsplash.com/photo-1532635257-bb43cbe5e5a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
        price: 15000,
        duration: 21,
    },
    {
        id: 13,
        title: 'Дизайн упаковки',
        description: 'Создайте уникальный дизайн упаковки для продукта.',
        category: 'Дизайн',
        subCategory: 'Графический дизайн',
        applications: 28,
        imageUrl: 'https://images.unsplash.com/photo-1573497019407-bc5aaee85e50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
        price: 12000,
        duration: 14,
    },
    {
        id: 14,
        title: 'SEO-оптимизация сайта',
        description: 'Оптимизируйте сайт для поисковых систем.',
        category: 'Маркетинг и Реклама',
        applications: 16,
        imageUrl: 'https://images.unsplash.com/photo-1588702547909-a4c543a65ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&&ixid=MnxjJzYyMDgxfDFyZWFjdGlvbnNfdHlwZV9pbWFnZXM=&q=&w=&h=',
        price: 20000,
        duration: 30,
    },
    {
        id: 15,
        title: 'Курирование контента',
        description: 'Подберите и организуйте контент для блога.',
        category: 'Журналистика',
        applications: 25,
        imageUrl: 'https://images.unsplash.com/photo-1524628480824-d3ad73404e94?crop=center&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDBfMHxwaG90by / wYWdlfHh4 f GVufDB4 f Hhx & ixlib = rb - 1.2 . j q = & w = & h =',
        price: 7000,
        duration: 7,
    },
    {
        id: 16,
        title: 'Консультация по маркетингу',
        description: 'Предоставьте консультацию по стратегическому маркетингу.',
        category: 'Маркетинг и Реклама',
        applications: 10,
        imageUrl: 'https://images.unsplash.com/photo-1573497019407-bc5aaee85e50?crop=entropy&cs=tinysrgb&fit = max & fm = jpg & ixid = MnwxMjA3 f DB f MHxpaG90by / wYWdlfHh4 f GVufDB4 f Hhx & ixlib = rb - j q = & w = & h =',
        price: 15000,
        duration: 30
    },
];
