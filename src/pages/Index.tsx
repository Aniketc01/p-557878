
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { FeaturesComparison } from "@/components/sections/FeaturesComparison";
import { UploadSection } from "@/components/sections/UploadSection";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <FeaturesComparison />
        <UploadSection />
        <BenefitsGrid />
      </main>
    </div>
  );
};

export default Index;
