"use client";

import {Card, CardContent, CardHeader} from "@/shared/components/ui/card";
import {User} from "lucide-react";
import {useEffect, useState} from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/shared/components/ui/carousel";
import {stories} from "@/views/(site)/home/const";

const UserStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState<number>(3);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const extendedStories = [...stories, ...stories];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);

      if (mobile) {
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
    <section className="py-16 bg-text-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text-indigo mb-12">Истории пользователей</h2>
        <div className="relative">
          <Carousel
              setApi={(api) => {
                api?.on('select', () => {
                  setCurrentSlide(api.selectedScrollSnap())
                })
              }}
              opts={{
                align: "start",
                loop: true,
              }}
              className="relative w-full"
          >
            <CarouselContent>
              {extendedStories.map((story, index) => (
                  <CarouselItem key={index}
                                className={`pl-4 ${itemsPerView === 3 ? "basis-1/3" : itemsPerView === 2 ? "basis-1/2" : "basis-full"}`}>
                    <Card
                        className="h-full bg-backgrounds-light shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader className="flex flex-col items-center">
                        <div className="relative w-24 h-24 mb-4">
                          <User className="w-full h-full text-text-gray"/>
                          <div className="absolute -bottom-2 -right-2 bg-backgrounds-light rounded-full p-1">
                            <story.icon className="w-10 h-10 text-text-orange"/>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-text-blue">{story.name}</h3>
                        <p className="text-sm text-text-gray">{story.field}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-text-gray">{story.testimonial}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
              ))}
            </CarouselContent>
            {!isMobile && (
                <>
                  <div className="absolute inset-y-0 left-0 flex items-center justify-center z-10">
                    <CarouselPrevious className="bg-backgrounds-light rounded-full p-2"/>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center justify-center z-10">
                    <CarouselNext className="bg-backgrounds-light rounded-full p-2"/>
                  </div>
                </>
            )}
            {/* TODO: Добавить motion */}
            <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
              {extendedStories.map((_, index) => (
                  <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentSlide ? 'bg-backgrounds-blue' : 'bg-backgrounds-gray'
                      }`}
                      onClick={() => {
                        const api = (document.querySelector('.carousel') as any)?.Carousel
                        api?.scrollTo(index)
                      }}
                  />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default UserStories;