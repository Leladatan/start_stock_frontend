"use client";

import {ContestFiltersType} from "@/views/contests/types";
import {motion} from "framer-motion";

type Props = {
    filters: ContestFiltersType;
    onFilterChange: (category: string, value: any) => void;
};

const ContestsCards = ({ filters, searchQuery }) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            {/* Здесь будут карточки конкурсов */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">Название конкурса</h2>
                <p className="text-gray mb-4">Краткое описание конкурса...</p>
                <div className="flex justify-between items-center">
                    <span className="text-orange font-semibold">Дизайн</span>
                    <span className="text-blue">До 100 заявок</span>
                </div>
            </div>
            {/* Повторите этот блок для других карточек */}
        </motion.div>
    );
};

export default ContestsCards;