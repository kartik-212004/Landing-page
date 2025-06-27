import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ThreeDMarqueeDemo } from "./ui/WhatWeProve-components";

const ServicesSection = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Header Badge */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center gap-2  border border-gray-700 rounded-full px-4 py-2">
          <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <span className="text-gray-300 text-sm font-medium">
            Your Average LLM's On Steroids
          </span>
        </div>
      </div>

      {/* Main Title */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-white mb-4">
          What we provide?
        </h1>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Q-Flow Scalable Backend Infrastructure */}
          <Card className="border border-[#212121] bg-[#0f0f0f] ">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Q-Flow Scalable Backend Infrastructure
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Protocol extension that makes it easy to deploy and
                connect MCP servers across blockchain ecosystems.
              </p>
            </CardContent>
            {/* <ThreeDMarqueeDemo /> */}
          </Card>

          {/* Cross-Chain Compute and Data Access */}
          <Card className="border border-[#212121] bg-[#0f0f0f] ">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Cross-Chain Compute and Data Access
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Supports scalable, accurate MCP services that fetch,
                process, and relay data across multiples chains.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Voice-First Server Interface */}
          <Card className="border border-[#212121] bg-[#0f0f0f] ">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Voice-First Server Interface
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Enables natural voice interaction with MCP servers -
                trigger tasks, deploy logic, or query outputs just by
                speaking.
              </p>
            </CardContent>
          </Card>

          {/* Unified Platform for MCP Services */}
          <Card className="border border-[#212121] bg-[#0f0f0f] ">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Unified Platform for MCP Services
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                A developer-friendly marketplace and playground to
                list, access, and integrate compute services in real
                time.
              </p>
            </CardContent>
          </Card>

          {/* Tooling for Faster Development */}
          <Card className="border border-[#212121] bg-[#0f0f0f] ">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Tooling for Faster Development
              </h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                SDKs, templates, and APIs that accelerate the build,
                testing, and deployment of MCP-based AI models and
                on-chain logic.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
