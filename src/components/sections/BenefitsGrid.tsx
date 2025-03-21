
import { BenefitCard } from "../ui/BenefitCard";

const benefits = [
  {
    title: "One-click flowchart objects creation",
    subtitle: "No more manual drawing and filling in",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/41f1ff6358f0ae7823ee8f8ce19704ed50b83dbb",
    imageAlt: "Flowchart illustration",
  },
  {
    title: "Secure, cloud-based access",
    subtitle: "Work from anywhere",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/55299fedf04a82c67daa2fdaef669dc897306e4b",
    imageAlt: "Cloud access illustration",
  },
  {
    title: "Auto-generated interactive Runsheet",
    subtitle: "Sortable and Searchable",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/3cd70a63b83edc347d47885a670e5d02f28c9db5",
    imageAlt: "Interactive runsheet illustration",
  },
  {
    title: "Automated Mineral Conveyance Calculations",
    subtitle: "Reduce errors and improve efficiency",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/42fd80928ca1447c648383f96f1891f4671aa9cb",
    imageAlt: "Calculations illustration",
  },
  {
    title: "Linked supporting documents on every page",
    subtitle: "Easy access and reference",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/41f1ff6358f0ae7823ee8f8ce19704ed50b83dbb",
    imageAlt: "Document linking illustration",
  },
  {
    title: "Pre-populated mineral reports and drilling opinions",
    subtitle: "Save time with formatted templates",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca48d3ac8b9f5f3e889d5c42ec336c562d587cba",
    imageAlt: "Reports illustration",
  },
];

export const BenefitsGrid = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-8">
      <h2 className="text-2xl font-medium text-[#333] mb-4 text-center">Features and Benefits</h2>
      <p className="text-center text-base text-[#555] mb-10">Everything you need for faster, more accurate mineral title work.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            subtitle={benefit.subtitle}
            imageUrl={benefit.imageUrl}
            imageAlt={benefit.imageAlt}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
