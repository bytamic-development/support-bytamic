import { cn } from "@/lib/utils";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  details?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <span className="size-6 text-primary">✨</span>,
  title = "Featured",
  description = "Discover amazing content",
  details = "Just now",
  iconClassName = "text-primary",
  titleClassName = "text-primary",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-44 w-[28rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-gradient-to-br from-primary/10 via-background/95 to-secondary/20 backdrop-blur-md px-6 py-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[26rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-primary/40 hover:bg-gradient-to-br hover:from-primary/20 hover:via-background/90 hover:to-secondary/30 [&>*]:flex [&>*]:items-center [&>*]:gap-2 shadow-xl",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-secondary/40 p-2 shadow-lg shadow-primary/20">
          {icon}
        </span>
        <p className={cn("text-xl font-bold font-poppins tracking-tight", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg font-mono text-accent/90">{description}</p>
      <p className="text-accent/60 text-base font-mono">{details}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards = [
    {
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 w-full justify-center">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}

