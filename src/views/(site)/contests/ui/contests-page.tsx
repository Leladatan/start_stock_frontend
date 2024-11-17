"use client";

import {useState} from "react";
import {Input} from "@/shared/components/ui/input";
import {ContestFiltersType} from "@/views/(site)/contests/types";
import ContestsFilterSidebar from "@/views/(site)/contests/ui/sections/contests-filter-sidebar";
import ContestsCards from "@/views/(site)/contests/ui/sections/contests-cards";
import useDebounce from "@/shared/hooks/use-debounce";

const ContestsPage = () => {
    const [filters, setFilters] = useState<ContestFiltersType>({
        direction: [],
        participationType: [],
        cases: [],
        level: [],
        format: [],
        scale: [],
        participationCost: [0, 50000],
        popularity: "",
        duration: "",
        workload: "",
    });
    const debouncedFilters = useDebounce<ContestFiltersType>(filters, 500);

    const [searchQuery, setSearchQuery] = useState<string>("");
    const debouncedSearchQuery = useDebounce<string>(searchQuery, 500);

    const handleFilterChange = (category: keyof ContestFiltersType, value: string | number[] | string[]) => {
        if (category === "duration" || category === "popularity" || category === "participationCost" || category === "workload") {
            setFilters((prevFilters) => ({
                ...prevFilters,
                [category]: value,
            }));
            return;
        }

        if (typeof value === "string") {
            setFilters(prevFilters => ({
                ...prevFilters,
                [category]: Array.isArray(prevFilters[category])
                    ? prevFilters[category].includes(value)
                        ? prevFilters[category].filter(item => item !== value)
                        : [...prevFilters[category], value]
                    : [value]
            }));
        }
    };

    const onResetFilters = () => {
        setFilters({
            direction: [],
            participationType: [],
            cases: [],
            level: [],
            format: [],
            scale: [],
            participationCost: [0, 50000],
            popularity: "",
            duration: "",
            workload: "",
        });
    };

    return (
        <section className="flex min-h-screen bg-text-light w-full">
            <ContestsFilterSidebar filters={filters} onFilterChange={handleFilterChange}
                                   onResetFilters={onResetFilters}/>
            <div className="flex-1 p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-text-indigo">
                        Конкурсы
                    </h2>
                </div>
                <div className="mb-6 flex justify-between items-center gap-10">
                    <Input
                        type="search"
                        placeholder="Поиск конкурсов..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full focus:ring-[#2f45fd] focus:border-[#2f45fd] focus:z-10"
                    />
                </div>
                <ContestsCards filters={debouncedFilters} searchQuery={debouncedSearchQuery}/>
            </div>
        </section>
    );
};

export default ContestsPage;