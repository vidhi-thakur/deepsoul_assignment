import type { FC } from "react";

const cards = [
  {
    title: "Mental Health Quiz",
    description: "Understand your emotional wellbeing",
    position: "top-6 left-6",
    delay: "0.6s",
  },
  {
    title: "Upcoming Therapy Session",
    description: "Today at 3:00 PM with Dr. Sarah",
    position: "top-6 right-6",
    delay: "1s",
  },
  {
    title: "Daily Journal",
    description: "Take a moment to reflect on your feelings today",
    position: "bottom-6 left-6",
    delay: "1.2s",
  },
  {
    title: "Community Support",
    description: "Connect with others who understand",
    position: "bottom-6 right-6",
    delay: "1.4s",
  },
];

const HeroSection: FC = () => {
  return (
    <section className="bg-background dark:bg-background px-4 md:px-6">
      <div className="min-h-screen max-w-[1400px] mx-auto flex flex-col justify-center align-items-center gap-10 py-20 lg:px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading text-balance">
            Your journey to <span className="text-primary">inner peace</span>{" "}
            begins here
          </h1>
          <p className="text-xl text-content dark:text-content max-w-[800px] mx-auto mt-4">
            DeepSoul connects you with professional therapists, supportive
            community, and powerful self-help tools for your mental wellbeing
            journey.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-5 shadow-xl"
            >
              <h3 className="font-medium text-slate-800 dark:text-slate-200 text-center">
                Peace of Mind
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 text-center">
                Your mental wellbeing companion is here
              </p>
              <div className="h-1 w-full bg-primary mt-3 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
