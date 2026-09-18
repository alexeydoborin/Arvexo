import { LegalPage } from "@/components/LegalPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/offer", "en");

const sections = [
  {
    title: "1. General terms",
    items: [
      "This public offer describes baseline terms for Arvexo digital products, subscriptions, AI services, consulting and early access.",
      "The offer applies to users and organizations that submit a request, pay for a product, activate a subscription or use issued access.",
      "Arvexo is in MVP and staged launch mode, so individual features may operate in testing, change over time or become available later."
    ]
  },
  {
    title: "2. Acceptance",
    items: [
      "Acceptance includes registration, submitting a request, payment, receiving access, using an account, Telegram bot, AI tool or another Arvexo service.",
      "By accepting, the user confirms that they have reviewed the public offer, user agreement and privacy policy.",
      "If a user acts on behalf of an organization, they confirm that they have authority to accept the terms for that organization."
    ]
  },
  {
    title: "3. Scope",
    items: [
      "Arvexo may provide access to Arvexo Connect, AI Products, Arvexo Study, AI Consulting, Telegram bots, digital materials and future ecosystem products.",
      "The exact product scope, access period, price, limits and activation method are specified on the product page, invoice, correspondence, account or another order confirmation.",
      "Access is provided digitally unless another delivery format is explicitly agreed for a specific product."
    ]
  },
  {
    title: "4. Payment and access",
    items: [
      "Product and subscription prices are published on the website, account, Telegram shop, invoice or commercial offer.",
      "Access may be activated after payment, request review, manual key delivery or account connection.",
      "For early access products, activation timing may depend on the queue, technical readiness and review of the intended use case."
    ]
  },
  {
    title: "5. Refunds and cancellation",
    items: [
      "Refunds are available where required by applicable law and by the published rules of the specific product.",
      "For digital products and access keys, refunds may be limited after access has been issued and the service has started being used.",
      "Refund and dispute requests should be sent through Arvexo contacts with the product, payment date and preferred contact method."
    ]
  },
  {
    title: "6. Usage restrictions",
    items: [
      "Users may not transfer access to third parties, bypass technical limits, disrupt services or use products for unlawful activity.",
      "Copying closed logic, unauthorized access attempts, unsanctioned mass automation and actions that create excessive load are prohibited.",
      "Arvexo may suspend access if terms are violated, security is at risk, abuse is suspected or legal requirements apply."
    ]
  },
  {
    title: "7. Updates",
    items: [
      "Arvexo may update this offer, pricing, product scope and access rules as the ecosystem develops.",
      "A new version becomes effective after publication on the website unless another effective date is stated.",
      "Continued use of services after an update means acceptance of the updated version."
    ]
  },
  {
    title: "8. Contacts",
    items: [
      "Questions about products, payments, access and documents can be sent to arvexoai@gmail.com or through Arvexo Telegram channels.",
      "For formal requests, include your name, contact details, product, request date and the substance of the question."
    ]
  }
];

export default function EnglishOfferPage() {
  return (
    <LegalPage
      badge="Offer"
      title="Arvexo Public Offer"
      subtitle="Working terms for early access, digital products, subscriptions, AI services and future ecosystem directions."
      updated="Updated: June 9, 2026"
      sections={sections}
      actionHref="/contacts"
      actionLabel="Contact Arvexo"
    />
  );
}
