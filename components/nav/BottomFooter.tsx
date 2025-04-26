import Link from "next/link";

type Section = {
  sectionName: string;
  list: string[];
  href: string;
};

const SECTIONS: Section[] = [
  {
    sectionName: "Features",
    list: [
      "Therapy Booking",
      "Self-Help Exercises",
      "Therapist Buddy",
      "Community Support",
      "Wellness Resources",
    ],
    href: "#features",
  },
  {
    sectionName: "Resources",
    list: ["Articles", "Blogs", "Podcasts", "Audiobooks", "Research"],
    href: "#therapy",
  },
  {
    sectionName: "Company",
    list: ["About Us", "Our Team", "Careers", "Contact", "Privacy Policy"],
    href: "#",
  },
];

const Sections = ({ sectionName, list, href }: Section) => (
  <div>
    <h3 className="font-semibold text-lg mb-4 text-heading dark:text-heading">
      {sectionName}
    </h3>
    <ul className="space-y-3">
      {list.map((val) => (
        <li key={val}>
          <Link
            href={href}
            className="hover:text-primary transition-colors text-content dark:text-content"
          >
            {val}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const BottomFooter = () => {
  return (
    <footer className="bg-background dark:bg-background border-t border-gray-300 pt-12 pb-8">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link
            className="flex items-center mb-6 text-2xl text-primary font-bold"
            href="/"
          >
            DeepSoul
          </Link>
          <p className="text-content dark:text-content mb-4">
            Your journey to inner peace and mental wellbeing starts here.
          </p>
        </div>

        {SECTIONS.map((section) => (
          <Sections key={section.sectionName} {...section} />
        ))}
      </div>
    </footer>
  );
};

export default BottomFooter;
