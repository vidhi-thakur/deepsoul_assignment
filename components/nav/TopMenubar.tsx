import Link from "next/link";

const TopMenubar = () => {
  return (
    <div className="w-full py-4 border-b border-border bg-background/80 backdrop-blur-md fixed top-0 z-50">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <h1>DeepSoul</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            className="text-muted-foreground hover:text-deepsoul-600 dark:hover:text-deepsoul-400 transition-colors"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-muted-foreground hover:text-deepsoul-600 dark:hover:text-deepsoul-400 transition-colors"
            href="#therapy"
          >
            Therapy
          </Link>
          <Link
            className="text-muted-foreground hover:text-deepsoul-600 dark:hover:text-deepsoul-400 transition-colors"
            href="#selfhelp"
          >
            Self help
          </Link>
          <Link
            className="text-muted-foreground hover:text-deepsoul-600 dark:hover:text-deepsoul-400 transition-colors"
            href="#community"
          >
            Community
          </Link>
        </nav>
        <div className="md:hidden flex flex-col gap-1.5" aria-label="Open menu">
          <span className="block w-6 h-0.5 bg-foreground dark:bg-foreground"></span>
          <span className="block w-6 h-0.5 bg-foreground dark:bg-foreground"></span>
          <span className="block w-6 h-0.5 bg-foreground dark:bg-foreground"></span>
        </div>
        {/* add toggle button here */}
        {/* <div className="md:hidden flex flex-col gap-1.5"></div> */}
      </div>
    </div>
  );
};

export default TopMenubar;
