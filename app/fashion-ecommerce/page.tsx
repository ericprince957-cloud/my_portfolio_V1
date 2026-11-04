import type { Metadata } from "next";
import IndustryLanding from "@/components/IndustryLanding";

export const metadata: Metadata = {
  title: "Fashion E-commerce — Online Stores for Clothing Brands",
  description:
    "E-commerce stores for Nigerian fashion brands — product catalogs, secure payments, size and inventory management and a branded shopping experience. Built by Vector Codes.",
};

export default function FashionEcommercePage() {
  return (
    <IndustryLanding
      badge="Fashion E-commerce"
      title="Your Brand Deserves More Than an Instagram Page."
      titleAccent="It Deserves a Storefront."
      subtitle="Fashion buyers want to browse, check sizes and pay in minutes — without sending ten DMs. We build branded online stores for fashion labels, from catalog and cart to secure Paystack payments and delivery-ready order management."
      industryLabel="Fashion"
      refPath="/fashion-ecommerce"
      pains={[
        "Selling only on Instagram limits how many people can browse and buy.",
        "Every order means back-and-forth DMs to agree size, price and payment.",
        "No structured inventory — sold-out items keep getting ordered.",
        "The brand looks bigger than the platform selling it.",
        "Payments and delivery tracking are manual and error-prone.",
      ]}
      solutions={[
        "A branded storefront that matches the quality of your label.",
        "Product catalogs with sizes, colours, stock states and clear pricing.",
        "Cart and checkout with secure Paystack payments.",
        "Order management so fulfilment stops living in chat messages.",
        "A foundation that grows with you — multi-vendor and logistics-ready.",
      ]}
    />
  );
}
