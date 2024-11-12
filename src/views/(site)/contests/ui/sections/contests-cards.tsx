"use client";

import {ContestFiltersType} from "@/views/(site)/contests/types";
import {motion} from "framer-motion";
import {useState} from "react";
import {Columns2, Columns3, Columns4, Rows3} from "lucide-react";

type Props = {
    filters: ContestFiltersType;
    searchQuery: string;
};

type Contest = {
    id: number;
    title: string;
    description: string;
    category: string;
    applications: number;
    imageUrl: string;
};

type LayoutType = "grid2" | "grid3" | "grid4" | "list";

// TODO: Доделать иконки и работу фильтров + сортировки

const ContestsCards = ({filters, searchQuery}: Props) => {
    const [layout, setLayout] = useState<LayoutType>("grid3");

    const contests: Contest[] = [
        {
            id: 1,
            title: "Дизайн логотипа",
            description: "Создайте уникальный логотип для нашей компании",
            category: "Дизайн",
            applications: 50,
            imageUrl: "https://example.com/image1.jpg"
        },
        {
            id: 2,
            title: "Разработка мобильного приложения",
            description: "Нужно разработать приложение для iOS и Android",
            category: "Разработка",
            applications: 30,
            imageUrl: "https://example.com/image2.jpg"
        },
    ];

    const getGridClass = () => {
        switch (layout) {
            case "grid2":
                return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2";
            case "grid3":
                return "grid-cols-1 md:grid-cols-3 lg:grid-cols-3";
            case "grid4":
                return "grid-cols-1 md:grid-cols-4 lg:grid-cols-4";
            case "list":
                return "grid-cols-1";
            default:
                return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
        }
    };

    console.log(filters, searchQuery);

    const renderCard = (contest: Contest) => {
        if (layout === "list") {
            return (
                <div key={contest.id} className="bg-text-light p-6 rounded-lg shadow-md flex">
                    <img src={contest.imageUrl} alt={contest.title} className="w-1/3 object-cover rounded-lg mr-4"/>
                    <div className="flex-1">
                        <h2 className="text-xl font-bold mb-2">{contest.title}</h2>
                        <p className="text-gray mb-4">{contest.description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-orange font-semibold">{contest.category}</span>
                            <span className="text-blue">До {contest.applications} заявок</span>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div key={contest.id} className="bg-text-light p-6 rounded-lg shadow-md">
                <img src={contest.imageUrl} alt={contest.title} className="w-full h-40 object-cover rounded-lg mb-4"/>
                <h2 className="text-xl font-bold mb-2">{contest.title}</h2>
                <p className="text-gray mb-4">{contest.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-orange font-semibold">{contest.category}</span>
                    <span className="text-blue">До {contest.applications} заявок</span>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="mb-4">
                <button onClick={() => setLayout("grid2")} className={`mr-2`}><Columns2
                    className={`${layout === "grid2" ? "text-text-orange" : ""}`}/></button>
                <button onClick={() => setLayout("grid3")} className={`mr-2`}><Columns3
                    className={`${layout === "grid3" ? "text-text-orange" : ""}`}/></button>
                <button onClick={() => setLayout("grid4")} className={`mr-2`}><Columns4
                    className={`${layout === "grid4" ? "text-text-orange" : ""}`}/></button>
                <button onClick={() => setLayout("list")} className={`mr-2`}><Rows3
                    className={`${layout === "list" ? "text-text-orange" : ""}`}/></button>
            </div>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                className={`grid ${getGridClass()} gap-6`}
            >
                {contests.map(renderCard)}
            </motion.div>
        </div>
    );
};

export default ContestsCards;