"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { AnimatedCounter } from "@/components/animations/animated-counter";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  description?: string;
}

interface PremiumStatsProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
}

export function PremiumStats({ stats, columns = 4 }: PremiumStatsProps) {
  const gridColsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <div className={`grid w-full grid-cols-1 gap-8 ${gridColsClass[columns]}`}>
      {stats.map((stat, index) => (
        <ScrollReveal key={stat.label} delay={index * 0.1}>
          <motion.div
            className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900"
            whileHover={{
              borderColor: "rgb(34, 197, 94)",
              boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Counter */}
            <div className="flex items-baseline gap-2">
              <div className="text-4xl md:text-5xl font-bold text-green-600">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>
            </div>

            {/* Label */}
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {stat.label}
            </h3>

            {/* Description (if provided) */}
            {stat.description && (
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            )}

            {/* Accent Line */}
            <motion.div
              className="h-1 w-12 bg-gradient-to-r from-green-500 to-green-400"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  );
}
