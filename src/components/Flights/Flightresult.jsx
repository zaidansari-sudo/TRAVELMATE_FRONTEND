"use client";

import Flightcard from "@/components/Flights/Flightcard";

export default function Flightresult({ flights }) {
  if (!flights || flights.length === 0) {
    return (
      <div className="mt-12 text-center text-gray-500">
        No flights found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {flights.map((flight) => {
        const formatted = {
          id: flight.id,
          airline: flight.airlines[0],
          from: flight.cityFrom,
          to: flight.cityTo,
          depart: flight.local_departure.split("T")[1].slice(0,5),
          arrive: flight.local_arrival.split("T")[1].slice(0,5),
          duration: `${Math.floor(flight.duration.total / 3600)}h`,
          price: flight.price,
        };

        return <Flightcard key={formatted.id} flight={formatted} />;
      })}
    </div>
  );
}
