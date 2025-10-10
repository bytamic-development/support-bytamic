import DisplayCards from "@/components/ui/display-cards";
import { Settings, Zap, TrendingUp } from "lucide-react";

const processCards = [
  {
    icon: <TrendingUp className="size-6 text-primary" />,
    title: "Operate & Optimize",
    description: "Monitor & Improve",
    details: "Phase 3",
    iconClassName: "text-primary",
    titleClassName: "text-primary",
    className:
      "[grid-area:stack] hover:-translate-y-16 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Zap className="size-6 text-primary" />,
    title: "Integration & Onboarding",
    description: "Workflows & Knowledge",
    details: "Phase 2",
    iconClassName: "text-primary",
    titleClassName: "text-primary",
    className:
      "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-8 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Settings className="size-6 text-primary" />,
    title: "Discovery & Setup",
    description: "Requirements & Configuration",
    details: "Phase 1",
    iconClassName: "text-primary",
    titleClassName: "text-primary",
    className:
      "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-16",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" aria-labelledby="process-title">
      {/* Background Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full ring-1 ring-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary shadow-sm mb-8">
            <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span className="font-mono tracking-wider">OUR PROCESS</span>
          </div>
          <h2 id="process-title" 
              className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6 text-accent">
            How we <span className="text-primary font-mono italic">transform</span> your support
          </h2>
          <p className="text-lg sm:text-xl text-accent/75 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            A structured, proven approach to implementing AI-powered support excellence
          </p>
        </div>
        
        {/* Display Cards */}
        <div className="flex w-full items-center justify-center py-12 pb-20 animate-slide-up">
          <div className="w-full max-w-4xl flex justify-center">
            <DisplayCards cards={processCards} />
          </div>
        </div>
      </div>
    </section>
  );
}

