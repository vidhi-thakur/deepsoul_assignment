import type { FC } from "react";
import {
  BoltIcon,
  ClockIcon,
  BookOpenIcon,
  PlayIcon,
} from "@heroicons/react/16/solid";

interface ExerciseCardProps {
  icon: React.ReactNode;
  title: string;
  duration: string;
}

type Mood = {
  label: string;
  color: string;
  isCurrent?: boolean;
};

const moods = [
  { label: "Low", color: "bg-red-100 dark:bg-red-900" },
  { label: "Mild", color: "bg-orange-100 dark:bg-orange-900" },
  {
    label: "Okay",
    color: "bg-yellow-100 dark:bg-yellow-900",
    isCurrent: true,
  },
  { label: "Good", color: "bg-green-100 dark:bg-green-900" },
  { label: "Great", color: "bg-blue-100 dark:bg-blue-900" },
];

const ExerciseCard: FC<ExerciseCardProps> = ({ icon, title, duration }) => (
  <article
    className="rounded-xl p-4 shadow-sm hover:shadow-md dark:shadow-none dark:hover:shadow-none transition-shadow flex items-center gap-4"
    aria-label={`${title} - ${duration}`}
  >
    <div
      className="h-12 w-12 rounded-full flex items-center justify-center bg-content/15 "
      aria-hidden
    >
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-heading dark:text-heading">{title}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400">{duration}</p>
    </div>
  </article>
);

const MoodLevel = ({ label, color, isCurrent }: Mood) => (
  <div className="flex flex-col items-center">
    <div
      className={`${
        isCurrent ? "h-12 w-12 border-2 border-primary" : "h-10 w-10"
      } ${color} rounded-full mb-2`}
    />
    <span
      className={`text-xs ${
        isCurrent
          ? "font-medium text-heading dark:text-heading"
          : "text-content dark:text-content"
      }`}
    >
      {label}
    </span>
  </div>
);

const SelfhelpSection: FC = () => {
  return (
    <section
      className="bg-gradient-to-b from-lime-100 to-background dark:from-primary dark:to-background px-4 md:px-6"
      aria-labelledby="selfhelp-heading"
      id="selfhelp"
    >
      <div className="min-h-screen max-w-[1400px] mx-auto flex flex-col items-center gap-10 py-20 lg:px-6">
        <div className="text-center max-w-3xl">
          <span className="text-blue-500 bg-primary/10 inline-block px-4 py-3 rounded-full text-sm font-medium">
            Daily Practice
          </span>
          <h1
            id="selfhelp-heading"
            className="text-3xl lg:text-4xl font-bold text-heading mt-4"
          >
            Self-Help Tools For Your Wellbeing
          </h1>
          <p className="text-lg text-content dark:text-content mt-4">
            Build resilience and mindfulness with our extensive library of
            guided exercises, meditations, and personalized activities.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          aria-label="Featured Exercises"
        >
          <section className="col-span-1 lg:col-span-2 bg-white dark:bg-slate-800/90 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-heading dark:text-heading">
              Featured Exercises
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ExerciseCard
                icon={<BoltIcon className="h-5 w-5 text-primary" />}
                title="Guided Meditation"
                duration="10 min"
              />
              <ExerciseCard
                icon={<ClockIcon className="h-5 w-5 text-primary" />}
                title="Breathing Exercise"
                duration="5 min"
              />
              <ExerciseCard
                icon={<BookOpenIcon className="h-5 w-5 text-primary" />}
                title="Mindful Journaling"
                duration="15 min"
              />
              <ExerciseCard
                icon={<PlayIcon className="h-5 w-5 text-primary" />}
                title="Sleep Stories"
                duration="20 min"
              />
            </div>

            <div className="mt-8" aria-label="Progress Tracker">
              <h3 className="text-xl font-semibold mb-4 text-heading dark:text-heading">
                Your Daily Progress
              </h3>
              <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full">
                <div
                  className="h-full w-3/5 bg-gradient-to-r from-primary/70 to-primary/90 rounded-full"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Exercise completion"
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm text-slate-600 dark:text-slate-400">
                <span>3 of 5 exercises completed</span>
                <span>60%</span>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-6">
            <div className="w-full rounded-2xl p-6 shadow-md text-left bg-gradient-to-br from-purple-200 to-pink-200 dark:from-content dark:to-primary/50">
              <h3 className="text-xl mb-3 font-semibold text-heading dark:text-heading">
                Personalized For You
              </h3>
              <p className="text-content dark:text-content mb-4">
                Exercises tailored to your needs and goals based on your
                progress.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 shadow-md">
              <h3 className="font-semibold text-xl mb-3 text-heading dark:text-heading">
                Track Your Mood
              </h3>
              <p className="text-content dark:text-content mb-4">
                Monitor your emotional wellbeing with our daily check-ins.
              </p>
              <div className="flex justify-between items-center mt-4">
                {moods.map((mood) => (
                  <MoodLevel key={mood.label} {...mood} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default SelfhelpSection;
