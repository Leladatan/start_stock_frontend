"use client";

import {Label} from "@/shared/components/ui/label";
import {ContestFiltersType} from "@/views/(site)/contests/types";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/shared/components/ui/accordion";
import {filterOptions} from "@/views/(site)/contests/const";
import {Checkbox} from "@/shared/components/ui/checkbox";
import {motion} from "framer-motion";
import {Button} from "@/shared/components/ui/button";

type Props = {
    filters: ContestFiltersType;
    onFilterChange: (category: keyof ContestFiltersType, value: string | number[]) => void;
    onApplyFilters: () => void
    onResetFilters: () => void
};

const ContestsFilterSidebar = ({filters, onFilterChange, onApplyFilters, onResetFilters}: Props) => {
    const handlerCategoryName = (category: keyof ContestFiltersType) => {
        if (category === "direction") return "Направления";
        if (category === "participationType") return "Тип участия";
        if (category === "cases") return "Задачи";
        if (category === "level") return "Сложность";
        if (category === "format") return "Формат";
        if (category === "scale") return "Масштаб";

        return "";
    };

    return (
        <aside className="w-64 bg-text-light p-6 shadow-md h-fit">
            <h2 className="text-2xl font-bold mb-4 text-text-indigo">Фильтры</h2>
            <Accordion type="multiple" className="w-full">
                {Object.entries(filterOptions).map(([category, options]) => (
                    <AccordionItem value={category} key={category}>
                        <AccordionTrigger
                            className="text-text-blue transition">
                            {handlerCategoryName(category as keyof ContestFiltersType)}
                        </AccordionTrigger>
                        <AccordionContent className={"flex flex-col gap-3 mt-4 px-2 "}>
                            {options.map((option) => (
                                <div key={typeof option === "string" ? option : option.label} className="mb-2">
                                    <Label className="flex items-center space-x-2 cursor-pointer group text-md">
                                        <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                                            <Checkbox
                                                checked={filters[category as keyof ContestFiltersType].includes(
                                                   (typeof option === "string" ? option : option.label) as unknown as never
                                                )}
                                                onCheckedChange={() => onFilterChange(category as keyof ContestFiltersType, typeof option === "string" ? option : option.label)}
                                                className="border-[#737373] text-[#ff6436] focus:ring-[#ff6436]"
                                            />
                                        </motion.div>
                                        <motion.span className="group-hover:text-[#ff6436] transition-colors"
                                                     whileHover={{x: 5}}>
                                            {typeof option === "string" ? option : option.label}
                                        </motion.span>
                                    </Label>
                                    {typeof option !== "string" && option.subCategories && (
                                        <div className="ml-6 mt-2">
                                            {option.subCategories.map((subOption) => (
                                                <Label key={subOption}
                                                       className="flex items-center space-x-2 mt-1 cursor-pointer group text-md">
                                                    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                                                        <Checkbox
                                                            checked={filters[category as keyof ContestFiltersType].includes(subOption as unknown as never)}
                                                            onCheckedChange={() => onFilterChange(category as keyof ContestFiltersType, subOption)}
                                                            className="border-[#737373] text-[#ff6436] focus:ring-[#ff6436]"
                                                        />
                                                    </motion.div>
                                                    <motion.span
                                                        className="group-hover:text-[#ff6436] transition-colors"
                                                        whileHover={{x: 5}}>
                                                        {subOption}
                                                    </motion.span>
                                                </Label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className="flex flex-col gap-3 items-center mt-6">
                <Button
                    onClick={onApplyFilters}
                    className="w-full bg-text-orange hover:bg-text-orange/90 text-text-light"
                >
                    Применить
                </Button>
                <Button
                    onClick={onResetFilters}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800"
                >
                    Сбросить
                </Button>
            </div>
        </aside>
    );
};

export default ContestsFilterSidebar;