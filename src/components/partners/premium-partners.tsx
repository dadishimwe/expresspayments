"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { HoverScale } from "@/components/animations/hover-scale";
import { Badge } from "@/components/ui/badge";

interface Partner {
  name: string;
  icon: React.ReactNode;
  description?: string;
}

interface PremiumPartnersProps {
  title: string;
  subtitle: string;
  partners: Partner[];
  columns?: 2 | 3 | 4;
}

export function PremiumPartners({
  title,
  subtitle,
  partners,
  columns = 4,
}: PremiumPartnersProps) {
  const gridColsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 py-14 md:py-20">
      {/* Header */}
      <ScrollReveal className="flex flex-col items-center gap-4 text-center">
        <Badge variant="secondary" className="uppercase">
          Our Partners
        </Badge>
        <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground">
          {subtitle}
        </p>
      </ScrollReveal>

      {/* Partners Grid */}
      <div className={`grid w-full grid-cols-1 gap-6 ${gridColsClass[columns]}`}>
        {partners.map((partner, index) => (
          <ScrollReveal key={partner.name} delay={index * 0.05}>
            <HoverScale>
              <motion.div
                className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:border-green-500 hover:bg-green-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-green-500 dark:hover:bg-slate-800"
                whileHover={{
                  boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.1)",
                }}
              >
                {/* Icon */}
                <motion.div
                  className="text-4xl transition-all duration-300 group-hover:scale-110"
                  whileHover={{ rotate: 10 }}
                >
                  {partner.icon}
                </motion.div>

                {/* Name */}
                <h3 className="text-center font-semibold text-slate-900 dark:text-white">
                  {partner.name}
                </h3>

                {/* Description (if provided) */}
                {partner.description && (
                  <p className="text-center text-sm text-muted-foreground">
                    {partner.description}
                  </p>
                )}

                {/* Hover Indicator */}
                <motion.div
                  className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </HoverScale>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
