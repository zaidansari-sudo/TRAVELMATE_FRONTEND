"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Clock,
  CheckCircle,
  XCircle,
  LogOut,
} from "lucide-react";
import toast from "react-hot-toast";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItem = (href) =>
    `w-full flex items-center gap-3 px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200
     ${
       pathname === href
         ? "bg-emerald-700 text-white shadow-md"
         : "text-gray-600 hover:bg-emerald-700 hover:text-white"
     }`;

  return (
    <div className="w-64 bg-white border-r border-gray-200 shadow-sm h-screen flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <h1
           className="text-2xl sm:text-3xl font-serif text-emerald-900 tracking-wide mb-2 group-hover:text-emerald-700 transition-colors font-bold">
            TRAVELMATE
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">

        <Link href="/admin" className={menuItem("/admin")}>
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link href="/admin/pending" className={menuItem("/admin/pending")}>
          <Clock size={18} />
          Pending
        </Link>

        <Link href="/admin/confirmed" className={menuItem("/admin/confirmed")}>
          <CheckCircle size={18} />
          Confirmed
        </Link>

        <Link href="/admin/cancelled" className={menuItem("/admin/cancelled")}>
          <XCircle size={18} />
          Cancelled
        </Link>

         {/* <Link href="/admin/history" className={menuItem("/admin/cancelled")}>
          <XCircle size={18} />
          History
        </Link> */}

      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-gray-50">
        <button
          onClick={() => {
            localStorage.removeItem("token");
            toast.success("Logged out successfully");
            window.location.href = "/login";
          }}
          className="w-full flex items-center gap-3 px-6 py-4 text-sm text-gray-600 hover:bg-emerald-700 hover:text-white transition-all"
        >
          <LogOut size={18} />
          Logout
        </button>

        <p className="text-xs py-4 text-gray-500 text-center font-medium">
          TravelMate © 2025
        </p>
      </div>
    </div>
  );
}