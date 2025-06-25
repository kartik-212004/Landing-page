"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Server,
  Rocket,
  Settings,
  Play,
  Database,
  Triangle,
  Github,
  ArrowUp,
} from "lucide-react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Choose a MCP Server",
      description:
        "Launch your own compute server or pick from existing nodes listed on the marketplace.",
      icon: <Server className="w-6 h-6" />,
      visual: (
        <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 overflow-hidden">
          {/* Radar/Server Selection Visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Radar circles */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`absolute border border-white/20 rounded-full animate-ping`}
                  style={{
                    width: `${i * 40}px`,
                    height: `${i * 40}px`,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: "2s",
                  }}
                />
              ))}
              {/* Center logo */}
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center relative z-10">
                <Server className="w-4 h-4 text-black" />
              </div>
            </div>
          </div>

          {/* Server options */}
          <div className="absolute right-4 top-4 space-y-2">
            {[
              {
                name: "Redis",
                color: "bg-red-500",
                icon: <Database className="w-3 h-3" />,
              },
              {
                name: "Microsoft Playwright MCP",
                color: "bg-green-500",
                icon: <Play className="w-3 h-3" />,
              },
              {
                name: "Alchemy MCP Server",
                color: "bg-blue-500",
                icon: <Triangle className="w-3 h-3" />,
              },
              {
                name: "Base",
                color: "bg-gray-500",
                icon: (
                  <div className="w-3 h-3 bg-white rounded-full" />
                ),
              },
              {
                name: "Github",
                color: "bg-gray-700",
                icon: <Github className="w-3 h-3" />,
              },
            ].map((server, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-black/40 rounded px-2 py-1 text-xs text-white backdrop-blur-sm"
              >
                <div
                  className={`w-2 h-2 ${server.color} rounded-full flex items-center justify-center`}
                >
                  {server.icon}
                </div>
                {server.name}
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Deploy",
      description:
        "Deploy the MCP node on our Q-flow servers. This will spin a private server in our backend infrastructure.",
      icon: <Rocket className="w-6 h-6" />,
      visual: (
        <div className="relative h-64 bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg p-4 overflow-hidden">
          {/* Deployment animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Spinning deployment ring */}
              <div className="w-32 h-32 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
              <div className="absolute inset-4 w-24 h-24 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin animate-reverse"></div>

              {/* Center deployment icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Register And Publish",
      description:
        "Enter credentials to make MCP work on commands and publish in test playground.",
      icon: <Settings className="w-6 h-6" />,
      visual: (
        <div className="relative h-64 bg-gradient-to-br from-gray-900 to-black rounded-lg p-4 overflow-hidden">
          {/* Command interface */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black/60 rounded-lg p-3 border border-gray-700">
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Terminal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">$</span>
                <span className="text-white text-sm">
                  Give any command...
                </span>
                <ArrowUp className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Star field effect */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Test in Playground",
      description:
        "Use the Playground to simulate inputs, observe outputs, and configure runtime behaviors.",
      icon: <Play className="w-6 h-6" />,
      visual: (
        <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 overflow-hidden">
          {/* Code editor mockup */}
          <div className="bg-black/80 rounded-lg p-4 h-full border border-gray-700">
            {/* Window controls */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            {/* Code content */}
            <div className="font-mono text-sm space-y-2">
              <div className="text-gray-500"></div>
              <div className="text-blue-400">
                <span className="text-red-400">inputs</span>:{" "}
                <span className="text-green-400">poker</span>
              </div>
              <div className="text-blue-400">
                <span className="text-red-400">type</span>:{" "}
                <span className="text-green-400">game</span>
              </div>
              <div className="text-blue-400">
                <span className="text-red-400">description</span>:{" "}
                <span className="text-green-400">
                  Personal Access Token
                </span>
              </div>
              <div className="text-purple-400">
                <span className="text-red-400">password</span>:{" "}
                <span className="text-yellow-400">ACCESS_TOKEN</span>
              </div>
              <div className="text-blue-400">
                <span className="text-red-400">servers</span>: {"{"}
              </div>
              <div className="text-blue-400 ml-4">
                <span className="text-red-400">github</span>:{" "}
                <span className="text-green-400">gh/github-mcp</span>
              </div>
              <div className="text-blue-400 ml-4">
                <span className="text-red-400">command</span>:{" "}
                <span className="text-green-400">...</span>
              </div>
              <div className="text-blue-400">{"}"}</div>
            </div>
          </div>
        </div>
      ),
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
        <div className="text-center mb-16">
          <Button className="text-lg border-2 my-8 border-neutral-700 rounded-2xl bg-neutral-900">
            Bringing Scalable MPC Together
          </Button>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            How it Works
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Select from the marketplace, deploy or list nodes built to
            run:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className={`bg-white/5 border-white/10 backdrop-blur-lg hover:bg-white/10 transition-all duration-500 cursor-pointer group ${
                activeStep === index
                  ? "ring-2 ring-purple-500/50 bg-white/10"
                  : ""
              }`}
              onClick={() => setActiveStep(index)}
            >
              <CardContent className="p-6">
                {/* Step number and icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                    <span className="text-xs text-gray-500 font-mono">
                      STEP {index + 1}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gray-100 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {step.description}
                </p>

                {/* Visual */}
                <div className="rounded-lg overflow-hidden">
                  {step.visual}
                </div>

                {/* Step indicator */}
                <div className="flex justify-center mt-4">
                  <div
                    className={`w-2 h-2 rounded-full transition-colors ${
                      activeStep === index
                        ? "bg-purple-500"
                        : "bg-gray-600"
                    }`}
                  />
                </div>
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep === index
                  ? "bg-purple-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
