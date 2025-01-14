import Examples from './components/Examples';
import Pricing from './components/Pricing';
import HeroSection from './components/HeroSection';
import AnimatedDivider from './components/AnimatedDivider';

export default function Home() {
  return (
    <div className="Home-page flex flex-col items-center min-h-screen w-full gap-16 sm:w-full font-sans">
      <HeroSection />
      <AnimatedDivider />      
      <Examples />
      <AnimatedDivider />
      <Pricing />
    </div>
  );
}
