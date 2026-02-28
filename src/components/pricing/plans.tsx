"use client";

import { Button } from "@/components/ui/button";
import { CheckIcon, CreditCardIcon, SmartphoneIcon, MonitorIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const devices = [
  {
    name: "Clover Flex",
    price: "Free",
    originalPrice: "$2,250 - $3,250",
    icon: <SmartphoneIcon className="size-6" />,
    image: "/products/clover-flex.png",
    features: ["Handheld & Portable", "Built-in Printer", "4G & WiFi Connectivity"],
  },
  {
    name: "Clover Mini",
    price: "Free",
    originalPrice: "$2,250 - $3,250",
    icon: <CreditCardIcon className="size-6" />,
    image: "/products/clover-mini.png",
    features: ["Compact Countertop", "Customer-facing Display", "Full POS Power"],
  },
  {
    name: "Clover Station Duo",
    price: "$999",
    originalPrice: "$3,250+",
    icon: <MonitorIcon className="size-6" />,
    image: "/products/clover-station-duo.png",
    features: ["Dual-screen Setup", "14\" Merchant Display", "8\" Customer Display"],
  },
];

export function Plans() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4">
      <h1 className="mt-8 mb-4 text-3xl font-bold md:text-center md:text-5xl">Industry-Leading Hardware, Unbeatable Rates</h1>
      <p className="text-muted-foreground mb-12 max-w-2xl text-center text-lg">
        Most companies charge between $2,250 to $3,250 for these devices. 
        At Express Payments, we offer the Flex and Mini for <span className="text-foreground font-bold">FREE</span>.
      </p>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
        {devices.map((device) => (
          <div key={device.name} className="bg-card flex flex-col items-center rounded-2xl border p-8 shadow-sm transition-all hover:shadow-md">
            <div className="mb-6 flex h-48 items-center justify-center">
              <Image src={device.image} alt={device.name} width={200} height={200} className="object-contain" />
            </div>
            <h3 className="mb-2 text-2xl font-bold">{device.name}</h3>
            <div className="mb-4 flex flex-col items-center">
              <span className="text-4xl font-bold">{device.price}</span>
              <span className="text-muted-foreground text-sm line-through">Value: {device.originalPrice}</span>
            </div>
            <ul className="mb-8 w-full space-y-3">
              {device.features.map((feature, index) => (
                <li key={index} className="text-foreground/60 flex items-center text-sm">
                  <div className="bg-success mr-2 grid place-items-center rounded-full p-0.5">
                    <CheckIcon className="size-3 p-0.5 text-white" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="mt-auto w-full" size="lg" asChild>
              <Link href="/checkout">Get Started</Link>
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-16 w-full max-w-3xl rounded-2xl border bg-slate-50/50 p-8 text-center dark:bg-slate-900/50">
        <h2 className="mb-4 text-2xl font-bold">Our Service Offer</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center p-4">
            <span className="text-muted-foreground text-sm uppercase tracking-wider">Processing Rates</span>
            <span className="text-3xl font-bold">Interchange + $0.03 + 0.02%</span>
          </div>
          <div className="flex flex-col items-center p-4">
            <span className="text-muted-foreground text-sm uppercase tracking-wider">Monthly Service Fee</span>
            <span className="text-3xl font-bold">$29.99</span>
          </div>
        </div>
        <p className="text-muted-foreground mt-6 text-sm">
          Risk-free trial with no contract. Cancel anytime.
        </p>
      </div>

      <div className="text-muted-foreground mt-12 flex justify-center gap-8 text-sm underline">
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
        <Link href="/refund-policy">Refund Policy</Link>
      </div>
    </div>
  );
}
