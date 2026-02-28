import { Badge } from "@/components/ui/badge";
import { TestimonialMarquee } from "@/components/testimonials/testimonial-marquee";

export type Testimonial = {
  name: string;
  date: string;
  title: string;
  content: string;
  avatar?: string;
  rating: number;
};

const testimonials = [
  {
    name: "Sarah Jenkins",
    date: "Feb 15",
    title: "Owner, The Daily Grind Coffee Shop",
    content: `"Switching to Express Payments was the best decision for my business. The Clover Station Duo is incredibly fast, and the rates are the most transparent I've ever seen."`,
    rating: 5,
  },
  {
    name: "Marcus Thompson",
    date: "Feb 10",
    title: "Manager, Urban Boutique",
    content: `"The Clover Flex has transformed how we handle payments. We can process transactions anywhere in the store, and the setup was seamless."`,
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    date: "Feb 8",
    title: "Chef & Owner, Fusion Kitchen",
    content: `"Express Payments' customer support is outstanding. They helped us get everything set up in minutes, and the rates are unbeatable."`,
    rating: 5,
  },
  {
    name: "David Chen",
    date: "Feb 5",
    title: "Founder, Tech Repair Hub",
    content: `"I love the Clover Mini for its compact design. It fits perfectly on our counter, and the risk-free trial gave us confidence to make the switch."`,
    rating: 5,
  },
  {
    name: "Jessica Williams",
    date: "Jan 28",
    title: "Owner, Wellness Spa",
    content: `"The transparency in pricing is refreshing. No hidden fees, just straightforward rates. Express Payments truly cares about their merchants."`,
    rating: 5,
  },
  {
    name: "Robert Martinez",
    date: "Jan 22",
    title: "Manager, Artisan Bakery",
    content: `"Getting the Clover Mini for free was incredible. The quality is exceptional, and the service has exceeded all our expectations."`,
    rating: 5,
  },
] satisfies Testimonial[];

export function Testimonials() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-14 md:py-25">
      <Badge variant="secondary" className="mb-2 uppercase">
        Testimonials
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Don&apos;t Take<div className="text-muted-foreground">Our Word for It</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Thousands of merchants trust Express Payments for transparent pricing, exceptional service, and industry-leading Clover devices.
      </p>
      <div className="relative w-[calc(100%+3rem)] overflow-x-hidden py-4 lg:w-full">
        <TestimonialMarquee testimonials={testimonials} className="mb-4" />
        <TestimonialMarquee testimonials={testimonials} reverse />
      </div>
    </div>
  );
}
