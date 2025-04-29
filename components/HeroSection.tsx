import type { FC } from "react";

const cards = [
  {
    title: "Mental Health Quiz",
    description: "Understand your emotional wellbeing",
  },
  {
    title: "Upcoming Therapy Session",
    description: "Today at 3:00 PM with Dr. Sarah",
  },
  {
    title: "Daily Journal",
    description: "Take a moment to reflect on your feelings today",
  },
  {
    title: "Community Support",
    description: "Connect with others who understand",
  },
];

const HeroSection: FC = () => {
  return (
    <section className="bg-background dark:bg-background px-4 md:px-6">
      <div className="min-h-screen max-w-[1400px] mx-auto flex flex-col justify-center align-items-center gap-10 py-20 lg:px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading">
            Your journey to <span className="text-primary">inner peace</span>{" "}
            begins here
          </h1>
          <p className="text-xl text-content dark:text-content max-w-[800px] mx-auto mt-6">
            DeepSoul connects you with professional therapists, supportive
            community, and powerful self-help tools for your mental wellbeing
            journey.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl p-5 shadow-xl transition-transform duration-500 hover:-translate-y-2 relative"
            >
              <h2 className="font-medium text-slate-800 dark:text-slate-200 text-center">
                {card.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 text-center">
                {card.description}
              </p>
              <div className="h-1 w-full bg-primary mt-3 rounded-full absloute b-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
