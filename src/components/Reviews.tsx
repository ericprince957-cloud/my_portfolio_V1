import { useState } from "react";
import { portfolioConfig } from "../config";
import { ScrollReveal, SectionHeading } from "./ui";
import { Star, MessageCircle, Quote, ExternalLink } from "lucide-react";

/**
 * ============================================================
 * REVIEWS DATA
 * ============================================================
 * 
 * Add client reviews here. Each review includes:
 * - name: Client name
 * - company: Company/project name
 * - rating: 1-5 stars
 * - review: The testimonial text
 * - date: When the review was left (optional)
 * 
 * To add a new review, simply add a new object to the array.
 * ============================================================
 */

interface Review {
  name: string;
  company: string;
  rating: number;
  review: string;
  date?: string;
}

const reviews: Review[] = [
  {
    name: "Chukwuemeka Samuel",
    company: "Techlaza",
    rating: 4,
    review: "Professional and fast service. Vector delivered exactly what we needed for our gadget store. The glassmorphism design looks premium and our customers love the WhatsApp ordering feature.",
    date: "2026",
  },
  {
    name: "Seunbloom Team",
    company: "Seunbloom Chic",
    rating: 3,
    review: "Our fashion catalogue looks amazing on mobile! The WhatsApp booking integration works perfectly. Clients can browse and book directly. Highly recommended!",
    date: "2026",
  },
  {
    name: "Big Bro's Delivery",
    company: "Logistics Service",
    rating: 4,
    review: "Vector understood our logistics business needs and built a site that generates quotes efficiently. The tracking UI concepts were a great addition.",
    date: "2026",
  },
  {
    name: "Cumberland HVAC",
    company: "HVAC Services",
    rating: 3,
    review: "First time working with Vector and the experience was excellent. Professional landing page that represents our brand well. Fast delivery and great communication.",
    date: "2026",
  },
];

/**
 * Star Rating Component
 */
function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${sizeClasses[size]} ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"
          }`}
        />
      ))}
    </div>
  );
}

/**
 * Review Card Component
 */
function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-semibold text-slate-100">{review.name}</h4>
          <p className="text-sm text-slate-500">{review.company}</p>
        </div>
        <Quote size={24} className="text-cyan-400/20" />
      </div>
      
      <StarRating rating={review.rating} size="md" />
      
      <p className="text-slate-300 mt-4 leading-relaxed text-sm">"{review.review}"</p>
      
      {review.date && (
        <p className="text-xs text-slate-600 mt-4">{review.date}</p>
      )}
    </div>
  );
}

export default function Reviews() {
  const { contactInfo } = portfolioConfig;
  const [showAll, setShowAll] = useState(false);

  // Calculate average rating
  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  // WhatsApp message for leaving a review
  const reviewMessage = `Hi Vector! I'd like to leave a review for your work.\n\nName: \nCompany/Project: \nRating (1-5 stars): \nReview: \n\nThank you!`;
  const whatsappReviewLink = `https://wa.me/${contactInfo.whatsapp.replace("+", "")}?text=${encodeURIComponent(reviewMessage)}`;

  return (
    <section id="reviews" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Reviews"
            title="What Clients Say"
            description="Real feedback from real clients. Your satisfaction is my priority."
          />
        </ScrollReveal>

        {/* Rating Summary */}
        <ScrollReveal delay={100}>
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto mb-12 text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
              {averageRating.toFixed(1)}
            </div>
            <StarRating rating={Math.round(averageRating)} size="lg" />
            <p className="text-slate-400 mt-3">
              Based on {reviews.length} reviews
            </p>
          </div>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedReviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 100}>
              <ReviewCard review={review} />
            </ScrollReveal>
          ))}
        </div>

        {/* Show More / Leave Review Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {reviews.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 glass-card hover:bg-white/15 text-slate-100 font-medium rounded-xl transition-all hover:scale-105 cursor-pointer"
            >
              {showAll ? "Show Less" : `Show All Reviews (${reviews.length})`}
            </button>
          )}
          
          <a
            href={whatsappReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/20 hover:scale-105"
          >
            <MessageCircle size={18} />
            Leave a Review
            <ExternalLink size={14} />
          </a>
        </div>

        {/* How it works */}
        <ScrollReveal delay={300}>
          <div className="mt-12 glass-card rounded-2xl p-6 max-w-2xl mx-auto">
            <h4 className="font-semibold text-slate-100 mb-3 text-center">How to Leave a Review</h4>
            <ol className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center text-xs font-bold">1</span>
                <span>Click "Leave a Review" button above</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center text-xs font-bold">2</span>
                <span>Fill in your name, company, and rating (1-5 stars)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center text-xs font-bold">3</span>
                <span>Write your review and send via WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center text-xs font-bold">4</span>
                <span>Your review will be added to this page!</span>
              </li>
            </ol>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
