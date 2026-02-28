import { FooterBlur } from "@/components/footer/footer-blur";
import { XIcon, LinkedInIcon } from "@/components/footer/icons";
import Link from "next/link";

const links = [
  {
    title: "Express Payments",
    links: [
      {
        label: "Home",
        href: "/",
        title: "Go to home page",
      },
      {
        label: "Features",
        href: "/#features",
        title: "See our features",
      },
      {
        label: "Pricing",
        href: "/pricing",
        title: "View pricing",
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        label: "Clover Flex",
        href: "/pricing",
        title: "Learn about Clover Flex",
      },
      {
        label: "Clover Mini",
        href: "/pricing",
        title: "Learn about Clover Mini",
      },
      {
        label: "Clover Station Duo",
        href: "/pricing",
        title: "Learn about Clover Station Duo",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "Terms & Conditions",
        href: "/terms-and-conditions",
        title: "Read our Terms & Conditions",
      },
      {
        label: "Privacy Policy",
        href: "/privacy-policy",
        title: "Read our Privacy Policy",
      },
      {
        label: "Refund Policy",
        href: "/refund-policy",
        title: "Read our Refund Policy",
      },
    ],
  },
  {
    title: "Follow Us",
    links: [
      {
        label: (
          <div className="flex items-center gap-2">
            <XIcon className="h-4 w-4" />
            <span>Twitter</span>
          </div>
        ),
        href: "https://x.com/",
        title: "Follow us on Twitter",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <LinkedInIcon className="h-4 w-4" />
            <span>LinkedIn</span>
          </div>
        ),
        href: "https://www.linkedin.com/",
        title: "Connect with us on LinkedIn",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-12 pt-37 md:py-25 md:pt-37">
      <FooterBlur />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 tracking-tight md:grid-cols-4">
        {links.map((link) => (
          <div key={link.title} className="mb-10 text-center">
            <h3 className="text-muted-foreground mb-8">{link.title}</h3>
            <ul className="flex flex-col items-center gap-8">
              {link.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    title={link.title}
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Express Payments. All rights reserved.
      </div>
    </footer>
  );
}
