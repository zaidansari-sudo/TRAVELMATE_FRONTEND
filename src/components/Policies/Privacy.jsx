import Link from "next/link";

function Privacy() {
  return (
    <main className="bg-[#FBFAF7] pt-32 pb-32 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-10">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900">Privacy Policy</span>
        </nav>

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-12">
          Last updated: January 2026
        </p>

        {/* Content */}
        <div className="space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="font-serif text-2xl mb-3">Introduction</h2>
            <p>
              At TRAVELMATE, we value your privacy and are committed to protecting
              your personal information. This policy explains how we collect,
              use, and safeguard your data.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Travel enquiries and preferences</li>
              <li>Website usage data and cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">How We Use Your Data</h2>
            <p>
              Your information helps us respond to enquiries, plan journeys,
              improve our services, and communicate travel-related updates.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">Data Security</h2>
            <p>
              We implement appropriate safeguards to protect your information
              against unauthorized access, misuse, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl mb-3">Contact</h2>
            <p>
              For privacy-related questions, contact us at{" "}
              <span className="text-emerald-700">hello@travelmate.com</span>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
export default Privacy