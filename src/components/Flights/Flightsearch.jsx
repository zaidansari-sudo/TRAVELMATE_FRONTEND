"use client";

import { PlaneTakeoff, PlaneLanding, Users, Search } from "lucide-react";
import { useState } from "react";

export default function Flightsearch({ onSearch }) {
  const [form, setForm] = useState({
    from: "DEL",
    to: "BOM",
    departDate: "",
    returnDate: "",
    adults: 1,
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-emerald-100">
      <h2 className="font-serif text-3xl mb-6">Search Flights</h2>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <input
          name="from"
          value={form.from}
          onChange={handleChange}
          className="tm-input"
          placeholder="From (DEL)"
        />

        <input
          name="to"
          value={form.to}
          onChange={handleChange}
          className="tm-input"
          placeholder="To (BOM)"
        />

        <input
          type="date"
          name="departDate"
          onChange={handleChange}
          className="tm-input"
        />

        <input
          type="date"
          name="returnDate"
          onChange={handleChange}
          className="tm-input"
        />

        <select
          name="adults"
          onChange={handleChange}
          className="tm-select"
        >
          {[1,2,3,4,5].map(n => (
            <option key={n} value={n}>{n} Passenger{n > 1 && "s"}</option>
          ))}
        </select>

        <button
          onClick={() => onSearch(form)}
          className="bg-emerald-700 text-white rounded-xl flex items-center justify-center gap-2"
        >
          <Search size={18} />
          Search
        </button>
      </div>
    </div>
  );
}
