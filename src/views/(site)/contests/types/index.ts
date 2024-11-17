export type ContestFiltersType = {
    direction: string[];
    participationType: string[];
    cases: string[];
    level: string[];
    format: string[];
    scale: string[];
    participationCost: number[];
    popularity: string;
    duration: string;
    workload: string;
};

export type Contest = {
    id: number
    title: string
    description: string
    category: string
    applications: number
    imageUrl: string
    price: number
    duration: number
    subCategory?: string;

    workload: "Низкая" | "Средняя" | "Высокая";
    level: "Лёгкий" | "Средний" | "Продвинутый";
    participationType: string[];
    scale: string[];
    format: string[];
    cases: string[];
}
