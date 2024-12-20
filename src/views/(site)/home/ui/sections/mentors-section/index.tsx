import MentorCard from "@/views/(site)/home/ui/sections/mentors-section/mentor-card";
import {mentors} from "@/views/(site)/home/const";

const MentorsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-backgrounds-light to-backgrounds-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text-indigo mb-6">Наставники платформы</h2>
        <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
          На этой странице мы представляем вам наших наставников — опытных профессионалов, которые делятся своими
          знаниями и навыками с участниками платформы.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
              <MentorCard key={index} mentor={mentor} index={1}/>
          ))}
          {mentors.map((mentor, index) => (
              <MentorCard key={index} mentor={mentor} index={2}/>
          ))}
          {mentors.map((mentor, index) => (
              <MentorCard key={index} mentor={mentor} index={3}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;