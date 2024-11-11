import MainSection from "@/views/(site)/home/ui/sections/main-section";
import AboutSection from "@/views/(site)/home/ui/sections/about-section";
import MentorsSection from "@/views/(site)/home/ui/sections/mentors-section";
import SpheresBlocksSection from "@/views/(site)/home/ui/sections/spheres-blocks-section";
import CubicBlocksSection from "@/views/(site)/home/ui/sections/cubic-blocks-section";
import AnimationsBlocksSection from "@/views/(site)/home/ui/sections/animations-blocks-section";
import UserStories from "@/views/(site)/home/ui/sections/user-stories";

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