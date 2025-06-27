import React from "react";
import { Database, Play, Triangle, Github } from "lucide-react";
import { Compare } from "@/components/ui/compare";

const techStackItems = [
  {
    name: "Redis",
    icon: <Database className="w-5 h-5" />,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    name: "Microsoft Playwright MCP",
    icon: <Play className="w-5 h-5" />,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    name: "Alchemy MCP Server",
    icon: <Triangle className="w-5 h-5" />,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    name: "Base",
    icon: <div className="w-4 h-4 bg-white rounded-full" />,
    color: "text-white",
    bgColor: "bg-white/10",
  },
  {
    name: "Github",
    icon: <Github className="w-5 h-5" />,
    color: "text-white",
    bgColor: "bg-white/10",
  },
];

export function TechStack() {
  return (
    <div className="rounded-xl space-y-3">
      {techStackItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-3 border border-[#212121] rounded-2xl bg-[#171717] transition-all duration-200 cursor-pointer group"
        >
          {/* Icon container */}
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-lg ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform duration-200`}
          >
            {item.icon}
          </div>

          {/* Name */}
          <span className="text-white text-sm font-medium group-hover:text-gray-100 transition-colors">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export function CompareDemo() {
  return (
    <div className="w-full h-full min-h-[200px] rounded-lg overflow-hidden">
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="w-full h-full min-h-[200px]"
        slideMode="hover"
      />
    </div>
  );
}
