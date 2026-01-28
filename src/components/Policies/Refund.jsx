import Link from "next/link";

function Refund() {
  return (
    <main className="bg-[#FBFAF7] pt-32 pb-32 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-10">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Refund Policy</span>
        </nav>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
          Refund Policy
        </h1>

        <p className="text-gray-600 mb-12">
          Last updated: January 2026
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl mb-3">Customer Cancellations</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>30+ days before departure: Partial refund</li>
              <li>15–30 days before departure: Up to 50% refund</li>
              <li>Less than 15 days: No refund</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">Cancellation by TRAVELMATE</h2>
            <p>
              If a trip is canceled by us, customers may choose a full refund or
              reschedule their journey.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">Non-Refundable Charges</h2>
            <p>
              Permits, third-party bookings, and processing fees are
              non-refundable.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">Refund Processing</h2>
            <p>
              Approved refunds are processed within 7–14 business days to the
              original payment method.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
export default Refund