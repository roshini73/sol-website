"use client";

import { useEffect, useState } from "react";

const phrases = [
  ["hangouts >", "hosting"],
  ["pregames >", "parties"],
  ["casual >", "curated"],
];

const ROTATE_INTERVAL_MS = 4000;
const FADE_MS = 2000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setVisible(true);
      }, FADE_MS / 2);
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pl-[20%] pr-8 pb-[120px]"
    >
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold text-white tracking-wider text-glow mb-4">
          sol
        </h1>
        <h2
          className="text-5xl md:text-7xl font-semibold text-white tracking-wide text-glow leading-tight mb-6 transition-opacity ease-in-out"
          style={{
            opacity: visible ? 1 : 0,
            transitionDuration: `${FADE_MS / 2}ms`,
          }}
        >
          {phrases[index][0]}
          <br />
          {phrases[index][1]}
        </h2>
        <a
          href="https://apps.apple.com/us/app/sol-always-in-touch/id6742982037"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/badges/app-store-badge.svg"
            alt="Download on the App Store"
            className="h-12 w-auto"
          />
        </a>
      </div>
    </section>
  );
}
