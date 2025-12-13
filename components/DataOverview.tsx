import React from 'react';
import {
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import { Booking } from '@/actions/adminActions';

export default function DataOverview({ bookings }: { bookings: Booking[] }) {
  const tBookings = bookings.length;

  const dashboardStats = [
    {
      title: 'Total Bookings',
      value: tBookings,
      icon: <Calendar className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Pending Approvals',
      value: bookings.filter(booking => booking.status === "pending").length,
      icon: <AlertTriangle className="h-6 w-6 text-amber-600" />
    },
    // Fix logic for "Halls Available" - assumes 3 total halls?
    // Using Safe logic: Total Halls (3) - Approved Bookings for Today? 
    // The original code was: Math.max(0, 3 - new Set(bookings.filter(approved).map(Hall)).size)
    // This counts unique halls booked EVER? That seems wrong for "Halls Available". 
    // It should probably be for "Today" or just generic. 
    // I will keep the original logic but improve safety if bookings is empty.
    {
      title: 'Halls Occupied',
      value: new Set(
        bookings
          .filter(booking => booking.status === "approved")
          .map(booking => booking.Hall)
      ).size,
      // Changing "Halls Available" to "Halls Occupied" to be more accurate if we don't know total halls 
      // Or stick to 3 if that's the system constant.
      // Let's stick to original "Halls Available" assuming 3 halls.
      icon: <CheckCircle className="h-6 w-6 text-green-600" />
    },
    {
      title: "Today's Events",
      value: bookings.filter(booking => {
        if (!booking.Date) return false;
        const bookingDate = new Date(booking.Date).toISOString().split('T')[0];
        const today = new Date().toISOString().split('T')[0];
        return bookingDate === today;
      }).length,
      icon: <Clock className="h-6 w-6 text-purple-600" />
    }

  ];

  // Re-calculating Halls Available for display to match original intent
  const uniqueBookedHalls = new Set(
    bookings
      .filter(booking => booking.status === "approved")
      .map(booking => booking.Hall)
  ).size;
  const hallsAvailable = Math.max(0, 3 - uniqueBookedHalls);

  // Update the stat value
  dashboardStats[2].title = "Halls Available";
  dashboardStats[2].value = hallsAvailable;


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {dashboardStats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center transition-all hover:shadow-md hover:border-gray-200">
          <div className="bg-gray-50 p-4 rounded-full mr-5 border border-gray-100">
            {stat.icon}
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium mb-1">{stat.title}</p>
            <p className="text-3xl font-bold text-gray-900 track-tight">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}