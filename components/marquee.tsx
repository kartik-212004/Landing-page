"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="flex flex-col ">
      {/* First marquee - moving left */}
      <div className=" rounded-md flex flex-col antialiased bg-black/50 dark:bg-grid-white/[0.03] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div>

      {/* Second marquee - moving right */}
      <div className="rounded-md flex flex-col antialiased bg-black/50 dark:bg-grid-white/[0.03] items-center justify-center relative overflow-hidden">
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
