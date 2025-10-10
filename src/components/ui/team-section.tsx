"use client";

import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Anna",
    designation: "Lead Support Services",
    image: "/Team/Anna.png",
  },
  {
    id: 2,
    name: "Maciej",
    designation: "Lead Service Desk",
    image: "/Team/Maciej.png",
  },
  {
    id: 3,
    name: "Sławomir",
    designation: "Lead IT Infrastructure",
    image: "/Team/Sławomir.png",
  },
];

function TeamSection() {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}

export { TeamSection };

