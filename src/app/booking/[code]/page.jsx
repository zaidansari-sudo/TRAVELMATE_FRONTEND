"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import {
  Ticket,
  Calendar,
  Users,
  Phone,
  Mail,
  CheckCircle2,
  MapPin,
} from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function BookingDetailsPage() {
  const { code } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const res = await axios.get(`${API}/api/bookings/${code}`);
        setBooking(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (code) fetchBooking();
  }, [code]);

  const formatDate = (dateStr) => {
    if (!dateStr) return "TBD";
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatPrice = (price) =>
    Number(price).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading booking...
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Booking not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* HERO */}
        <div className="bg-emerald-700 rounded-3xl overflow-hidden shadow-2xl p-8 text-white">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
              <Ticket className="w-8 h-8 text-emerald-700" />
            </div>

            <div>
              <p className="text-emerald-200 text-sm font-semibold">
                Booking Confirmed
              </p>
              <h1 className="text-3xl font-bold">
                {booking.tripTitle}
              </h1>
              <p className="text-emerald-200 mt-1">
                Booking ID: {booking.bookingCode}
              </p>
            </div>
          </div>
        </div>

        {/* BOOKING CARD */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">

          <h2 className="text-2xl font-bold mb-6">
            Booking Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <Info
              icon={<Calendar />}
              label="Travel Date"
              value={formatDate(booking.startDate)}
            />

            <Info
              icon={<Users />}
              label="Travelers"
              value={`${booking.travelers} People`}
            />

            <Info
              icon={<Phone />}
              label="Phone"
              value={booking.phone}
            />

            <Info
              icon={<Mail />}
              label="Email"
              value={booking.email}
            />

          </div>

          {/* PRICE */}
          <div className="mt-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between">
            <div>
              <p className="text-sm text-emerald-700 font-medium">
                Total Paid
              </p>
              <p className="text-2xl font-bold text-emerald-700">
                {formatPrice(booking.price)}
              </p>
            </div>

            <CheckCircle2 className="text-emerald-600 w-8 h-8" />
          </div>

        </div>

      </div>
    </main>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border">
      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center border">
        {icon}
      </div>

      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}