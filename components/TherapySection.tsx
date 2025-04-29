import type { FC, ReactNode } from "react";
import {
  CalendarDaysIcon,
  ClockIcon,
  VideoCameraIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";

type FeatureItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

type TherapistCardProps = {
  name: string;
  specialization: string;
  image: string;
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
      <p className="text-sm text-content dark:text-content">{description}</p>
    </div>
  </div>
);

const TherapistCard: FC<TherapistCardProps> = ({
  name,
  specialization,
  image,
}) => (
  <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow animate-fade-in">
    <div className="flex items-center gap-4">
      <Image
        src={image}
        alt={name}
        width={64}
        height={64}
        className="h-16 w-16 rounded-full object-cover"
      />
      <div>
        <h4 className="font-medium text-lg text-heading dark:text-heading">
          {name}
        </h4>
        <p className="text-sm text-content dark:text-content">
          {specialization}
        </p>
      </div>
    </div>
  </div>
);

const TherapySection: FC = () => {
  return (
    <section className="bg-white dark:bg-background px-4 md:px-6">
      <div className="min-h-screen max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-20 lg:px-6">
        <div className="text-left">
          <span className="text-primary bg-primary/10 inline-block px-4 py-3 rounded-full">
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

        <div className="grid grid-cols-2 gap-4">
          <div className="w-full rounded-2xl p-6 shadow-md text-center bg-gradient-to-br from-lime-100 to-purple-200 dark:from-content dark:to-primary/50 col-span-2">
            <h3 className="text-3xl mb-3 text-heading dark:text-heading">
              Our Therapists
            </h3>
            <p className="text-content dark:text-content mb-4">
              Our network includes hundreds of licensed professionals ready to
              support you.
            </p>
          </div>
          <TherapistCard
            name="Dr. Sarah Johnson"
            specialization="Anxiety & Depression"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNt9UpcsobJNOGFHPeBt-88iRmqjflBnIjhw&s"
          />
          <TherapistCard
            name="Dr. Michael Chen"
            specialization="Trauma & PTSD"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNt9UpcsobJNOGFHPeBt-88iRmqjflBnIjhw&s"
          />
          <TherapistCard
            name="Dr. Amara Patel"
            specialization="Relationship Issues"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNt9UpcsobJNOGFHPeBt-88iRmqjflBnIjhw&s"
          />

          <div className="w-full rounded-2xl p-5 shadow-md text-center bg-gradient-to-br from-pink-200 to-purple-200 dark:from-content dark:to-primary/50">
            <h3 className="text-3xl text-heading dark:text-heading">200+</h3>
            <p className="text-content dark:text-content">
              Licensed therapists ready to help
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TherapySection;
