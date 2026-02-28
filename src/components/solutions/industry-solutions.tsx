"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { HoverScale } from "@/components/animations/hover-scale";
import Link from "next/link";
import { UtensilsCrossedIcon, ShoppingBagIcon, WrenchIcon } from "lucide-react";

const solutions = [
  {
    icon: <UtensilsCrossedIcon className="h-12 w-12" />,
    title: "Restaurants & Cafes",
    description: "Streamline order processing with Clover Flex for tableside payments and kitchen display systems.",
    features: [
      "Tableside payment processing",
      "Kitchen display integration",
      "Inventory management",
      "Staff scheduling tools",
    ],
    device: "Clover Flex",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <ShoppingBagIcon className="h-12 w-12" />,
    title: "Retail Stores",
    description: "Maximize checkout efficiency with Clover Station Duo's dual-screen setup and advanced reporting.",
    features: [
      "Dual-screen checkout",
      "Inventory tracking",
      "Customer loyalty programs",
      "Real-time analytics",
    ],
    device: "Clover Station Duo",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <WrenchIcon className="h-12 w-12" />,
    title: "Service Businesses",
    description: "Accept payments anywhere with Clover Mini's compact design, perfect for on-site service calls.",
    features: [
      "Portable payment processing",
      "Invoice management",
      "Service scheduling",
      "Customer receipts",
    ],
    device: "Clover Mini",
    color: "from-green-500 to-emerald-500",
  },
];

export function IndustrySolutions() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 py-14 md:py-25">
      <div className="flex flex-col items-center gap-4 text-center">
        <Badge variant="secondary" className="uppercase">
          Industry Solutions
        </Badge>
        <h2 className="text-3xl font-medium tracking-tight sm:text-5xl">
          Built for Your Business
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Whether you run a restaurant, retail store, or service business, we have the perfect solution for you.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        {solutions.map((solution, index) => (
          <ScrollReveal key={solution.title} delay={index * 0.1}>
            <HoverScale>
              <div className="flex h-full flex-col rounded-lg border bg-card p-8 transition-shadow hover:shadow-lg">
                {/* Icon */}
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br ${solution.color} text-white`}>
                  {solution.icon}
                </div>

                {/* Title */}
                <h3 className="mb-2 text-xl font-semibold">{solution.title}</h3>

                {/* Description */}
                <p className="mb-6 text-sm text-muted-foreground">{solution.description}</p>

                {/* Features */}
                <ul className="mb-6 space-y-2 flex-grow">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Device Badge */}
                <Badge className="mb-4 w-fit bg-slate-200 text-slate-900 dark:bg-slate-700 dark:text-slate-100">
                  {solution.device}
                </Badge>

                {/* CTA */}
                <Button asChild className="w-full">
                  <Link href="/pricing">Learn More</Link>
                </Button>
              </div>
            </HoverScale>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
