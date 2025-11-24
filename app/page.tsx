

import HeroSection from "./components/HeroSection";

import ReviewsSection from "./components/ReviewsSection";
import ServicesSection from "./components/ServicesSection";
import WhoWeAre from "./components/WhoWeAre"
import RecentProjects from './components/RecentProjects'
export default function Home() {
  return (
    <div >
      <HeroSection/>
     
      <ServicesSection/>
      <WhoWeAre/>
      <RecentProjects/>
      <ReviewsSection/>
      
    </div>
  );
}
