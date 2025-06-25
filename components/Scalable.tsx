import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Puzzle, Code, Database } from "lucide-react";
import { Button } from "./ui/button";
import { Boxes } from "lucide-react";

const WhatAreWe = () => {
  const features = [
    {
      icon: <Puzzle className="w-8 h-8 text-white" />,
      title: "Marketplace of MCPs.",
      description: "Discover and integrate various MCP protocols",
    },
    {
      icon: <Code className="w-8 h-8 text-white" />,
      title: "Voice-Driven task execution",
      description: "Execute tasks through natural voice commands",
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "MCP protocol for blockchain",
      description: "Specialized protocols for blockchain integration",
    },
  ];

  return (
    <section className="bg-black text-white pt-20 px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto rounded-4xl relative z-10">
        {/* Header Badge */}
        <div className="flex justify-center mb-4">
          <Button className="text-lg border-2 my-8 border-neutral-700 rounded-2xl bg-neutral-900">
            <Boxes /> Bringing Scalable MPC Together
          </Button>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            What are we?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            We are MCP protocol for Blockchain and real-world
            platforms like Maps, GitHub etc. Built on QEDA, it powers
            real-time, voice-driven execution with support for custom
            protocols.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className=" transition-all duration-500 hover:scale-105 group cursor-pointer"
            >
              <CardContent className="p-8 text-center border-0 flex flex-row justify-center items-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center group-hover:from-gray-600 group-hover:to-gray-700 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-white/10">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-gray-100 transition-colors duration-300">
                  {feature.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatAreWe;
