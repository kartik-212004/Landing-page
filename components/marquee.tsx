"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="flex flex-col gap-6 py-8">
      {/* First marquee - moving left */}
      <div className="h-[16rem] rounded-md flex flex-col antialiased bg-black/50 dark:bg-grid-white/[0.03] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>
      
      {/* Second marquee - moving right */}
      <div className="h-[16rem] rounded-md flex flex-col antialiased bg-black/50 dark:bg-grid-white/[0.03] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials2}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const testimonials2 = [
  {
    quote:
      "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    name: "Steve Jobs",
    title: "Apple Co-founder",
  },
  {
    quote:
      "Innovation distinguishes between a leader and a follower. Stay hungry, stay foolish.",
    name: "Steve Jobs",
    title: "Stanford Commencement",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    name: "Eleanor Roosevelt",
    title: "First Lady",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    name: "Winston Churchill",
    title: "British Prime Minister",
  },
  {
    quote:
      "Life is what happens to you while you're busy making other plans.",
    name: "John Lennon",
    title: "The Beatles",
  },
];
