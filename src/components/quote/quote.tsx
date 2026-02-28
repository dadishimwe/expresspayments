import React from "react";

export function Quote() {
  return (
    <figure className="mx-auto flex max-w-3xl flex-col items-center px-4 py-12 text-center">
      <blockquote className="text-3xl leading-[1.1] font-medium tracking-tighter text-balance md:text-5xl md:text-wrap">
        <span>&quot;Switching to Express Payments was the best decision for my business. </span>
        <span className="text-muted-foreground/50">
          The Clover Station Duo is incredibly fast, and the rates are the most transparent I&apos;ve ever seen.&quot;
        </span>
      </blockquote>
      <figcaption className="mt-10">
        <span className="block font-semibold tracking-tight md:text-xl">Sarah Jenkins</span>
        <span className="text-muted-foreground mt-1 block text-xs tracking-tighter md:text-xl">
          Owner · The Daily Grind Coffee Shop
        </span>
      </figcaption>
    </figure>
  );
}
