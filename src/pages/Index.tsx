import Hero from "@/components/Hero";
import ServiceCatalog from "@/components/ServiceCatalog";
import GuideProfiles from "@/components/GuideProfiles";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ServiceCatalog />
      <GuideProfiles />
    </div>
  );
};

export default Index;
