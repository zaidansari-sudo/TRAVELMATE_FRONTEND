"use client";

import React, { useMemo, useState, useEffect } from "react";
import { Search, CheckCircle, CreditCard } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const ConfirmedBookings = () => {
  const [search, setSearch] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("All");
  const [bookings, setBookings] = useState([]);

  const API = process.env.NEXT_PUBLIC_API_URL;

  /* ================= FETCH BOOKINGS ================= */

  useEffect(() => {
    fetchConfirmedBookings();
  }, []);

  const fetchConfirmedBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${API}/api/admin/bookings?status=Confirmed`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBookings(res.data);
    } catch (error) {
      console.error("Error fetching confirmed bookings:", error);
    }
  };

  /* ================= FILTER ================= */

  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      const matchSearch =
        b.id.toString().includes(search.toLowerCase()) ||
        b.name?.toLowerCase().includes(search.toLowerCase()) ||
        b.email?.toLowerCase().includes(search.toLowerCase()) ||
        b.tripTitle?.toLowerCase().includes(search.toLowerCase());

      const matchPackage =
        selectedPackage === "All" || b.tripTitle === selectedPackage;

      return matchSearch && matchPackage;
    });
  }, [search, selectedPackage, bookings]);

  const totalConfirmed = bookings.length;
  const totalRevenue = bookings.reduce((sum, b) => sum + b.price, 0);
  const avgBooking =
    totalConfirmed > 0 ? Math.round(totalRevenue / totalConfirmed) : 0;

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <div className="flex-1 p-4 sm:p-6 overflow-auto space-y-8">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Confirmed Bookings
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              Successfully confirmed customer bookings & payments
            </p>
          </div>
        </div>

        {/* ================= KPI ROW ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-xl">
                <CheckCircle className="text-emerald-700" size={18} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">
                  Total Confirmed
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  {totalConfirmed}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-xl">
                <CreditCard className="text-emerald-700" size={18} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500">
                  Total Revenue
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  ₹{totalRevenue.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
            <div>
              <p className="text-xs sm:text-sm text-gray-500">
                Avg Booking Value
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                ₹{avgBooking.toLocaleString()}
              </p>
            </div>
          </div>

        </div>

        {/* ================= FILTERS ================= */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-start sm:items-end">

          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by ID, customer, email..."
              className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div className="w-full sm:w-auto">
            <label className="block text-xs text-gray-500 mb-1">
              Package
            </label>
            <select
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-emerald-600"
            >
              <option>All</option>
              {[...new Set(bookings.map(b => b.tripTitle))].map((pkg, index) => (
                <option key={index}>{pkg}</option>
              ))}
            </select>
          </div>

        </div>

        {/* ================= TABLE ================= */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-[900px] w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  {[
                    "Booking ID",
                    "Customer",
                    "Package",
                    "Travelers",
                    "Phone",
                    "Amount",
                    "Status",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left px-6 py-4 text-xs font-semibold text-gray-500 uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredBookings.length === 0 && (
                  <tr>
                    <td colSpan={7} className="text-center py-10 text-gray-400">
                      No confirmed bookings found
                    </td>
                  </tr>
                )}

                {filteredBookings.map((b) => (
                  <tr
                    key={b.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {b.id}
                    </td>

                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">
                        {b.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {b.email}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-gray-700">
                      {b.tripTitle}
                    </td>

                    <td className="px-6 py-4 text-gray-700">
                      {b.travelers}
                    </td>

                    <td className="px-6 py-4 text-gray-700">
                      {b.phone}
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900">
                      ₹{b.price.toLocaleString()}
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                        Confirmed
                      </span>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConfirmedBookings;