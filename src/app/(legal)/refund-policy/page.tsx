import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - Express Payments",
  description: "Refund Policy for Express Payments",
};

export default function RefundPolicy() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-8 py-12">
      <h1 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">Refund Policy</h1>
      
      <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight">1. Risk-Free Trial</h2>
          <p>
            Express Payments offers a risk-free trial period for all new merchants. During this trial period, you can experience our services with no long-term contract or commitment. If you&apos;re not satisfied with our service, you can cancel at any time without penalty.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">2. Service Cancellation</h2>
          <p>
            You may cancel your Express Payments service at any time by contacting our support team. There are no cancellation fees, early termination fees, or penalties. Your cancellation will be processed within 5 business days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">3. Monthly Service Fee Refunds</h2>
          <p>
            The $29.99 monthly service fee is non-refundable once the billing period has commenced. However, if you cancel your service before the end of your billing cycle, you will not be charged for the following month.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">4. Hardware Returns</h2>
          <p>
            Clover devices provided by Express Payments (Clover Flex and Clover Mini) are provided at no cost. If you cancel your service, you may return the hardware to us within 30 days of cancellation for a full refund of any applicable fees. Devices must be returned in good working condition.
          </p>
          <ul className="list-inside list-disc space-y-2 mt-2">
            <li>Devices with physical damage may incur a restocking fee of up to $150.</li>
            <li>Return shipping is the responsibility of the merchant.</li>
            <li>Refunds will be processed within 10 business days of receiving the returned hardware.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">5. Transaction Disputes</h2>
          <p>
            For disputes regarding specific transactions, please contact our support team. We will investigate the matter and work with you to resolve any issues. Transaction disputes must be reported within 60 days of the transaction date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">6. Processing Fee Adjustments</h2>
          <p>
            If you believe you have been charged incorrect processing fees, please contact our support team immediately. We will review your account and make any necessary adjustments. Refunds for processing fee errors will be credited to your account within 5-10 business days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">7. Service Interruption Refunds</h2>
          <p>
            In the event of service interruption lasting more than 24 hours due to Express Payments&apos; systems, we will credit your account with a prorated refund of your monthly service fee for the period of interruption.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">8. Clover Station Duo Purchase</h2>
          <p>
            The Clover Station Duo is sold at a special promotional price of $999. This purchase is non-refundable after 30 days of purchase. Within 30 days, you may return the device in original condition for a full refund. Return shipping is the responsibility of the merchant.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">9. How to Request a Refund</h2>
          <p>
            To request a refund or return hardware, please contact our support team:
          </p>
          <div className="mt-4 space-y-2 rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
            <p><strong>Express Payments Inc.</strong></p>
            <p>Email: support@expresspayments.com</p>
            <p>Phone: 1-800-EXPRESS-1</p>
            <p>Hours: Monday - Friday, 8:00 AM - 6:00 PM EST</p>
          </div>
          <p className="mt-4">
            Please provide your account information and a detailed description of your refund request. Our team will respond within 24 business hours.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">10. Changes to This Policy</h2>
          <p>
            Express Payments reserves the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <p className="text-sm text-muted-foreground">
            Last Updated: February 28, 2026
          </p>
        </section>
      </div>
    </div>
  );
}
