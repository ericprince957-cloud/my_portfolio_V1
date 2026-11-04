import type { Metadata } from "next";
import IndustryLanding from "@/components/IndustryLanding";

export const metadata: Metadata = {
  title: "Food Business Websites — Restaurants, Kitchens & Food Brands",
  description:
    "Websites and ordering platforms for Nigerian food businesses — digital menus, reservations, delivery-ready online ordering and WhatsApp-first ordering flows. Built by Vector Codes.",
};

export default function FoodBusinessPage() {
  return (
    <IndustryLanding
      badge="Food Business Websites"
      title="Turn Hungry Visitors Into Orders."
      titleAccent="Not Just Likes."
      subtitle="Great food sells itself — but only where customers can actually find it, see the menu and order in seconds. We build websites and ordering experiences for restaurants, cloud kitchens, caterers and food brands that turn social-media followers into paying customers."
      industryLabel="Food"
      refPath="/food-business-websites"
      pains={[
        "Your menu lives only on Instagram — customers cannot find prices or opening hours.",
        "Orders arrive as scattered DMs, comments and calls with no reliable record.",
        "Google searches for restaurants near you show competitors, not you.",
        "Reservations and event bookings happen manually, with double-bookings.",
        "Delivery is handled informally, with no structure as demand grows.",
      ]}
      solutions={[
        "A fast, mobile-first website with your real menu, prices and photos.",
        "WhatsApp and online ordering flows structured so no order gets lost.",
        "Reservation and event booking sections with clear confirmation.",
        "Local SEO basics so nearby customers actually find you on Google.",
        "A structure ready to grow into full online ordering and delivery management.",
      ]}
    />
  );
}
