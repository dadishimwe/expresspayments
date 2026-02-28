"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import Image from "next/image";
import { ReactNode } from "react";

interface PremiumTestimonialProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
  highlightWords?: string[];
}

export function PremiumTestimonial({
  quote,
  author,
  role,
  image,
  highlightWords = [],
}: PremiumTestimonialProps) {
  // Highlight specific words in the quote
  const renderQuote = (): (string | ReactNode)[] => {
    let parts: (string | ReactNode)[] = [quote];
    
    highlightWords.forEach((word) => {
      parts = parts.flatMap((part) => {
        if (typeof part !== "string") return part;
        const regex = new RegExp(`(${word})`, "gi");
        return part.split(regex).map((segment, i) => 
          regex.test(segment) ? (
            <span key={i} className="font-bold text-slate-900 dark:text-white">
              {segment}
            </span>
          ) : (
            segment
          )
        );
      });
    });
    
    return parts;
  };

  return (
    <ScrollReveal>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
        {/* Left: Quote Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Testimonial
          </div>
          
          <blockquote className="text-2xl md:text-3xl leading-tight font-semibold">
            &ldquo;{renderQuote()}&rdquo;
          </blockquote>

          <div className="space-y-1 pt-4">
            <p className="font-semibold text-slate-900 dark:text-white">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </motion.div>

        {/* Right: Image Section */}
        {image && (
          <motion.div
            className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={image}
              alt={author}
              fill
              className="object-cover"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            
            {/* Accent Corner */}
            <motion.div
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-green-500"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        )}
      </div>
    </ScrollReveal>
  );
}
