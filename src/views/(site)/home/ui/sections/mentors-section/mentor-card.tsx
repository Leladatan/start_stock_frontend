"use client";

import { motion } from "framer-motion";
import { MentorType } from "../../../types";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import Image from "next/image";

interface Props {
  mentor: MentorType;
}

const MentorCard = ({ mentor }: Props) => {
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
            <div className="w-full h-full flex items-center justify-center bg-backgrounds-light">
              <Image src={"/logo.svg"} alt={mentor.name} width={100} height={100} priority className="w-full h-full object-cover" />
            </div>
          </CardHeader>
        </Card>

        {/* Задняя сторона: Информация */}
        <Card className="absolute w-full h-full backface-hidden rotate-y-180 overflow-auto bg-backgrounds-light">
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