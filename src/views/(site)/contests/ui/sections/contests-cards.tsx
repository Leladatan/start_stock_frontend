"use client"

import {Contest, ContestFiltersType} from "@/views/(site)/contests/types"
import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import { Columns2, Columns3, Columns4, Rows3, ArrowUpDown } from 'lucide-react'
import { Button } from "@/shared/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/components/ui/select"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu"
import {contests} from "@/views/(site)/contests/const";

type Props = {
    filters: ContestFiltersType
    searchQuery: string
}

type LayoutType = "grid2" | "grid3" | "grid4" | "list"
type SortType = "alphabetical" | "price" | "popularity" | "duration"
type SortDirection = "asc" | "desc"

const ContestsCards = ({ filters, searchQuery }: Props) => {
    const [layout, setLayout] = useState<LayoutType>("grid3")
    const [sortType, setSortType] = useState<SortType>("alphabetical")
    const [sortDirection, setSortDirection] = useState<SortDirection>("asc")

    console.log(filters, searchQuery);

    const sortedContests = useMemo(() => {
        return [...contests].sort((a, b) => {
            let comparison = 0
            switch (sortType) {
                case "alphabetical":
                    comparison = a.title.localeCompare(b.title)
                    break
                case "price":
                    comparison = a.price - b.price
                    break
                case "popularity":
                    comparison = b.applications - a.applications
                    break
                case "duration":
                    comparison = a.duration - b.duration
                    break
            }
            return sortDirection === "asc" ? comparison : -comparison
        })
    }, [sortType, sortDirection])

    const handlerGridName = () => {
        switch (layout) {
            case "grid2":
                return "Колонки: 2"
            case "grid3":
                return "Колонки: 3"
            case "grid4":
                return "Колонки: 4"
            case "list":
                return "Список"
            default:
                return ""
        }
    }

    const getGridClass = () => {
        switch (layout) {
            case "grid2":
                return "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
            case "grid3":
                return "grid-cols-1 md:grid-cols-3 lg:grid-cols-3"
            case "grid4":
                return "grid-cols-1 md:grid-cols-4 lg:grid-cols-4"
            case "list":
                return "grid-cols-1"
            default:
                return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }
    }

    const renderCard = (contest: Contest) => {
        if (layout === "list") {
            return (
                <div key={contest.id} className="bg-text-light p-6 rounded-lg shadow-md flex border">
                    <img src={contest.imageUrl} alt={contest.title} className="w-1/3 object-cover rounded-lg mr-4" />
                    <div className="flex-1">
                        <h2 className="text-xl font-bold mb-2">{contest.title}</h2>
                        <p className="text-gray mb-4">{contest.description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-orange font-semibold">{contest.category}</span>
                            <span className="text-blue">До {contest.applications} заявок</span>
                        </div>
                        <div className="mt-2 flex justify-between items-center">
                            <span>Цена: {contest.price} ₽</span>
                            <span>Длительность: {contest.duration} дней</span>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div key={contest.id} className="bg-text-light p-6 rounded-lg shadow-md border">
                <img src={contest.imageUrl} alt={contest.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h2 className="text-xl font-bold mb-2">{contest.title}</h2>
                <p className="text-gray mb-4">{contest.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-orange font-semibold">{contest.category}</span>
                    <span className="text-blue">До {contest.applications} заявок</span>
                </div>
                <div className="mt-2 flex justify-between items-center">
                    <span>Цена: {contest.price} ₽</span>
                    <span>Длительность: {contest.duration} дней</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="flex flex-wrap items-center gap-5 mb-4">
                <div className={"flex items-center gap-3 p-2 shadow-md rounded-xl w-fit border"}>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="w-[200px]">
                                <ArrowUpDown className="mr-2 h-4 w-4" />
                                {sortType === "alphabetical"
                                    ? "По алфавиту"
                                    : sortType === "price"
                                        ? "По стоимости"
                                        : sortType === "popularity"
                                            ? "По популярности"
                                            : "По длительности"}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[200px]">
                            <DropdownMenuItem onClick={() => setSortType("alphabetical")}>По алфавиту</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setSortType("price")}>По стоимости</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setSortType("popularity")}>По популярности</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setSortType("duration")}>По длительности</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Select value={sortDirection} onValueChange={(value) => setSortDirection(value as SortDirection)}>
                        <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Направление сортировки" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="asc">По возрастанию</SelectItem>
                            <SelectItem value="desc">По убыванию</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center gap-1 p-2 shadow-md rounded-xl w-fit border">
                    <p className="w-24 text-sm text-neutral-700">{handlerGridName()}</p>
                    <Button variant="ghost" size="icon" onClick={() => setLayout("grid2")}>
                        <Columns2
                            size={20}
                            className={`${
                                layout === "grid2" ? "text-text-orange hover:text-text-orange" : "text-text-gray hover:text-neutral-700"
                            } transition`}
                        />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setLayout("grid3")}>
                        <Columns3
                            size={20}
                            className={`${
                                layout === "grid3" ? "text-text-orange hover:text-text-orange" : "text-text-gray hover:text-neutral-700"
                            } transition`}
                        />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setLayout("grid4")}>
                        <Columns4
                            size={20}
                            className={`${
                                layout === "grid4" ? "text-text-orange hover:text-text-orange" : "text-text-gray hover:text-neutral-700"
                            } transition`}
                        />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setLayout("list")}>
                        <Rows3
                            size={20}
                            className={`${
                                layout === "list" ? "text-text-orange hover:text-text-orange" : "text-text-gray hover:text-neutral-700"
                            } transition`}
                        />
                    </Button>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`grid ${getGridClass()} gap-6`}
            >
                {sortedContests.map(renderCard)}
            </motion.div>
        </div>
    )
}

export default ContestsCards