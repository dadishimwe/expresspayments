import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Express Payments",
  description: "Privacy Policy for Express Payments",
};

export default function PrivacyPolicy() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-8 py-12">
      <h1 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">Privacy Policy</h1>
      
      <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight">1. Introduction</h2>
          <p>
            Express Payments Inc. (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our payment processing services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">2. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>Personal Data:</strong> Name, email address, phone number, billing address, and business information.</li>
            <li><strong>Payment Information:</strong> Credit card details, bank account information, and transaction history (processed securely through PCI-compliant systems).</li>
            <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent on pages, and links clicked.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to enhance your experience.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">3. Use of Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
          <ul className="list-inside list-disc space-y-2">
            <li>Process your transactions and send related information.</li>
            <li>Email regarding your account or order.</li>
            <li>Fulfill and manage purchases, orders, payments, and other transactions related to our services.</li>
            <li>Generate a personal profile about you so that future visits to the Site will be personalized.</li>
            <li>Increase the efficiency and operation of the Site.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
            <li>Notify you of updates to the Site.</li>
            <li>Offer new products, services, and/or recommendations to you.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">4. Disclosure of Your Information</h2>
          <p>We may share your information in the following situations:</p>
          <ul className="list-inside list-disc space-y-2">
            <li><strong>By Law or to Protect Rights:</strong> If required by law or if we believe in good faith that disclosure is necessary to protect our rights or the rights of others.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
            <li><strong>Business Transfers:</strong> Your information may be transferred as part of a merger, acquisition, or sale of assets.</li>
            <li><strong>Clover Platform:</strong> Your information is shared with Clover to facilitate payment processing and device management.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">5. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">6. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-4 space-y-2 rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
            <p><strong>Express Payments Inc.</strong></p>
            <p>Email: privacy@expresspayments.com</p>
            <p>Phone: 1-800-EXPRESS-1</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">7. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Changes and clarifications will take effect immediately upon their posting to the Site. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
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
