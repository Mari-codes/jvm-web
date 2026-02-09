import { CaseSection } from '../../components/CaseSection';
import Footer from '../../components/Footer/Index';
import { HeroHeader } from '../../components/HeroHeader';
import { HeroSection } from '../../components/HeroSection';
import { InfiniteCarousel } from '../../components/InfiniteCarousel';
import Info from '../../components/Info';
import { IntroServices } from '../../components/IntroServices';
import { ServiceSection } from '../../components/ServiceSection';
import { StoresSection } from '../../components/StoresSection';
import { WorkProcessSection } from '../../components/WorkProcessSection';

export const Home = () => {
  return (
    <>
      <HeroHeader />
      <IntroServices />
      <InfiniteCarousel />
      <ServiceSection />
      <WorkProcessSection />
      <StoresSection />
      <HeroSection />
      <CaseSection />
      <Info />
      <Footer />
    </>
  );
};
