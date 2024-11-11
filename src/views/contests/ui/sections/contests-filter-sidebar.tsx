"use client";

import {Label} from "@/shared/components/ui/label";
import {ContestFiltersType} from "@/views/contests/types";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/shared/components/ui/accordion";
import {filterOptions} from "@/views/contests/const";
import {Checkbox} from "@/shared/components/ui/checkbox";

type Props = {
    filters: ContestFiltersType;
    onFilterChange: (category: keyof ContestFiltersType, value: string | number[]) => void;
};

const ContestsFilterSidebar = ({filters, onFilterChange}: Props) => {
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
        <aside className="w-64 bg-white p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4">Фильтры</h2>
            <Accordion type="multiple" className="w-full">
                {Object.entries(filterOptions).map(([category, options]) => (
                    <AccordionItem value={category} key={category}>
                        <AccordionTrigger>{handlerCategoryName(category as keyof ContestFiltersType)}</AccordionTrigger>
                        <AccordionContent>
                            {options.map((option) => (
                                <div key={option.label || option} className="mb-2">
                                    <Label className="flex items-center space-x-2">
                                        <Checkbox
                                            checked={filters[category].includes(option.label || option)}
                                            onCheckedChange={() => onFilterChange(category, option.label || option)}
                                        />
                                        <span>{option.label || option}</span>
                                    </Label>
                                    {option.subCategories && (
                                        <div className="ml-6 mt-2">
                                            {option.subCategories.map((subOption) => (
                                                <Label key={subOption} className="flex items-center space-x-2 mt-1">
                                                    <Checkbox
                                                        checked={filters[category].includes(subOption)}
                                                        onCheckedChange={() => onFilterChange(category, subOption)}
                                                    />
                                                    <span>{subOption}</span>
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
        </aside>
    );
};

export default ContestsFilterSidebar;