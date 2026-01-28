"use client";

import { useEffect, useState } from "react";

export default function BookingReviewPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("selectedFlight");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No flight selected</p>
      </main>
    );
  }

  const { flight, from, to, date, adults } = data;
  const itinerary = flight.itineraries[0];

  return (
    <main className="min-h-screen bg-[#FBFAF7] px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-3xl font-serif text-gray-900">
          Review Your Booking
        </h1>

        {/* Flight Summary */}
        <div className="bg-white rounded-2xl p-6 shadow space-y-4">

          <p className="text-lg font-medium">
            {from} → {to}
          </p>

          <p className="text-gray-600">
            Travel Date: <strong>{date}</strong>
          </p>

          <p className="text-gray-600">
            Stops: {itinerary.segments.length - 1}
          </p>

          <p className="text-gray-600">
            Duration: {itinerary.duration}
          </p>

          <p className="text-gray-600">
            Passengers: {adults}
          </p>

          <hr />

          <div className="flex justify-between items-center">
            <p className="text-gray-700 font-medium">
              Total Price
            </p>
            <p className="text-2xl font-semibold text-gray-900">
              ₹ {flight.price.total}
            </p>
          </div>

          <p className="text-xs text-gray-400">
            *Prices are indicative and subject to change at time of booking.
          </p>
        </div>

        {/* CTA */}
        <button
          className="w-full bg-emerald-700 hover:bg-emerald-800 
                     text-white py-4 rounded-xl font-semibold transition"
          onClick={() => alert("Next: Passenger details (coming next)")}
        >
          Continue to Passenger Details
        </button>

      </div>
    </main>
  );
}
