
import { Header } from '@/components/layout/header';
import Hero from '@/components/sections/home/hero'
import { Stats } from "../components/sections/home/stats"
import { Services } from "../components/sections/home/services"
import { Solutions } from '@/components/sections/home/solutions';
import GrowthSection from '@/components/sections/home/growth';
import ReviewSection from '@/components/sections/home/review';
import SupportSection from '@/components/sections/home/support';
import CTASection from '@/components/sections/home/ctasection';

export const metadata = {
  title: 'Aron Tech - Digital Marketing Agency',
  description: 'AI-Powered digital solutions for your business growth.',
};

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden selection:bg-primary selection:text-black">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Solutions/>
      <GrowthSection/>
      <ReviewSection/>
      <SupportSection/>
      <CTASection/>
    </main>
  );
}