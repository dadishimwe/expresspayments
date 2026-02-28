import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";

function AccordionItemFAQs(props: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      {...props}
      className={cn(
        "bg-secondary/30 data-[state=open]:bg-card data-[state=open]:border-border rounded-lg border border-transparent px-5 py-2 transition-colors data-[state=open]:shadow-sm lg:px-7",
        props.className,
      )}
    />
  );
}

function AccordionTriggerFAQs(props: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      {...props}
      className={cn("[&[data-state=open]>svg]:text-foreground text-base lg:text-lg", props.className)}
    />
  );
}

function AccordionContentFAQs(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} className={cn("text-muted-foreground lg:text-base", props.className)} />;
}

export function FAQs() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25">
      <div className="flex w-full flex-col gap-6">
        <Badge variant="secondary" className="mb-2 uppercase">
          FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          Frequently
          <br />
          Asked <span className="text-muted-foreground">Questions</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          Everything you need to know about Express Payments and our Clover solutions.
        </p>
        <Button className="w-fit" size="lg" asChild>
          <Link href="/pricing">Get Started</Link>
        </Button>
      </div>
      <Accordion type="single" collapsible defaultValue="pricing" className="grid w-full gap-4">
        <AccordionItemFAQs value="pricing">
          <AccordionTriggerFAQs>What are your processing rates?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              We offer transparent pricing: Interchange plus $0.03 + 0.02%. There are no hidden fees, and we include a $29.99 monthly service fee.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="contract">
          <AccordionTriggerFAQs>Do I need a long-term contract?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              No. We offer a risk-free trial with no contract. You can cancel anytime if you're not satisfied with our service.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="devices">
          <AccordionTriggerFAQs>Why are the Clover Flex and Mini free?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              We believe in making payment processing accessible. Most companies charge $2,250 to $3,250 for these devices. We offer them free to help your business grow.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="support">
          <AccordionTriggerFAQs>What kind of support do you provide?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              We provide world-class customer support to help you succeed. Our team is available to assist with setup, troubleshooting, and any questions you have.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="setup">
          <AccordionTriggerFAQs>How long does setup take?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Setup is quick and easy. Most merchants are up and running within minutes. Our team can guide you through the entire process.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="devices-choice">
          <AccordionTriggerFAQs>Which device should I choose?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              It depends on your needs. Clover Flex is perfect for mobile and on-the-go payments. Clover Mini is ideal for compact countertops. Clover Station Duo is best for high-volume retail or restaurants.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
      </Accordion>
    </div>
  );
}
