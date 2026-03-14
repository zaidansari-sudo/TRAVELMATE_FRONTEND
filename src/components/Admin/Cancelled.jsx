"use client";

import React, { useMemo, useState, useEffect } from "react";
import { Search, XCircle, TrendingDown } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const CancelledBookings = () => {
  const [search, setSearch] = useState("");
  const [selectedReason, setSelectedReason] = useState("All");
  const [bookings, setBookings] = useState([]);

  const API = process.env.NEXT_PUBLIC_API_URL;

  /* ================= FETCH BOOKINGS ================= */

  useEffect(() => {
    fetchCancelledBookings();
  }, []);

  const fetchCancelledBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${API}/api/admin/bookings?status=Cancelled`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(res.data);
    } catch (error) {
      console.error("Error fetching cancelled bookings:", error);
    }
  };

  /* ================= STATS ================= */

  const stats = useMemo(() => {
    const totalCancelled = bookings.length;

    const totalLostRevenue = bookings.reduce(
      (sum, b) => sum + (b.price || 0),
      0
    );

    const reasonCount = {};
    bookings.forEach((b) => {
      const reason = b.reason || "Unknown";
      reasonCount[reason] = (reasonCount[reason] || 0) + 1;
    });

    const topReason = Object.entries(reasonCount).sort(
      (a, b) => b[1] - a[1]
    )[0];

    return {
      totalCancelled,
      totalLostRevenue,
      topReason: topReason
        ? { name: topReason[0], count: topReason[1] }
        : null,
    };
  }, [bookings]);

  /* ================= FILTER ================= */

  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      const matchSearch =
        b.id?.toString().includes(search.toLowerCase()) ||
        b.name?.toLowerCase().includes(search.toLowerCase()) ||
        b.email?.toLowerCase().includes(search.toLowerCase()) ||
        b.tripTitle?.toLowerCase().includes(search.toLowerCase());

      const matchReason =
        selectedReason === "All" ||
        (b.reason || "Unknown") === selectedReason;

      return matchSearch && matchReason;
    });
  }, [search, selectedReason, bookings]);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">

      <div className="flex-1 p-4 sm:p-6 space-y-8 overflow-auto">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Cancelled Bookings
            </h1>
            <p className="text-gray-600 mt-1 text-xs sm:text-sm">
              Track cancelled bookings and lost revenue
            </p>
          </div>
        </div>

        {/* ================= STATS CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <StatCard
            title="Total Cancelled"
            value={stats.totalCancelled}
            icon={XCircle}
          />

          <StatCard
            title="Lost Revenue"
            value={`₹${stats.totalLostRevenue.toLocaleString()}`}
            icon={TrendingDown}
          />

          {stats.topReason && (
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                Most Common Reason
              </p>
              <p className="text-lg sm:text-xl font-bold text-gray-900">
                {stats.topReason.name}
              </p>
              <p className="text-xs sm:text-sm text-red-600 font-semibold mt-1">
                {stats.topReason.count} cancellations
              </p>
            </div>
          )}

        </div>

        {/* ================= FILTERS ================= */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-start sm:items-end">

            <div className="relative w-full sm:max-w-sm flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by ID, customer, email..."
                className="w-full p-3 pl-10 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none text-sm"
              />
            </div>

            <div className="w-full sm:w-auto">
              <label className="block text-xs sm:text-sm text-gray-600 mb-2">
                Cancellation Reason
              </label>
              <select
                value={selectedReason}
                onChange={(e) => setSelectedReason(e.target.value)}
                className="w-full sm:w-auto p-3 rounded-xl border-2 border-gray-200 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none text-sm"
              >
                <option>All</option>
                {[...new Set(bookings.map(b => b.reason || "Unknown"))].map(
                  (reason, index) => (
                    <option key={index}>{reason}</option>
                  )
                )}
              </select>
            </div>

          </div>

          {/* ================= TABLE ================= */}
          <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200">
            {filteredBookings.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No cancelled bookings found
              </div>
            ) : (
              <table className="min-w-[1000px] w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    {[
                      "Booking ID",
                      "Customer",
                      "Package",
                      "Travelers",
                      "Phone",
                      "Amount",
                      "Created Date",
                      "Reason",
                      "Status",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left p-4 font-semibold text-gray-700"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {filteredBookings.map((b, index) => (
                    <tr
                      key={b.id}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="p-4 font-medium text-gray-900">
                        {b.id}
                      </td>

                      <td className="p-4">
                        <div className="font-medium text-gray-900">
                          {b.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {b.email}
                        </div>
                      </td>

                      <td className="p-4 text-gray-700">
                        {b.tripTitle}
                      </td>

                      <td className="p-4 text-gray-700">
                        {b.travelers}
                      </td>

                      <td className="p-4 text-gray-700">
                        {b.phone}
                      </td>

                      <td className="p-4 font-semibold text-gray-900">
                        ₹{b.price?.toLocaleString()}
                      </td>

                      <td className="p-4 text-gray-700">
                        {new Date(b.createdAt).toLocaleDateString()}
                      </td>

                      <td className="p-4 text-gray-700">
                        {b.reason || "—"}
                      </td>

                      <td className="p-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">
                          Cancelled
                        </span>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

/* ================= STAT CARD ================= */

const StatCard = ({ title, value, icon: Icon }) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-red-100 rounded-xl">
          <Icon size={18} className="text-red-600" />
        </div>
        <p className="text-xs sm:text-sm text-gray-600 font-medium">
          {title}
        </p>
      </div>
      <p className="text-xl sm:text-2xl font-bold text-gray-900">
        {value}
      </p>
    </div>
  );
};

export default CancelledBookings;