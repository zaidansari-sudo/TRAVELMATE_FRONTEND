"use client";

import { useState } from "react";
import Flightsearch from "@/components/Flights/Flightsearch";
import Flightresult from "@/components/Flights/Flightresult";

export default function FlightsPage() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchFlights = async (form) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `http://localhost:5000/api/flights/roundtrip?from=${form.from}&to=${form.to}&departDate=${form.departDate}&returnDate=${form.returnDate}&adults=${form.adults}`
      );

      const data = await res.json();
      setFlights(data);
    } catch (err) {
      setError("Failed to fetch flights");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#FBFAF7] pt-28 px-6 pb-24">
      <div className="max-w-7xl mx-auto">

        <Flightsearch onSearch={fetchFlights} />

        {loading && <p className="mt-8">Loading flights…</p>}
        {error && <p className="mt-8 text-red-600">{error}</p>}

        {!loading && flights.length > 0 && (
          <>
            <h2 className="mt-12 font-serif text-3xl">
              Available Flights
            </h2>

            <Flightresult flights={flights} />
          </>
        )}
      </div>
    </main>
  );
}
