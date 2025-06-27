import React from "react";
import { Button } from "./ui/button";
import { InfiniteMovingCardsDemo } from "./marquee";

export default function Recommended() {
  return (
    <section className="bg-black text-white pt-20 px-4 relative flex  space-y-10 flex-col justify-center items-center overflow-hidden">
      <Button className="text-lg border-2 border-neutral-700 rounded-2xl bg-neutral-900">
        What people has to say
      </Button>
      <h1 className="text-5xl font-bold flex flex-col text-center">
        Recommended by leaders in the <br /> digital asset industry.
      </h1>
      <InfiniteMovingCardsDemo />
    </section>
  );
}
