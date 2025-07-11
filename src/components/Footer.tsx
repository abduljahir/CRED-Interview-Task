"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-[6.25vw] py-16 text-sm">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-16">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex flex-col gap-6 max-w-md">
            <div className="flex flex-col gap-4 items-left">
                
              <Image
                src="/assets/footer/cred-logo.png"
                alt="CRED logo"
                width={150}
                height={40}
                className="object-contain mb-5"
              />
              
              <Image
                src="/assets/footer/security.webp"
                alt="Security logo"
                width={348}
                height={248}
                className="object-contain"
              />
            </div>
            <div className="text-xl font-semibold">
              complete security. no asterisks.
            </div>
            <div className="text-gray-400">
              CRED encrypts all data and transactions to ensure a completely secure experience for our members.
            </div>
          </div>

          {/* Link sections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
            <FooterColumn
              heading="products"
              links={[
                { label: "CRED pay", href: "#" },
                { label: "credit score check", href: "#" },
              ]}
            />
            <FooterColumn
              heading="CRED"
              links={[
                { label: "about", href: "#" },
                { label: "careers", href: "#" },
                { label: "IPL", href: "#" },
                { label: "customer care", href: "#" },
              ]}
            />
            <FooterColumn
              heading="resources"
              links={[
                { label: "articles", href: "#" },
                { label: "tech blogs", href: "#" },
                { label: "calculators", href: "#" },
                { label: "credit card payment guide", href: "#" },
                { label: "credit score guide", href: "#" },
                { label: "Dreampurse wallet refund", href: "#" },
              ]}
            />
            <FooterColumn
              heading="policy"
              links={[
                { label: "security", href: "#" },
                { label: "transaction & user verification", href: "#" },
                { label: "Google API disclosure", href: "#" },
                { label: "UPI faq & grievances", href: "#" },
                { label: "equal opportunity policy", href: "#" },
                { label: "other disclosures", href: "#" },
              ]}
            />
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-gray-500 gap-4 text-xs">
          <div className="text-center lg:text-left">
            copyright © 2020-24 Dreamplug Technologies Pvt Ltd.
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            <FooterLink href="#" label="privacy policy" />
            <FooterLink href="#" label="terms and conditions" />
            <FooterLink href="#" label="returns and refund" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-white font-semibold">{heading}</h4>
      <div className="flex flex-col gap-2 text-gray-400">
        {links.map((link, i) => (
          <Link key={i} href={link.href} rel="noreferrer">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} rel="noreferrer" className="hover:underline">
      {label}
    </Link>
  );
}
