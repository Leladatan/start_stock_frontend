"use client"

import {Contest, ContestFiltersType} from "@/views/(site)/contests/types"
import {motion} from "framer-motion"
import {useState, useMemo} from "react"
import {Columns2, Columns3, Rows3, ArrowUpDown} from 'lucide-react'
import {Button} from "@/shared/components/ui/button"
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
import {Badge} from "@/shared/components/ui/badge";

type Props = {
  filters: ContestFiltersType
  searchQuery: string
}

type LayoutType = "grid2" | "grid3" | "list"
type SortType = "alphabetical" | "price" | "popularity" | "duration" | "level" | "workload"
type SortDirection = "asc" | "desc"

const ContestsCards = ({filters, searchQuery}: Props) => {
  const [layout, setLayout] = useState<LayoutType>("grid3")
  const [sortType, setSortType] = useState<SortType>("alphabetical")
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc")

  const filteredContests = useMemo(() => {
    return contests.filter(contest => {
      const searchQueryMatch = contest.title.toLowerCase().includes(searchQuery.toLowerCase());
      const directionMatch = filters.direction.length === 0 || filters.direction.some(dir => contest.category.includes(dir));
      const participationTypeMatch = filters.participationType.length === 0 || filters.participationType.some(type => contest.participationType.includes(type));
      const casesMatch = filters.cases.length === 0 || filters.cases.some(caseItem => contest.cases.includes(caseItem));
      const levelMatch = filters.level.length === 0 || filters.level.includes(contest.level);
      const formatMatch = filters.format.length === 0 || filters.format.some(format => contest.format.includes(format));
      const scaleMatch = filters.scale.length === 0 || filters.scale.some(scale => contest.scale.includes(scale));
      const costMatch = contest.price >= filters.participationCost[0] && contest.price <= filters.participationCost[1];
      const popularityMatch = !filters.popularity ||
        (filters.popularity === "low" && contest.applications < 50) ||
        (filters.popularity === "medium" && contest.applications <= 100) ||
        (filters.popularity === "high" && contest.applications > 100);
      const durationMatch = !filters.duration ||
        (filters.duration === "short" && contest.duration < 7) ||
        (filters.duration === "medium" && contest.duration <= 28) ||
        (filters.duration === "long" && contest.duration > 28);
      const workloadMatch = !filters.workload || contest.workload === filters.workload;

      return directionMatch && participationTypeMatch && casesMatch && levelMatch && formatMatch &&
        scaleMatch && costMatch && popularityMatch && durationMatch && workloadMatch && searchQueryMatch;
    });
  }, [filters.cases, filters.direction, filters.duration, filters.format, filters.level, filters.participationCost, filters.participationType, filters.popularity, filters.scale, filters.workload, searchQuery]);

  const sortedContests = useMemo(() => {
    return [...filteredContests].sort((a, b) => {
      let comparison = 0;
      const levelOrder = {
        "Лёгкий": 1,
        "Средний": 2,
        "Продвинутый": 3
      };

      const loadOrder = {
        "Низкая": 1,
        "Средняя": 2,
        "Высокая": 3
      };

      switch (sortType) {
        case "alphabetical":
          comparison = a.title.localeCompare(b.title);
          break;
        case "price":
          comparison = a.price - b.price;
          break;
        case "popularity":
          comparison = b.applications - a.applications;
          break;
        case "duration":
          comparison = a.duration - b.duration;
          break;
        case "level":
          comparison = (levelOrder[a.level] || 0) - (levelOrder[b.level] || 0);
          break;
        case "workload":
          comparison = (loadOrder[a.workload] || 0) - (loadOrder[b.workload] || 0);
          break;
      }
      return sortDirection === "asc" ? comparison : -comparison;
    });
  }, [filteredContests, sortType, sortDirection]);

  const handlerGridName = () => {
    switch (layout) {
      case "grid2":
        return "Колонки: 2"
      case "grid3":
        return "Колонки: 3"
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
          <img src={contest.imageUrl} alt={contest.title} className="w-1/3 object-cover rounded-lg mr-4"/>
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
            <div className={"flex flex-wrap gap-2 mt-4"}>
              <Badge>{contest.level}</Badge>
              <Badge>{contest.workload}</Badge>
              {contest.participationType.map((participation) => <Badge key={participation}>{participation}</Badge>)}
              {contest.format.map((format) => <Badge key={format}>{format}</Badge>)}
              {contest.scale.map((scale) => <Badge key={scale}>{scale}</Badge>)}
              {contest.cases.map((caseItem) => <Badge key={caseItem}>{caseItem}</Badge>)}
            </div>
          </div>
        </div>
      )
    }

    return (
      <div key={contest.id} className="bg-text-light p-6 rounded-lg shadow-md border">
        <img src={contest.imageUrl} alt={contest.title} className="w-full h-40 object-cover rounded-lg mb-4"/>
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
        <div className={"flex flex-wrap gap-2 mt-4"}>
          <Badge>{contest.level}</Badge>
          <Badge>{contest.workload}</Badge>
          {contest.participationType.map((participation) => <Badge key={participation}>{participation}</Badge>)}
          {contest.format.map((format) => <Badge key={format}>{format}</Badge>)}
          {contest.scale.map((scale) => <Badge key={scale}>{scale}</Badge>)}
          {contest.cases.map((caseItem) => <Badge key={caseItem}>{caseItem}</Badge>)}
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
                <ArrowUpDown className="mr-2 h-4 w-4"/>
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
              <DropdownMenuItem onClick={() => setSortType("duration")}>По нагрузке</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortType("level")}>По сложности</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Select value={sortDirection} onValueChange={(value) => setSortDirection(value as SortDirection)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Направление сортировки"/>
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
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}
        className={`grid ${getGridClass()} gap-6`}
      >
        {sortedContests.length > 0 ? sortedContests.map(renderCard) : <h2>Нет доступных конкурсов</h2>}
      </motion.div>
    </div>
  )
}

export default ContestsCards