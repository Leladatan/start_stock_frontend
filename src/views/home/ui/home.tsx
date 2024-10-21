import MainSection from "@/views/home/ui/sections/main-section";
import AboutSection from "@/views/home/ui/sections/about-section";
import SpheresBlocksSection from "@/views/home/ui/sections/spheres-blocks-section";
import CubicBlocksSection from "@/views/home/ui/sections/cubic-blocks-section";
import AnimationsBlocksSection from "@/views/home/ui/sections/animations-blocks-section";
import UserStories from "@/views/home/ui/sections/user-stories";
import MentorsSection from "@/views/home/ui/sections/mentors-section";

const Home = () => {
  return (
    <>
      <MainSection/>
      <AboutSection/>
      <MentorsSection/>
      <SpheresBlocksSection/>
      <CubicBlocksSection/>
      <AnimationsBlocksSection/>
      <UserStories/>
    </>
  );
};

export default Home;