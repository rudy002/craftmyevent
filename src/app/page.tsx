import Examples from './components/Examples';
import Pricing from './components/Pricing';

export default function Home() {
  return (
    <div className="Home-page flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <Examples />
      <Pricing />
    </div>
  );
}
