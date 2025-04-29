import { FC } from "react";
import {
  CalendarDaysIcon,
  ClockIcon,
  VideoCameraIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";

type FeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: FeatureItemProps[] = [
  {
    title: "Flexible Scheduling",
    description: "Book appointments that fit your busy life",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary" />,
  },
  {
    title: "Personalized Matching",
    description: "Find therapists who specialize in your specific needs",
    icon: <ClockIcon className="h-5 w-5 text-primary" />,
  },
  {
    title: "Virtual Sessions",
    description: "Attend therapy from the comfort of your home",
    icon: <VideoCameraIcon className="h-5 w-5 text-primary" />,
  },
  {
    title: "Direct Communication",
    description: "Message your therapist between sessions",
    icon: <PhoneIcon className="h-5 w-5 text-primary" />,
  },
];

const FeatureItem: FC<FeatureItemProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="bg-content/15 dark:bg-content/15 p-2 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-heading dark:text-heading">{title}</h3>
      <p className=" text-content dark:text-content text-sm">{description}</p>
    </div>
  </div>
);

const TherapySection: FC = () => {
  return (
    <section className="bg-white dark:bg-background px-4 md:px-6">
      <div className="min-h-screen max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-20 lg:px-6">
        <div className="text-left">
          <span className="text-primary bg-primary/10 display-inline-block px-4 py-3 rounded-full">
            Professional Support
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-heading mt-6">
            Connect with Licensed Therapists
          </h1>
          <p className="text-lg text-content dark:text-content mt-4">
            Find the right therapist who understands your unique needs. Our
            platform makes it easy to schedule sessions, whether in-person or
            virtual, so you can get the support you need, when you need it.
          </p>
          <div className="space-y-4 mt-6">
            {features.map((feature, index) => (
              <FeatureItem key={index} {...feature} />
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
          {/* Placeholder for image or illustration */}
        </div>
      </div>
    </section>
  );
};

export default TherapySection;
