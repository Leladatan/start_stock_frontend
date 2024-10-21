"use client";

import { motion } from "framer-motion";
import {MentorType} from "@/views/home/types";
import {useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/shared/components/ui/card";

interface Props {
  mentor: MentorType;
}

const MentorCard = ({mentor}: Props) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    <div
      className="h-[400px] w-full perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Передняя сторона: Фотография */}
        <Card className="absolute w-full h-full backface-hidden">
          <CardHeader className="h-full p-0">
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <img src={"logo.svg"} alt={mentor.name} className="w-full h-full object-cover" />
            </div>
          </CardHeader>
        </Card>

        {/* Задняя сторона: Информация */}
        <Card className="absolute w-full h-full backface-hidden rotate-y-180 overflow-auto">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-800">{mentor.name}</CardTitle>
            <p className="text-sm text-gray-600">{mentor.position}</p>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <h4 className="font-semibold text-gray-700">О менторе:</h4>
              <p className="text-gray-600">{mentor.description}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Достижения:</h4>
              <ul className="list-disc list-inside text-gray-600">
                {mentor.achievements.slice(0, 2).map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700">Опыт:</h4>
              <p className="text-gray-600">{mentor.experience}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default MentorCard;