import { Clock, ArrowRight } from "lucide-react";

export default function FlightCard({ flight, onSelect }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">{flight.airline}</h3>
        <span className="text-emerald-700 font-bold">
          ₹{flight.price.toLocaleString()}
        </span>
      </div>

      <div className="flex justify-between text-sm text-gray-600 mb-4">
        <div>
          <p className="font-semibold">{flight.from} → {flight.to}</p>
          <p>{flight.depart} – {flight.arrive}</p>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          {flight.duration}
        </div>
      </div>

      <button
        onClick={() => onSelect(flight)}
        className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-2 rounded-full flex items-center justify-center gap-2"
      >
        Select Flight
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
