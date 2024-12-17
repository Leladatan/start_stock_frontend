"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import {Card, CardContent, CardHeader, CardTitle} from "@/shared/components/ui/card";
import { MentorType } from "@/views/(site)/home/types";

interface Props {
    mentor: MentorType;
    index: number;
}

const MentorCard = ({ mentor, index }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="perspective-1000 w-96 h-96 cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="w-full h-full relative"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Лицевая сторона карточки */}
                <Card className={`absolute w-full h-full backface-hidden`} style={{ backfaceVisibility: 'hidden' }}>
                    <CardContent className="flex flex-col items-center justify-center h-full">
                        <img src={`/mentors/${index}.jpg`} alt={mentor.name} className="w-32 h-32 object-cover mb-4 rounded-full" />
                        <h2 className="text-2xl font-bold text-center">{mentor.name}</h2>
                        <p className="text-sm text-text-gray">{mentor.position}</p>
                    </CardContent>
                </Card>

                {/* Обратная сторона карточки */}
                <Card className={`absolute w-full h-full backface-hidden [transform:rotateY(180deg)]`} style={{ backfaceVisibility: 'hidden' }}>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold text-text-blue">{mentor.name}</CardTitle>
                        <p className="text-sm text-text-gray">{mentor.position}</p>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                        <div>
                            <h4 className="font-semibold text-text-indigo">О менторе:</h4>
                            <p className="text-text-gray">{mentor.description}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-text-indigo">Достижения:</h4>
                            <ul className="list-disc list-inside text-text-gray">
                                {mentor.achievements.slice(0, 2).map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-text-indigo">Опыт:</h4>
                            <p className="text-text-gray">{mentor.experience}</p>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default MentorCard;