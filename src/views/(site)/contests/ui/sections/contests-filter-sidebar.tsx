"use client";

import { Label } from "@/shared/components/ui/label";
import { ContestFiltersType } from "@/views/(site)/contests/types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/components/ui/accordion";
import { filterOptions } from "@/views/(site)/contests/const";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { motion } from "framer-motion";
import { Button } from "@/shared/components/ui/button";
import { Slider } from "@/shared/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/shared/components/ui/radio-group";

type Props = {
    filters: ContestFiltersType;
    onFilterChange: (category: keyof ContestFiltersType, value: string | number[] | string[]) => void;
    onApplyFilters: () => void;
    onResetFilters: () => void;
};

const ContestsFilterSidebar = ({ filters, onFilterChange, onApplyFilters, onResetFilters }: Props) => {
    const handlerCategoryName = (category: keyof ContestFiltersType) => {
        if (category === "direction") return "Направления";
        if (category === "participationType") return "Тип участия";
        if (category === "cases") return "Задачи";
        if (category === "level") return "Сложность";
        if (category === "format") return "Формат";
        if (category === "scale") return "Масштаб";
        if (category === "participationCost") return "Стоимость участия";
        if (category === "popularity") return "Популярность";
        if (category === "workload") return "Нагрузка";
        if (category === "duration") return "Длительность";

        return "";
    };

    return (
        <aside className="sticky top-0 left-0 w-64 bg-text-light p-6 shadow-md h-fit">
            <h2 className="text-2xl font-bold mb-4 text-text-indigo">Фильтры</h2>

            <Accordion type="multiple" className="w-full">
                <AccordionItem value="participationCost">
                    <AccordionTrigger className="text-text-gray transition">
                        {handlerCategoryName("participationCost")}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-3 mt-4 px-2">
                        <Label>Стоимость участия (₽)</Label>
                        <Slider
                            min={0}
                            max={20000}
                            step={1000}
                            value={filters.participationCost}
                            onValueChange={(value) => onFilterChange("participationCost", value)}
                            className="w-full"
                        />
                        <div className="flex justify-between text-sm text-text-gray">
                            <span>{filters.participationCost[0]} ₽</span>
                            <span>{filters.participationCost[1]} ₽</span>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="popularity">
                    <AccordionTrigger className="text-text-gray transition">
                        {handlerCategoryName("popularity")}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-3 mt-4 px-2">
                        <RadioGroup
                            value={filters.popularity}
                            onValueChange={(value) => onFilterChange("popularity", value)}
                        >
                            <div className="flex items-center space-x-2 group">
                                <RadioGroupItem value="high" id="popularity-high" />
                                <motion.label
                                    htmlFor="popularity-high"
                                    className="cursor-pointer transition-colors duration-200 group-hover:text-text-orange"
                                    whileHover={{ x: 5 }}
                                >
                                    Высокая
                                </motion.label>
                            </div>
                            <div className="flex items-center space-x-2 group">
                                <RadioGroupItem value="medium" id="popularity-medium" />
                                <motion.label
                                    htmlFor="popularity-medium"
                                    className="cursor-pointer transition-colors duration-200 group-hover:text-text-orange"
                                    whileHover={{ x: 5 }}
                                >
                                    Средняя
                                </motion.label>
                            </div>
                            <div className="flex items-center space-x-2 group">
                                <RadioGroupItem value="low" id="popularity-low" />
                                <motion.label
                                    htmlFor="popularity-low"
                                    className="cursor-pointer transition-colors duration-200 group-hover:text-text-orange"
                                    whileHover={{ x: 5 }}
                                >
                                    Низкая
                                </motion.label>
                            </div>
                        </RadioGroup>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="workload">
                    <AccordionTrigger className="text-text-gray transition">
                        {handlerCategoryName("workload")}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-3 mt-4 px-2">
                        <RadioGroup
                            value={filters.workload}
                            onValueChange={(value) => onFilterChange("workload", value)}
                        >
                            <div className="flex items-center space-x-2 group">
                                <RadioGroupItem value="high" id="workload-high" />
                                <motion.label
                                    htmlFor="workload-high"
                                    className="cursor-pointer transition-colors duration-200 group-hover:text-text-orange"
                                    whileHover={{ x: 5 }}
                                >
                                    Высокая
                                </motion.label>
                            </div>
                            <div className="flex items-center space-x-2 group">
                                <RadioGroupItem value="medium" id="workload-medium" />
                                <motion.label
                                    htmlFor="workload-medium"
                                    className="cursor-pointer transition-colors duration-200 group-hover:text-text-orange"
                                    whileHover={{ x: 5 }}
                                >
                                    Средняя
                                </motion.label>
                            </div>
                            <div className="flex items-center space-x-2 group">
                                <RadioGroupItem value="low" id="workload-low" />
                                <motion.label
                                    htmlFor="workload-low"
                                    className="cursor-pointer transition-colors duration-200 group-hover:text-text-orange"
                                    whileHover={{ x: 5 }}
                                >
                                    Низкая
                                </motion.label>
                            </div>
                        </RadioGroup>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="duration">
                    <AccordionTrigger className="text-text-gray transition">
                        {handlerCategoryName("duration")}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-3 mt-4 px-2">
                        <RadioGroup
                            value={filters.duration}
                            onValueChange={(value) => onFilterChange("duration", value)}
                        >
                            <div className="flex items-center space-x-2 group">
                                <RadioGroupItem value="short" id="duration-short" />
                                <motion.label
                                    htmlFor="duration-short"
                                    className="cursor-pointer transition-colors duration-200 group-hover:text-text-orange"
                                    whileHover={{ x: 5 }}
                                >
                                    Короткая (до 1 недели)
                                </motion.label>
                            </div>
                            <div className="flex items-center space-x-2 group">
                                <RadioGroupItem value="medium" id="duration-medium" />
                                <motion.label
                                    htmlFor="duration-medium"
                                    className="cursor-pointer transition-colors duration-200 group-hover:text-text-orange"
                                    whileHover={{ x: 5 }}
                                >
                                    Средняя (1-4 недели)
                                </motion.label>
                            </div>
                            <div className="flex items-center space-x-2 group">
                                <RadioGroupItem value="long" id="duration-long" />
                                <motion.label
                                    htmlFor="duration-long"
                                    className="cursor-pointer transition-colors duration-200 group-hover:text-text-orange"
                                    whileHover={{ x: 5 }}
                                >
                                    Длительная
                                </motion.label>
                            </div>
                        </RadioGroup>
                    </AccordionContent>
                </AccordionItem>
                {Object.entries(filterOptions).map(([category, options]) => (
                    <AccordionItem value={category} key={category}>
                        <AccordionTrigger className="text-text-gray transition">
                            {handlerCategoryName(category as keyof ContestFiltersType)}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-3 mt-4 px-2">
                            {options.map((option) => (
                                <div key={typeof option === "string" ? option : option.label} className="mb-2">
                                    <Label className="flex items-center space-x-2 cursor-pointer group text-md">
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                            <Checkbox
                                                checked={filters[category as keyof ContestFiltersType].includes(
                                                    (typeof option === "string" ? option : option.label) as unknown as never
                                                )}
                                                onCheckedChange={() =>
                                                    onFilterChange(
                                                        category as keyof ContestFiltersType,
                                                        typeof option === "string" ? option : option.label
                                                    )
                                                }
                                                className="border-[#737373] text-[#ff6436] focus:ring-[#ff6436]"
                                            />
                                        </motion.div>
                                        <motion.span className="group-hover:text-[#ff6436] transition-colors" whileHover={{ x: 5 }}>
                                            {typeof option === "string" ? option : option.label}
                                        </motion.span>
                                    </Label>
                                    {typeof option !== "string" && option.subCategories && (
                                        <div className="ml-6 mt-2">
                                            {option.subCategories.map((subOption) => (
                                                <Label
                                                    key={subOption}
                                                    className="flex items-center space-x-2 mt-1 cursor-pointer group text-md"
                                                >
                                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                        <Checkbox
                                                            checked={filters[category as keyof ContestFiltersType].includes(
                                                                subOption as unknown as never
                                                            )}
                                                            onCheckedChange={() =>
                                                                onFilterChange(category as keyof ContestFiltersType, subOption)
                                                            }
                                                            className="border-[#737373] text-[#ff6436] focus:ring-[#ff6436]"
                                                        />
                                                    </motion.div>
                                                    <motion.span className="group-hover:text-[#ff6436] transition-colors" whileHover={{ x: 5 }}>
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