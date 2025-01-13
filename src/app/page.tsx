import Image from 'next/image';
import Pricing from './components/Pricing';

export default function Home() {
  return (
    <div className="Home-page grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans pt-[180px]">
      <Pricing />
    </div>
  );
}
