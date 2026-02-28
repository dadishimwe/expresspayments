import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Express Payments",
  description: "Terms and Conditions for Express Payments",
};

export default function TermsAndConditions() {
  return (
    <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col gap-8 py-12">
      <h1 className="text-center text-4xl font-medium tracking-tight sm:text-5xl">Terms and Conditions</h1>
      
      <div className="prose prose-sm dark:prose-invert max-w-none space-y-6 text-base leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold tracking-tight">1. Agreement to Terms</h2>
          <p>
            By accessing and using this website and Express Payments services, you accept and agree to be bound by and comply with these Terms and Conditions. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Express Payments&apos; website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>Modify or copy the materials.</li>
            <li>Use the materials for any commercial purpose or for any public display.</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
            <li>Remove any copyright or other proprietary notations from the materials.</li>
            <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">3. Disclaimer</h2>
          <p>
            The materials on Express Payments&apos; website are provided on an &apos;as is&apos; basis. Express Payments makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">4. Limitations</h2>
          <p>
            In no event shall Express Payments or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Express Payments&apos; website, even if Express Payments or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on Express Payments&apos; website could include technical, typographical, or photographic errors. Express Payments does not warrant that any of the materials on its website are accurate, complete, or current. Express Payments may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">6. Links</h2>
          <p>
            Express Payments has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Express Payments of the site. Use of any such linked website is at the user&apos;s own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">7. Modifications</h2>
          <p>
            Express Payments may revise these terms and conditions for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms and conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">9. Payment Processing Terms</h2>
          <p>
            By using Express Payments services, you agree to the following:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>You are responsible for all transactions processed through your account.</li>
            <li>Processing rates are Interchange plus $0.03 + 0.02% with a $29.99 monthly service fee.</li>
            <li>You acknowledge the risk-free trial period with no long-term contract.</li>
            <li>You may cancel services at any time without penalty.</li>
            <li>All payment information must be accurate and up-to-date.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight">10. Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <div className="mt-4 space-y-2 rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
            <p><strong>Express Payments Inc.</strong></p>
            <p>Email: support@expresspayments.com</p>
            <p>Phone: 1-800-EXPRESS-1</p>
          </div>
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
