"use client";

import {Slider} from "@/shared/components/ui/slider";
import {ContestFiltersType} from "@/views/(site)/contests/types";
import {RadioGroup, RadioGroupItem} from "@/shared/components/ui/radio-group";
import {Label} from "@/shared/components/ui/label";

type Props = {
    filters: ContestFiltersType;
    onFilterChange: (category: keyof ContestFiltersType, value: string | number[]) => void;
};

// TODO: Переписать, добавить другие варианты сортировки текущее содержимое перенести в фильтры

const ContestsSortingOptions = ({ filters, onFilterChange }: Props) => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Сортировка</h2>
            <div className="space-y-6">
                <div>
                    <h3 className="font-semibold mb-2">Стоимость участия</h3>
                    <Slider
                        min={0}
                        max={20000}
                        step={1000}
                        value={filters.participationCost}
                        onValueChange={(value) => onFilterChange('participationCost', value)}
                    />
                    <div className="flex justify-between mt-2">
                        <span>Бесплатно</span>
                        <span>20 000 ₽</span>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Популярность</h3>
                    <RadioGroup value={filters.popularity}
                                onValueChange={(value) => onFilterChange('popularity', value)}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="50" id="r1"/>
                            <Label htmlFor="r1">До 50 заявок</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="100" id="r2"/>
                            <Label htmlFor="r2">До 100 заявок</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="100+" id="r3"/>
                            <Label htmlFor="r3">Более 100 заявок</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Нагрузка</h3>
                    <RadioGroup value={filters.workload} onValueChange={(value) => onFilterChange('workload', value)}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="5" id="w1"/>
                            <Label htmlFor="w1">До 5 часов в неделю</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="10" id="w2"/>
                            <Label htmlFor="w2">Около 10-ти часов в неделю</Label>
                        </div>
                    </RadioGroup>
                </div>
                <div>
                    <h3 className="font-semibold mb-2">Продолжительность</h3>
                    <RadioGroup value={filters.duration} onValueChange={(value) => onFilterChange('duration', value)}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="week" id="d1"/>
                            <Label htmlFor="d1">До недели</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="1-2months" id="d2"/>
                            <Label htmlFor="d2">1-2 месяца</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="2-5months" id="d3"/>
                            <Label htmlFor="d3">2-5 месяцев</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
        </div>
    );
};

export default ContestsSortingOptions;