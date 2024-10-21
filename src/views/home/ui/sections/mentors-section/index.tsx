import {mentors} from "@/views/home/const";
import MentorCard from "@/views/home/ui/sections/mentors-section/mentor-card";

const MentorsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Наставники платформы</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          На этой странице мы представляем вам наших наставников — опытных профессионалов, которые делятся своими
          знаниями и навыками с участниками платформы.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;