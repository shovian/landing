import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { CallToActionSection } from "./components/CallToActionSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navigation } from "./components/Navigation";
import { SignUpSection } from "./components/SignUpSection";
import { SocialProofSection } from "./components/SocialProofSection";
import { TargetMarketsSection } from "./components/TargetMarketsSection";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <SignUpSection />
      <SocialProofSection />
      <FeaturesSection />
      <BeforeAfterSection />
      <TargetMarketsSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
