import type { FC } from "react";

const cards = [
  {
    title: "Therapy booking",
    description:
      "Schedule sessions with licensed therapists who match your needs and preferences. Easy booking, rescheduling, and virtual sessions.",
  },
  {
    title: "Self-help Exercises",
    description:
      "Access guided meditations, journaling prompts, breathing exercises, and personalized activities to build resilience and mindfulness.",
  },
  {
    title: "Therapist Buddy",
    description:
      "Your assigned therapist keeps track of your progress, provides personalized exercises, and is available when you need guidance.",
  },
  {
    title: "Supportive Community",
    description:
      "Connect with others who understand what you're going through. Share experiences, offer support, and never feel alone in your journey.",
  },
  {
    title: "Wellness Resources",
    description:
      "Explore our extensive library of articles, blogs, audiobooks, and podcasts covering various mental health topics.",
  },
];

const FeaturesSection: FC = () => {
  return (
    <section className="bg-background dark:bg-background px-4 md:px-6">
      <div className="min-h-screen max-w-[1400px] mx-auto flex flex-col justify-center align-items-center gap-10 py-20 lg:px-6">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-heading">
            Your Complete Mental Wellness Solution
          </h1>
          <p className="text-lg text-content dark:text-content max-w-[800px] mx-auto mt-4">
            DeepSoul combines multiple approaches to provide comprehensive
            support for your mental wellbeing journey.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white/90 dark:bg-slate-800/90 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-content dark:text-content"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-heading dark:text-heading">
                {card.title}
              </h3>
              <p className="text-content dark:text-content">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
