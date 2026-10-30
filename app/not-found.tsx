import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      <p className="font-serif text-6xl font-bold text-gold">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white">Page not found</h1>
      <p className="mt-3 text-sm text-subtle">The page you're looking for doesn't exist or has been moved.</p>
      <Link href="/" className="gold-btn mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
        <ArrowLeft size={15} /> Back to Home
      </Link>
    </section>
  );
}
