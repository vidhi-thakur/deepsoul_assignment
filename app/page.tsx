import { lazy } from "react";
import HeroSection from "@/components/HeroSection";
const FeaturesSection = lazy(() => import("@/components/FeaturesSection"));
const SelfhelpSection = lazy(() => import("@/components/SelfhelpSection"));
const TherapySection = lazy(() => import("@/components/TherapySection"));

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <FeaturesSection />
      <TherapySection />
      <SelfhelpSection />
    </main>
  );
}
