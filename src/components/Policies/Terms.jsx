import Link from "next/link";

function Terms() {
  return (
    <main className="bg-[#FBFAF7] pt-32 pb-32 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-10">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Terms & Conditions</span>
        </nav>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-12">
          Last updated: January 2026
        </p>

        <div className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl mb-3">Use of Website</h2>
            <p>
              By accessing this website, you agree not to misuse content,
              services, or attempt unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">Travel Services</h2>
            <p>
              All itineraries are subject to availability and may change due to
              weather, safety, or operational requirements.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">Bookings & Payments</h2>
            <p>
              Bookings are confirmed only upon receipt of payment. Failure to
              meet payment deadlines may result in cancellation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">Traveler Responsibilities</h2>
            <p>
              Travelers are responsible for valid travel documents, insurance,
              and personal well-being during the journey.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall
              fall under Indian jurisdiction.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
export default Terms