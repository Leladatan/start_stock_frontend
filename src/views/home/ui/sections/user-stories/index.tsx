"use client";

import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";
import { User } from "lucide-react";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { stories } from "@/views/home/const";

const UserStories = () => {
  const [itemsPerView, setItemsPerView] = useState(3);

  const extendedStories = [...stories, ...stories];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Истории пользователей</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {extendedStories.map((story, index) => (
              <CarouselItem key={index} className={`pl-4 ${itemsPerView === 3 ? 'basis-1/3' : itemsPerView === 2 ? 'basis-1/2' : 'basis-full'}`}>
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <div className="relative w-24 h-24 mb-4">
                      <User className="w-full h-full text-gray-400"/>
                      <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1">
                        <story.icon className="w-10 h-10 text-purple-500"/>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.field}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{story.testimonial}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default UserStories;