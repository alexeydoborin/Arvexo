import { LegalPage } from "@/components/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/privacy-policy", "en");

const sections = [
  {
    title: "1. Who we are",
    items: [
      "Arvexo is an early-stage AI ecosystem developing digital products, Telegram bots, AI consulting and future ecosystem directions.",
      "This privacy policy describes how Arvexo collects, uses and protects data when you visit the website, request early access, use products or contact support.",
      "We build Arvexo with a privacy-first approach: we collect what is needed, isolate it properly and do not sell personal data."
    ]
  },
  {
    title: "2. Data we collect",
    items: [
      "Contact data: name, email address, Telegram account, phone number and organization when you submit a form, request access or contact us.",
      "Technical data: IP address, browser type, device identifiers, cookies, page visit logs and session data collected automatically when you use the website.",
      "Transaction data: payment status, amount, date and transaction identifier processed by payment providers when you pay for a product or subscription.",
      "Communication data: messages, requests and support history sent through contact forms, email or Telegram channels."
    ]
  },
  {
    title: "3. How we use your data",
    items: [
      "Delivering products: processing requests, activating subscriptions, issuing access keys and providing Arvexo Connect, AI Products, AI Consulting and Telegram bots.",
      "Communication: responding to inquiries, sending product updates, access notifications, security alerts and service announcements.",
      "Security and integrity: protecting the platform from abuse, detecting unauthorized access, diagnosing errors and maintaining service reliability.",
      "Product improvement: understanding how features are used, identifying bugs and developing the Arvexo ecosystem."
    ]
  },
  {
    title: "4. Cookies",
    items: [
      "We use cookies and similar technologies to maintain session state, remember preferences and understand how the website is used.",
      "Essential cookies are required for basic website functionality and cannot be disabled. Analytics cookies help us understand usage patterns.",
      "You can control cookies through your browser settings. Disabling certain cookies may affect website functionality."
    ]
  },
  {
    title: "5. Third-party services",
    items: [
      "We use hosting providers, payment processors, email services, Telegram and analytics tools to operate the platform.",
      "Each third-party provider has their own privacy policy. We share only the data necessary for the service to function.",
      "Arvexo does not sell personal data to third parties, advertisers or data brokers."
    ]
  },
  {
    title: "6. Data storage and retention",
    items: [
      "Data is stored on servers in accordance with applicable law and retained as long as needed to fulfill the stated purposes.",
      "After processing purposes are met, data may be deleted, anonymized or retained in limited form for compliance, security and reporting obligations.",
      "Payment records may be retained longer where required by tax, financial or legal regulations."
    ]
  },
  {
    title: "7. Your rights",
    items: [
      "You may request access to personal data we hold about you, correction of inaccurate data, or deletion of your data.",
      "You may also request restriction of processing, object to certain uses or request a portable copy of your data where technically feasible.",
      "To exercise these rights, contact arvexoai@gmail.com with your name, contact details and the specific request."
    ]
  },
  {
    title: "8. Security",
    items: [
      "We implement technical and organizational measures to protect personal data against unauthorized access, loss, alteration and disclosure.",
      "Access to personal data is limited to those who need it for legitimate operational purposes.",
      "In the event of a data breach that affects your rights, we will notify you as required by applicable law."
    ]
  },
  {
    title: "9. Updates",
    items: [
      "This privacy policy may be updated as Arvexo products, legal requirements or data practices evolve.",
      "A new version becomes effective after publication on the website. We recommend checking this page periodically.",
      "For significant changes, we will provide notice through the website, email or our Telegram channels where feasible."
    ]
  },
  {
    title: "10. Contact",
    items: [
      "For privacy questions, data requests, complaints or policy clarifications, contact arvexoai@gmail.com.",
      "For formal requests, include your full name, contact details, the product or feature involved and the nature of the request."
    ]
  }
];

export default function EnglishPrivacyPolicyPage() {
  return (
    <LegalPage
      badge="Privacy Policy"
      title="Arvexo Privacy Policy"
      subtitle="How we collect, use and protect your data when you use Arvexo products, request access or contact us."
      updated="Updated: June 9, 2026"
      sections={sections}
      actionHref="/contacts"
      actionLabel="Contact Arvexo"
    />
  );
}
