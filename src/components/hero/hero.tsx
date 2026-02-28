import { Nav } from "@/components/hero/nav";
import { BackgroundBlur } from "@/components/ui/background-blur";
import { Button } from "@/components/ui/button";
import { Pill } from "@/components/ui/pill";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="z-1 grid w-full place-items-center p-8">
      <BackgroundBlur className="-top-40 md:-top-0" />
      <Nav />
      <div className="mt-16 flex flex-col items-center gap-6">
        <Pill>
          <p className="text-muted-foreground px-2 text-xs font-medium sm:text-sm">
            Risk-free trial • No contract • Cancel anytime
          </p>
        </Pill>
        <h1 className="text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-7xl">
          Express Payments<span className="text-muted-foreground block">Smart POS Solutions.</span>
        </h1>
        <p className="max-w-lg text-center leading-6 tracking-tight sm:text-xl">
          Get the industry-leading Clover devices for your business. 
          Transparent pricing, no hidden fees, and world-class support.
        </p>
        <div className="flex gap-4">
          <Button className="mb-10 w-fit" size="lg" asChild>
            <Link href="/pricing">View Pricing</Link>
          </Button>
          <Button variant="outline" className="mb-10 w-fit" size="lg" asChild>
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
        <div className="relative mt-8 flex justify-center gap-4 md:gap-12">
          <div className="flex flex-col items-center gap-2">
            <Image src="/products/clover-flex.png" alt="Clover Flex" width={150} height={150} className="object-contain" />
            <span className="text-sm font-medium">Clover Flex</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src="/products/clover-mini.png" alt="Clover Mini" width={200} height={200} className="object-contain" />
            <span className="text-sm font-medium">Clover Mini</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Image src="/products/clover-station-duo.png" alt="Clover Station Duo" width={250} height={250} className="object-contain" />
            <span className="text-sm font-medium">Clover Station Duo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
