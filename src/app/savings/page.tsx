import type { Metadata } from "next";
import { Nav } from "@/components/hero/nav";
import { RadialBlur } from "@/components/pricing/radial-blur";
import { Footer } from "@/components/footer/footer";
import { SavingsCalculator } from "@/components/calculator/savings-calculator";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Savings Calculator - Express Payments",
  description: "Calculate how much you can save with Express Payments' transparent pricing model.",
};

export default function SavingsPage() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col justify-between">
      <div className="isolate flex w-full flex-col p-8">
        <RadialBlur />
        <Nav />
        
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 py-12">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <Badge variant="secondary" className="uppercase">
              Savings Calculator
            </Badge>
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
              See How Much You&apos;ll Save
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Enter your monthly processing volume and current rate to discover your potential savings with Express Payments&apos; transparent, competitive pricing.
            </p>
          </div>

          {/* Calculator */}
          <SavingsCalculator />

          {/* Benefits Section */}
          <div className="mt-8 w-full max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-semibold">Why Switch to Express Payments?</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <div className="mb-4 text-3xl font-bold text-green-600">$0</div>
                <h3 className="mb-2 font-semibold">Free Hardware</h3>
                <p className="text-sm text-muted-foreground">
                  Get Clover Flex and Mini for free. Most competitors charge $2,250-$3,250.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="mb-4 text-3xl font-bold text-green-600">Transparent</div>
                <h3 className="mb-2 font-semibold">No Hidden Fees</h3>
                <p className="text-sm text-muted-foreground">
                  Interchange + $0.03 + 0.02%. That&apos;s it. No surprises, no fine print.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="mb-4 text-3xl font-bold text-green-600">Cancel</div>
                <h3 className="mb-2 font-semibold">Anytime</h3>
                <p className="text-sm text-muted-foreground">
                  Risk-free trial with no contract. Cancel anytime if you&apos;re not satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
