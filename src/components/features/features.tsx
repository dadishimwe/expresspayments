import { FeaturesCarousel } from "@/components/features/features-carousel";
import { FeaturesTabs } from "@/components/features/features-tabs";
import { Badge } from "@/components/ui/badge";
import { CreditCardIcon, ShieldCheckIcon, SmartphoneIcon, TrendingUpIcon } from "lucide-react";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

const features = [
  {
    icon: <CreditCardIcon size={20} />,
    title: "Accept All Payments",
    description: "Accept credit, debit, and contactless payments like Apple Pay and Google Pay with ease.",
    image: "/products/clover-mini.png",
  },
  {
    icon: <SmartphoneIcon size={20} />,
    title: "Mobile & Flexible",
    description: "Take your business on the go with Clover Flex, or manage your countertop with Clover Mini.",
    image: "/products/clover-flex.png",
  },
  {
    icon: <ShieldCheckIcon size={20} />,
    title: "Risk-Free Trial",
    description: "Try our services with no long-term contracts. Cancel anytime if you're not satisfied.",
    image: "/products/clover-station-duo.png",
  },
  {
    icon: <TrendingUpIcon size={20} />,
    title: "Transparent Pricing",
    description: "Interchange plus $0.03 + 0.02%. No hidden fees, just straightforward business growth.",
    image: "/products/clover-mini.png",
  },
] satisfies Feature[];

export function Features() {
  return (
    <div id="features" className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <Badge variant="secondary" className="uppercase">
        Why Express Payments
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        The ultimate POS solution<div className="text-muted-foreground">for your business</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        We provide the hardware and software you need to run your business efficiently, 
        with the most competitive rates in the industry.
      </p>
      <FeaturesCarousel features={features} className="block lg:hidden" />
      <FeaturesTabs features={features} className="hidden lg:block" />
    </div>
  );
}
