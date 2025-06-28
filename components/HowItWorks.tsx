"use client";

// import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, Rocket, Settings, Play } from "lucide-react";
import { CompareDemo } from "./ui/Howitworks-components";
import { GlobeDemo } from "./ui/Howitworks-components";
import { AnimatedListDemo } from "./ui/Howitworks-components";

const HowItWorks = () => {
  // const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Choose a MCP Server",
      description:
        "Launch your own compute server or pick from existing nodes listed on the marketplace.",
      icon: <Server className="w-6 h-6" />,
      component: <AnimatedListDemo />, // Optional component to show notifications
    },
    {
      title: "Deploy",
      description:
        "Deploy the MCP node on our Q-flow servers. This will spin a private server in our backend infrastructure.",
      icon: <Rocket className="w-6 h-6" />,
      component: <CompareDemo />, // Optional component to show tech stack
    },
    {
      title: "Register And Publish",
      description:
        "Enter credentials to make MCP work on commands and publish in test playground.",
      icon: <Settings className="w-6 h-6" />,
      component: <GlobeDemo />, // Optional component to show tech stack
    },
    {
      title: "Test in Playground",
      description:
        "Use the Playground to simulate inputs, observe outputs, and configure runtime behaviors.",
      icon: <Play className="w-6 h-6" />,
      component: <CompareDemo />, // Optional component to show tech stack
    },
  ];

  return (
    <section className="bg-black text-white px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <Button className="btn-text-small border-2 my-8 border-neutral-700 rounded-2xl bg-neutral-900 px-6 py-3">
            Bringing Scalable MPC Together
          </Button>
          <h2 className="text-display-medium mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            How it Works
          </h2>

          <p className="text-body-large text-gray-400 max-w-3xl mx-auto">
            Select from the marketplace, deploy or list nodes built to
            run:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border border-[#212121] h-[37rem] bg-[#0f0f0f] transition-all duration-500 cursor-pointer group hover:border-neutral-600"
              onClick={() => setActiveStep(index)}
            >
              <CardContent className="px-6 py-2">
                <h3 className="text-title-large text-center text-white group-hover:text-gray-100 transition-colors mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-body-medium text-gray-400 text-center mb-6 group-hover:text-gray-300 transition-colors">
                  {step.description}
                </p>
                {step.component}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Step navigation dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className="w-3 h-3 rounded-full transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
