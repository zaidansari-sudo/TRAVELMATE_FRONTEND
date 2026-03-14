"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Users,
  LogOut,
  ChevronRight,
  Compass,
  Ticket,
  AlertCircle,
  CheckCircle2,
  Star,
  ArrowRight,
} from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const fetchData = async () => {
      try {
        const [userRes, bookingsRes] = await Promise.all([
          axios.get(`${API}/api/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(`${API}/api/bookings/my`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        setUser(userRes.data);
        setBookings(bookingsRes.data);
      } catch (err) {
        setError("Failed to load profile. Please try again.");
        toast.error("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    router.push("/");
  };


const upcomingBookings = bookings.filter(
  (b) => b.status === "Pending" || b.status === "Confirmed"
);


const pastBookings = bookings.filter(
  (b) => b.status === "Completed"
);

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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-gray-500 font-medium">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-md w-full text-center">
          <AlertCircle className="w-14 h-14 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h2>
          <p className="text-gray-500 mb-6">{error}</p>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-16 px-4">
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fade-up 0.5s ease-out forwards; }
        .fade-up-delay-1 { animation: fade-up 0.5s ease-out 0.1s forwards; opacity: 0; }
        .fade-up-delay-2 { animation: fade-up 0.5s ease-out 0.2s forwards; opacity: 0; }
        .fade-up-delay-3 { animation: fade-up 0.5s ease-out 0.3s forwards; opacity: 0; }
      `}</style>

      <div className="max-w-5xl mx-auto space-y-8">

        {/* ── HERO CARD ── */}
        <div className="fade-up relative bg-emerald-700 rounded-3xl overflow-hidden shadow-2xl">
          {/* decorative circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-600 rounded-full opacity-40" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-emerald-800 rounded-full opacity-40" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 md:p-10">
            {/* Avatar */}
            <div className="flex-shrink-0 w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg">
              <User className="w-12 h-12 text-emerald-700" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <p className="text-emerald-200 text-sm font-semibold uppercase tracking-widest mb-1">
                Traveler Profile
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {user?.name || "Traveler"}
              </h1>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-3">
                {user?.email && (
                  <div className="flex items-center gap-2 text-emerald-100 text-sm">
                    <Mail className="w-4 h-4" />
                    {user.email}
                  </div>
                )}
                {user?.phone && (
                  <div className="flex items-center gap-2 text-emerald-100 text-sm">
                    <Phone className="w-4 h-4" />
                    {user.phone}
                  </div>
                )}
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 bg-white bg-opacity-15 hover:bg-opacity-25 text-white rounded-full font-semibold text-sm transition-all border border-white border-opacity-30"
            >
              <LogOut className="w-4 h-4" />
              Log Out
            </button>
          </div>

          {/* Stats bar */}
          <div className="relative z-10 border-t border-emerald-600 grid grid-cols-3 divide-x divide-emerald-600">
            <div className="py-5 text-center">
              <p className="text-2xl font-bold text-white">{bookings.length}</p>
              <p className="text-xs text-emerald-200 font-medium mt-0.5">Total Bookings</p>
            </div>
            <div className="py-5 text-center">
              <p className="text-2xl font-bold text-white">{upcomingBookings.length}</p>
              <p className="text-xs text-emerald-200 font-medium mt-0.5">Upcoming Trips</p>
            </div>
            <div className="py-5 text-center">
              <p className="text-2xl font-bold text-white">{pastBookings.length}</p>
              <p className="text-xs text-emerald-200 font-medium mt-0.5">Trips Completed</p>
            </div>
          </div>
        </div>

        {/* ── UPCOMING TRIPS ── */}
        <div className="fade-up-delay-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Compass className="w-5 h-5 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Trips</h2>
          </div>

          {upcomingBookings.length === 0 ? (
            <div className="bg-white rounded-3xl border-2 border-dashed border-gray-200 p-12 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Ticket className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">No upcoming trips</h3>
              <p className="text-gray-400 text-sm mb-6">
                You don't have any upcoming bookings. Start planning your next adventure!
              </p>
              <Link
                href="/package"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
              >
                Explore Packages
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {upcomingBookings.map((booking, i) => (
                <BookingCard key={booking.id || i} booking={booking} formatDate={formatDate} formatPrice={formatPrice} upcoming />
              ))}
            </div>
          )}
        </div>

        {/* ── PAST TRIPS ── */}
        {pastBookings.length > 0 && (
          <div className="fade-up-delay-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Star className="w-5 h-5 text-gray-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Past Adventures</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pastBookings.map((booking, i) => (
                <BookingCard key={booking.id || i} booking={booking} formatDate={formatDate} formatPrice={formatPrice} />
              ))}
            </div>
          </div>
        )}

        {/* ── EXPLORE CTA ── */}
        <div className="fade-up-delay-3 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <MapPin className="w-8 h-8 text-emerald-700" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-1">Ready for your next adventure?</h3>
            <p className="text-gray-500 text-sm">Explore our curated bike trips and tour packages across India.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/biketrip"
              className="px-5 py-3 rounded-full border-2 border-emerald-700 text-emerald-700 font-semibold hover:bg-emerald-700 hover:text-white transition-all text-sm text-center"
            >
              Bike Trips
            </Link>
            <Link
              href="/package"
              className="px-5 py-3 rounded-full bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition-all shadow-md text-sm text-center"
            >
              Packages
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}


// ── BOOKING CARD COMPONENT ──
function BookingCard({ booking, formatDate, formatPrice, upcoming = false }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md border overflow-hidden transition-all hover:shadow-xl hover:-translate-y-0.5 ${
      upcoming ? "border-emerald-200" : "border-gray-100"
    }`}>
      {/* Card top accent */}
      <div className={`h-1.5 w-full ${upcoming ? "bg-emerald-500" : "bg-gray-300"}`} />

      <div className="p-6">
        {/* Status badge + trip type */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
              upcoming
                ? "bg-emerald-100 text-emerald-700"
                : "bg-gray-100 text-gray-500"
            }`}>
              {upcoming ? (
                <><CheckCircle2 className="w-3 h-3" /> Upcoming</>
              ) : (
                <><Star className="w-3 h-3" /> Completed</>
              )}
            </span>
          </div>
          <span className="text-xs text-gray-400 font-medium">
  #{booking.id}
</span>
        </div>

        {/* Trip Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
          {booking.tripTitle || "Trip"}
        </h3>

        {/* Details grid */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-100">
              <Calendar className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Travel Date</p>
              <p className="font-semibold text-gray-800">{formatDate(booking.startDate)}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-100">
              <Users className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Travelers</p>
              <p className="font-semibold text-gray-800">
                {booking.travelers} {booking.travelers === 1 ? "Person" : "People"}
              </p>
            </div>
          </div>

          {booking.phone && (
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0 border border-gray-100">
                <Phone className="w-4 h-4 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Contact</p>
                <p className="font-semibold text-gray-800">{booking.phone}</p>
              </div>
            </div>
          )}
        </div>

        {/* Price footer */}
        <div className={`mt-5 pt-4 border-t flex items-center justify-between ${
          upcoming ? "border-emerald-100" : "border-gray-100"
        }`}>
          <span className="text-xs text-gray-400 font-medium">Total Paid</span>
          <span className={`text-xl font-bold ${upcoming ? "text-emerald-700" : "text-gray-600"}`}>
            {formatPrice(booking.price)}
          </span>
        </div>
      </div>
    </div>
  );
}