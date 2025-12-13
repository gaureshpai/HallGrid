import { getBookings, getUsers } from '@/actions/adminActions';
import BookingsClient from '@/components/BookingsClient';
import DataOverview from '@/components/DataOverview';
import UsersClient from '@/components/UsersClient';
import ContactMessages from '@/components/ContactMessages'
import { getAllContacts } from '@/actions/contactActions';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const bookings = await getBookings();
  const users = await getUsers();
  const contacts = await getAllContacts();

  return (
    <div className="container mx-auto px-4 max-w-7xl space-y-12 pb-12">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h2>
        <DataOverview bookings={bookings} />
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4">Manage Bookings</h2>
        <BookingsClient bookings={bookings} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4">User Management</h2>
          <UsersClient users={users} />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-4">Contact Messages</h2>
          <ContactMessages contacts={contacts} />
        </div>
      </div>
    </div>
  );
}