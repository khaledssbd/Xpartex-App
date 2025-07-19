import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Portfolio from '@/components/Portfolio/Portfolio';
import BrandValues from '@/components/BrandValues/BrandValues';
import Construction from '@/components/Construction/Construction';
import WhatWeDo from '@/components/WhatWeDo/WhatWeDo';
import BrandingStrategy from '@/components/BrandingStrategy/BrandingStrategy';
import CraftingDigital from '@/components/CraftingDigital/CraftingDigital';
import ContactUs from '@/components/ContactUs/ContactUs';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <BrandValues />
      <Construction />
      <WhatWeDo />
      <BrandingStrategy />
      <CraftingDigital />
      <ContactUs />
    </main>
  );
}
