import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { OpportunityCategories } from './components/OpportunityCategories';
import { BlueprintFeatures } from './components/BlueprintFeatures';
import { InvestmentLadder } from './components/InvestmentLadder';
import { FrameworksSection } from './components/FrameworksSection';
import { AudienceSection } from './components/AudienceSection';
import { ComparisonSection } from './components/ComparisonSection';
import { OfferSection } from './components/OfferSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { LightboxModal, ModalImage } from './components/LightboxModal';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { initAnalytics, trackPageView } from './utils/analytics';
import { productImages } from './assets/images';

export default function App() {
  const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  useEffect(() => {
    initAnalytics();
    trackPageView('2027 Business Opportunity Blueprint Landing Page');
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F3E9] text-[#171717] flex flex-col font-sans selection:bg-[#123C2E] selection:text-[#FAF8F2]">
      {/* Sticky Top Header */}
      <Header onOpenPolicies={(policy) => setActivePolicy(policy)} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Section 4: Hero Section (Features Authentic bookIndiaFocus Cover) */}
        <HeroSection
          onOpenPreview={() =>
            setSelectedImage({
              image: productImages.bookIndiaFocus,
              title: '2027 Business Opportunity Blueprint',
              subtitle: 'Full Detailed Edition · 75 Businesses · Idea Se Business Tak',
              tag: 'Official Cover',
            })
          }
        />

        {/* Section 5: Problem and Solution */}
        <ProblemSection />

        {/* Section 6: What's Inside the Blueprint (6 Sectors + Complete 75 Explorer) */}
        <OpportunityCategories />

        {/* Section 7: What You Will Learn (Features Authentic bookWarmSunlight in ambient light) */}
        <BlueprintFeatures
          onOpenSampleChapter={() =>
            setSelectedImage({
              image: productImages.bookWarmSunlight,
              title: 'Standardized 12-Part Chapter Blueprint',
              subtitle: 'Consistent unit economics, capital bands & risk scoring across all 75 opportunities',
              tag: 'Reading Experience',
            })
          }
        />

        {/* Section 8: Investment Clarity Section (Capital Bands) */}
        <InvestmentLadder />

        {/* Section 9: Practical Frameworks & Worksheets (Features Authentic bookSkyward horizon) */}
        <FrameworksSection
          onOpenScorecard={() =>
            setSelectedImage({
              image: productImages.bookSkyward,
              title: '13 Operational & Decision Worksheets',
              subtitle: 'Checklists, unit economics break-even, and 30-day execution framework',
              tag: 'Decision Frameworks',
            })
          }
        />

        {/* Section 10: Who Is This Blueprint For? */}
        <AudienceSection />

        {/* Section 11: Why This Blueprint? (Comparison) */}
        <ComparisonSection />

        {/* Section 12: Purchase Offer Section (Features Authentic bookHandHeld physical mockup) */}
        <OfferSection />

        {/* Section 13: FAQ Section */}
        <FAQSection />

        {/* Section 14: Final CTA Section */}
        <FinalCTA />
      </main>

      {/* Section 15: Footer with Mandatory Disclaimers */}
      <Footer onOpenPolicy={(type) => setActivePolicy(type)} />

      {/* Mobile Bottom Floating CTA Bar */}
      <MobileStickyCTA />

      {/* High-Resolution Zoom Lightbox for clicked section image */}
      <LightboxModal
        item={selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      {/* Policies & Institutional Information Modal */}
      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </div>
  );
}
