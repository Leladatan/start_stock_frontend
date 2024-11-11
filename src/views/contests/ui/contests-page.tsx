"use client";

import {useState} from "react";
import {Button} from "@/shared/components/ui/button";
import {Input} from "@/shared/components/ui/input";
import {ContestFiltersType} from "@/views/contests/types";
import ContestsFilterSidebar from "@/views/contests/ui/sections/contests-filter-sidebar";
import ContestsSortingOptions from "@/views/contests/ui/sections/contests-sorting-options";
import ContestsCards from "@/views/contests/ui/sections/contests-cards";
import {Sheet, SheetContent, SheetTrigger} from "@/shared/components/ui/sheet";

const ContestsPage = () => {
    const [filters, setFilters] = useState<ContestFiltersType>({
        direction: [],
        participationType: [],
        cases: [],
        level: [],
        format: [],
        scale: [],
        participationCost: [0, 20000],
        popularity: "",
        workload: "",
        duration: "",
    });

    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

    const handleFilterChange = (category: keyof ContestFiltersType, value: string | number[]) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [category]: Array.isArray(prevFilters[category])
                ? prevFilters[category].includes(value)
                    ? prevFilters[category].filter(item => item !== value)
                    : [...prevFilters[category], value]
                : [value]
        }));
    };

    return (
        <section className="flex min-h-screen bg-light">
            <ContestsFilterSidebar filters={filters} onFilterChange={handleFilterChange}/>
            <div className="flex-1 p-6">
                <div className="mb-6">
                    <Input
                        type="search"
                        placeholder="Поиск конкурсов..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full"
                    />
                </div>
                <div className="mb-6 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-indigo">Конкурсы</h2>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button>Сортировка</Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                            <ContestsSortingOptions filters={filters} onFilterChange={handleFilterChange}/>
                        </SheetContent>
                    </Sheet>
                </div>
                <ContestsCards filters={filters} searchQuery={searchQuery}/>
            </div>
        </section>
    );
};

export default ContestsPage;