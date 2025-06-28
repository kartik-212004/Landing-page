import React from "react";
import { Card, CardContent } from "@/components/ui/card";
// import stack from "../public/image-stack.png";
import { Button } from "./ui/button";

const ServicesSection = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex flex-row justify-center items-center mb-12 ">
        <Button className="btn-text-small border-2 my-8 border-neutral-700 rounded-2xl bg-neutral-900 px-6 py-3">
          Your Average LLM&apos;s On Steroids
        </Button>
      </div>
      {/* Main Title */}
      <div className="text-center mb-20">
        <h1 className="text-display-medium text-white mb-6">
          What we provide?
        </h1>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Row - 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Q-Flow Scalable Backend Infrastructure */}
          <Card className="border border-[#212121] bg-[#0f0f0f] transition-all duration-300 hover:border-neutral-600">
            <CardContent className="p-8">
              <h3 className="text-title-large text-white mb-4">
                Q-Flow Scalable Backend Infrastructure
              </h3>
              <p className="text-body-medium text-gray-400">
                Protocol extension that makes it easy to deploy and
                connect MCP servers across blockchain ecosystems.
              </p>
            </CardContent>
            {/* <ThreeDMarqueeDemo /> */}
          </Card>

          {/* Cross-Chain Compute and Data Access */}
          <Card className="border border-[#212121] bg-[#0f0f0f] transition-all duration-300 hover:border-neutral-600">
            <CardContent className="p-8">
              <h3 className="text-title-large text-white mb-4">
                Cross-Chain Compute and Data Access
              </h3>
              <p className="text-body-medium text-gray-400">
                Supports scalable, accurate MCP services that fetch,
                process, and relay data across multiples chains.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Voice-First Server Interface */}
          <Card className="border border-[#212121] bg-[#0f0f0f] transition-all duration-300 hover:border-neutral-600">
            <CardContent className="p-8">
              <h3 className="text-title-medium text-white mb-4">
                Voice-First Server Interface
              </h3>
              <p className="text-body-small text-gray-400">
                Enables natural voice interaction with MCP servers -
                trigger tasks, deploy logic, or query outputs just by
                speaking.
              </p>
            </CardContent>
          </Card>

          {/* Unified Platform for MCP Services */}
          <Card className="border border-[#212121] bg-[#0f0f0f] transition-all duration-300 hover:border-neutral-600">
            <CardContent className="p-8">
              <h3 className="text-title-medium text-white mb-4">
                Unified Platform for MCP Services
              </h3>
              <p className="text-body-small text-gray-400">
                A developer-friendly marketplace and playground to
                list, access, and integrate compute services in real
                time.
              </p>
            </CardContent>
          </Card>

          {/* Tooling for Faster Development */}
          <Card className="border border-[#212121] bg-[#0f0f0f] transition-all duration-300 hover:border-neutral-600">
            <CardContent className="p-8">
              <h3 className="text-title-medium text-white mb-4">
                Tooling for Faster Development
              </h3>
              <p className="text-body-small text-gray-400">
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
