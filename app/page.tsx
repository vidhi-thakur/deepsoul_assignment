import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import TherapySection from "@/components/TherapySection";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <FeaturesSection />
      <TherapySection />
    </main>
  );
}
