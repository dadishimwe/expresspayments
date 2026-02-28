"use client";

import { Wreath } from "@/components/showcase/wreath";
import { Star, HalfStar } from "@/components/showcase/star";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { motion } from "framer-motion";

export function Showcase() {
  return (
    <motion.div 
      className="relative mx-auto mt-12 mb-8 grid w-fit grid-cols-3 gap-8 md:my-24 md:gap-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Wreath>
        <p className="mb-0.5 text-[0.625rem] md:text-base">Merchant Rating</p>
        <div className="flex items-center text-amber-400 [&>svg]:size-2.5 md:[&>svg]:size-5">
          <Star />
          <Star />
          <Star />
          <Star />
          <HalfStar />
        </div>
        <p className="text-xl font-bold md:mt-1.5 md:text-3xl">4.9</p>
      </Wreath>
      <Wreath>
        <p className="text-[0.625rem] md:text-base">Trusted By</p>
        <p className="mt-1.5 text-center text-xs font-bold md:text-2xl">
          <AnimatedCounter value={10000} suffix="+ Merchants" duration={2} />
        </p>
      </Wreath>
      <Wreath>
        <p className="text-[0.625rem] md:text-base">Processed</p>
        <p className="mt-1.5 text-center text-xs font-bold text-balance md:text-2xl">
          $<AnimatedCounter value={500} suffix="M+ Annually" duration={2.5} />
          <br />
        </p>
      </Wreath>
    </motion.div>
  );
}
